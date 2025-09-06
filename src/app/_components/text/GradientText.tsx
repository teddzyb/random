import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#006FEE", "#7828c8", "#f31260", "#7828c8", "#006FEE"],
  animationSpeed = 10,
}: Readonly<GradientTextProps>) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div
      className={`inline-block relative z-2 text-transparent bg-cover animate-gradient ${className}`}
      style={{
        ...gradientStyle,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundSize: "300% 100%"
      }}
    >
      {children}
    </div>
  );
}
