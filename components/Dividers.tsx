import React from "react";

export const HeroDivider = () => {
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

export const CourseDivider = ({ className }: { className?: string }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block "
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className={className}
        ></path>
      </svg>
    </div>
  );
};
