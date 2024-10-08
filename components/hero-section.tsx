"use client";

import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";

type Props = {};
export const HeroSection = ({}: Props) => {
  return (
    <div className="h-[30rem] lg:h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <Image
        width={600}
        height={600}
        src={"/UoJCodersV3.0_with_moon.png"}
        alt="logo"
        className="w-80 lg:w-96 z-30"
      />
      <BackgroundBeams />
      <Image
        width={1600}
        height={400}
        src={"/download.png"}
        alt="University of Jafnna B&W"
        className="absolute left-0 bottom-0 translate-y-[40%] w-screen h-auto filter grayscale z-40"
      />
    </div>
  );
};

{
  /* <div className="w-2xl p-4 flex flex-col items-center gap-y-4 -mt-40 lg:-mt-20">
  <div className="w-full flex flex-col justify-center items-center font-varino relative z-10  text-white text-center font-bold">
    <p className="text-6xl md:text-[7rem] lg:text-9xl 2xl:text-[9rem] font-telemarines -mb-4 md:-mb-7 lg:-mb-5">
      UOJ
    </p>
    <p className="text-[2.1rem] md:text-[3.75rem] lg:text-7xl 2xl:text-[5rem]">
      CODERS
    </p>
  </div>
  <p className="w-full text-center text-white tracking-widest lg:tracking-[0.27em] mb-5 text-[0.65rem] md:text-lg lg:text-base 2xl:text-lg -mt-5 lg:-mt-2 2xl:-mt-1 pl-1">
    Department of Computer Science
  </p>
  {/* <Button
    borderRadius="1.75rem"
    className="bg-neutral-900 text-white mx-auto rounded-full">
    Register Now
  </Button>
</div> */
}
