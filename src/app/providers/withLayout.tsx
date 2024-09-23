import React from "react";

import PagesNav from "../components/widgets/pages-nav";
import Header from "../components/layouts/header";

interface WithLayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

const sections = [
  'gallery',
  'prices',
  'about',
  'faq',
  'contacts',
]

export default function WithLayout({ children, toggleTheme }: WithLayoutProps) {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-[100vh] overflow-hidden">
      <Header toggleTheme={toggleTheme} />
      <PagesNav sections={sections} />

      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
}
