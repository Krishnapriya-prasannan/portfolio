import React from "react";

const CopyrightSection = () => {
  return (
    <div className="bg-black text-white py-4">
      {/* Desktop View: Left-most and Center-aligned */}
      <div className="hidden sm:flex justify-between items-center">
        {/* Left Section */}
        <div className="text-sm">
          Copyright 2025 &copy;
        </div>

        {/* Center Section */}
        <div className="text-sm text-center">
          Designed and Coded by{" "}
          <span className="font-semibold">Riddhi Limbachiya</span> ❤️
        </div>
      </div>

      {/* Mobile View: Copyright below the text */}
      <div className="sm:hidden text-center">
        {/* Center Section */}
        <div className="text-sm">
          Designed and Coded by{" "}
          <span className="font-semibold">Riddhi Limbachiya</span> ❤️
        </div>

        {/* Copyright Section below */}
        <div className="text-sm mt-2">
          Copyright 2025 &copy;
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
