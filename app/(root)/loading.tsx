import { LoadSpinner, Logo } from "@/components/Svg";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <main className="w-screen h-screen gap-5 flex  flex-col items-center justify-center overflow-hidden">
      <Logo className='w-48 h-28 md:w-62 md:h-38 relative' />
      
 
        <LoadSpinner /> 

    </main>
  );
};

export default Loading;
