import GradientText from "./_components/text/GradientText";
import Logo from "./_components/common/Logo";
import ScrambledText from "./_components/text/ScrambledText";
import StartButton from "./_components/home/StartButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="flex flex-col gap-2 text-center items-center max-w-xl h-full pb-20">
        <h1 className="text-6xl font-heading font-black">
          Simply a{" "}
          <GradientText>
            true
          </GradientText>
          {" "}
          <ScrambledText>
            randomizer
          </ScrambledText>
          .
        </h1>
        <p className="mt-4 text-lg text-default-700">
          <Logo />
          {" "}offers a suite of tools for generating true random outcomes, perfect for objective decisions, fair prize draws, and data randomization.
        </p>

        <div className="mt-6 max-w-56 w-full">
          <StartButton />
        </div>
      </div>
    </div>
  );
}
