import { cn } from "@heroui/react";

const Logo = (props: {
  className?: string;
}) => {
  const { className } = props;
  return (
    <span className={cn(
      "text-primary font-logo",
      className
    )}>
      Random
    </span>
  );
};

export default Logo;