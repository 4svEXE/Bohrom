import React from "react";

import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import ModalLayer from "../components/layouts/modal";
import SpinnWhell from "../components/widgets/spinn-whell";

interface WithLayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

export default function WithLayout({ children, toggleTheme }: WithLayoutProps) {
  
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-[100vh] overflow-hidden">
      <Header toggleTheme={toggleTheme} />

      <div className="flex flex-col w-full" id="start">
        {children}
      </div>

      {/* <ModalLayer title="Отримай свою новорічну знижку"> */}
      <ModalLayer title="Šťastný rok 2025!">
        <SpinnWhell />
      </ModalLayer>

      <Footer />
    </div>
  );
}
