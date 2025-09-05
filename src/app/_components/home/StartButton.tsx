"use client";

import { Button } from "@heroui/react";
import { ChevronRight } from "lucide-react";

const StartButton = () => {
  return (
    <Button
      color="primary"
      endContent={<ChevronRight size={18} />}
      className="w-full h-12"
    >
      Start Randomizing!
    </Button>
  );
}

export default StartButton;