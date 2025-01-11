import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img src="/images/Row.png" alt="Row Image" className="h-40" />
      </div>

      {/* Text Section */}
      <div className="text-center">
        <p className="text-xl font-semibold mb-2">
          Let's build beautiful, meaningful things together.!
        </p>
        <p className="text-sm text-gray-400 mb-6">
          RIDDHILIMBACHIYA@GMAIL.COM
        </p>

        {/* Signature */}
        <div>
          <img src="/images/Sign.png" alt="Signature" className="h-10 mx-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
