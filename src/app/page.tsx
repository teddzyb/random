import Logo from "./_components/common/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-14">
      <div className="flex flex-col gap-2 text-center max-w-xl">
        <h1 className="text-6xl font-heading font-black">
          Simply a true randomizer.
        </h1>
        <p className="mt-4 text-lg text-default-700">
          <Logo />
          {" "}
          offers a suite of tools for generating true random outcomes, perfect for objective decisions, fair prize draws, and data randomization.
        </p>
      </div>
    </div>
  );
}
