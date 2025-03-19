import React from "react";

const HeroDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block md:w-[calc(100%+1.3px)]  md:h-[100px]"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="fill-slate-50"
        ></path>
      </svg>
    </div>
  );
};

export default HeroDivider;
