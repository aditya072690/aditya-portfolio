import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="pl-12 pb-4">
          <Image src="/images/Logoblack.svg" width={75} height={50} alt="logo"  />
        </span>
        <p className="text-slate-600 pt-5">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
