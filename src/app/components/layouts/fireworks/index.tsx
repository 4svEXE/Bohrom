import React, { useEffect } from "react";
import "./index.scss";

const CONFIG = {
  // Колір фону полотна
  canvasBackground: "#222",

  // Кількість батарейок, які запускаються на початку
  initialBatteries: 3, // Зменшено для меншого навантаження

  // Ймовірність додавання нової батарейки на кожному кадрі (від 0 до 1)
  randomBatteryChance: 0.02, // Зменшено ймовірність, щоб зменшити кількість частинок

  // Мінімальна і максимальна тривалість життя батарейки (в кадрах)
  batteryLifetimeMin: 300, // Зменшено для меншої кількості частинок одночасно
  batteryLifetimeMax: 1000,

  // Мінімальний і максимальний інтервал між пострілами батарейки (в кадрах)
  batterySalveIntervalMin: 30, // Збільшено інтервал для меншої частоти запусків
  batterySalveIntervalMax: 50,

  // Мінімальна і максимальна швидкість частинок
  salveSpeedMin: 0.4, // Зменшено швидкість для меншого навантаження
  salveSpeedMax: 0.8,

  // Максимальна висота, якої досягають частинки (від 0 до 1, де 1 — вся висота екрана)
  salveMaxY: 0.4, // Зменшено для більш компактних вибухів

  // Кількість частинок у вибуху
  explosionParticles: 24, // Зменшено кількість частинок

  // Мінімальна і максимальна початкова швидкість частинок у вибуху
  explosionParticleSpeedMin: 0.4, // Зменшено швидкість
  explosionParticleSpeedMax: 0.8,

  // Швидкість згасання частинок
  explosionParticleDecay: 0.95, // Прискорено згасання для зменшення навантаження
};

const Fireworks: React.FC = () => {
  useEffect(() => {
    const rndColor = (): ((fac?: number) => string) => {
      const base = (Math.random() * 360) | 0;
      const color = 275 * ((base / 200) | 0) + (base % 200);
      return (fac = 1) => `hsl(${color}, ${fac * 100}%, ${fac * 60}%)`;
    };

    class Salve {
      x: number = 0;
      y: number = 0;
      mx: number = 0;
      ym: number = 0;
      c!: (fac?: number) => string;
      cb: ((salve: Salve) => void) | null = null;
      explosion: { r: number; s: number; d: number; y: number }[] = [];
    }

    class Battery {
      fireworks: FireworksEngine;
      salve: Salve[] = [];
      x: number = Math.random();
      t: number = 0;
      tmod: number;
      tmax: number;

      constructor(fireworks: FireworksEngine) {
        this.fireworks = fireworks;
        this.tmod = CONFIG.batterySalveIntervalMin + ((Math.random() * (CONFIG.batterySalveIntervalMax - CONFIG.batterySalveIntervalMin)) | 0);
        this.tmax = CONFIG.batteryLifetimeMin + ((Math.random() * (CONFIG.batteryLifetimeMax - CONFIG.batteryLifetimeMin)) | 0);
      }

      private _shot(salve: Salve) {
        if (salve.y < salve.ym) {
          salve.cb = this._prepareExplosion;
        }

        salve.x += salve.mx;
        salve.y -= 0.01;

        const r = Math.atan2(-0.01, salve.mx);

        this.fireworks.engine.strokeStyle = salve.c(0.7);
        this.fireworks.engine.beginPath();

        this.fireworks.engine.moveTo(
          (this.x + salve.x) * this.fireworks.width + Math.cos(r) * 4,
          salve.y * this.fireworks.height + Math.sin(r) * 4
        );

        this.fireworks.engine.lineTo(
          (this.x + salve.x) * this.fireworks.width + Math.cos(r + Math.PI) * 4,
          salve.y * this.fireworks.height + Math.sin(r + Math.PI) * 4
        );

        this.fireworks.engine.lineWidth = 3;
        this.fireworks.engine.stroke();
      }

      private _prepareExplosion = (salve: Salve) => {
        for (let i = 0; i < CONFIG.explosionParticles; i++) {
          salve.explosion.push({
            r: (2 * i) / Math.PI,
            s: CONFIG.explosionParticleSpeedMin + Math.random() * (CONFIG.explosionParticleSpeedMax - CONFIG.explosionParticleSpeedMin),
            d: 0,
            y: 0,
          });
        }
        salve.cb = this._explode;
      };

      private _explode = (salve: Salve) => {
        this.fireworks.engine.fillStyle = salve.c();

        salve.explosion.forEach((particle) => {
          particle.d += particle.s;
          particle.s *= CONFIG.explosionParticleDecay;
          particle.y += 0.5;

          const alpha = particle.s * 2.5;
          this.fireworks.engine.globalAlpha = alpha;

          if (alpha < 0.05) {
            salve.cb = null;
          }

          this.fireworks.engine.fillRect(
            Math.cos(particle.r) * particle.d + (this.x + salve.x) * this.fireworks.width,
            Math.sin(particle.r) * particle.d + particle.y + salve.y * this.fireworks.height,
            3,
            3
          );
        });

        this.fireworks.engine.globalAlpha = 1;
      };

      pushSalve() {
        const salve = new Salve();
        salve.x = 0;
        salve.mx = -0.02 * Math.random() * 0.04;
        salve.y = 1;
        salve.ym = 0.05 + Math.random() * CONFIG.salveMaxY;
        salve.c = rndColor();
        salve.cb = this._shot.bind(this);
        this.salve.push(salve);
      }

      render() {
        this.t++;
        if (this.t < this.tmax && this.t % this.tmod === 0) {
          this.pushSalve();
        }

        let rendered = false;
        this.salve.forEach((salve) => {
          if (salve.cb) {
            rendered = true;
            salve.cb(salve);
          }
        });

        return rendered || this.t <= this.tmax;
      }
    }

    class FireworksEngine {
      canvas: HTMLCanvasElement;
      engine: CanvasRenderingContext2D;
      width: number = 0;
      height: number = 0;
      stacks: Map<number, Battery>;

      constructor() {
        this.canvas = document.querySelector("canvas")!;
        this.engine = this.canvas.getContext("2d")!;
        this.stacks = new Map();
        this.resize();
      }

      resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
      }

      clear() {
        this.engine.clearRect(0, 0, this.width, this.height);
        this.engine.fillStyle = CONFIG.canvasBackground;
        this.engine.fillRect(0, 0, this.width, this.height);
      }

      addBattery() {
        const battery = new Battery(this);
        this.stacks.set(Date.now(), battery);
      }

      render() {
        if (Math.random() < CONFIG.randomBatteryChance) {
          this.addBattery();
        }
        this.clear();
        this.stacks.forEach((battery, key) => {
          if (!battery.render()) {
            this.stacks.delete(key);
          }
        });
        requestAnimationFrame(() => this.render());
      }

      run() {
        for (let i = 0; i < CONFIG.initialBatteries; i++) {
          this.addBattery();
        }
        window.addEventListener("resize", this.resize.bind(this));
        this.render();
      }
    }

    const fireworks = new FireworksEngine();
    fireworks.run();

    return () => {
      window.removeEventListener("resize", fireworks.resize);
    };
  }, []);

  return <canvas id="fireworks-canvas"></canvas>;
};

export default Fireworks;
