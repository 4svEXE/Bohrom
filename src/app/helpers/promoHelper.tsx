const LOCAL_STORAGE_KEY = "promo";
const LOCAL_STORAGE_KEY_SENT = "is_sendet";

const getPromo = () => {
  const promo = localStorage.getItem(LOCAL_STORAGE_KEY);
  return promo;
};

const setPromo = (promo: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, promo);
};

const isSent = () => {
  const isSent = localStorage.getItem(LOCAL_STORAGE_KEY_SENT);
  return isSent;
};

const setIsSent = () => {
    if(getPromo()) {
        localStorage.setItem(LOCAL_STORAGE_KEY_SENT, "true");
    }
};


const promoHelper = {
  getPromo,
  setPromo,
  isSent,
  setIsSent,
};

export default promoHelper;