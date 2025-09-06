"use client";

import { Button } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import ToolsPopover from "../common/ToolsPopover";

const StartButton = () => {
  return (
    <>
      <ToolsPopover popoverProps={{ placement: "bottom" }}>
        <Button
          color="primary"
          endContent={<ChevronRight size={18} />}
          className="w-full h-11"
        >
          Start Randomizing!
        </Button>
      </ToolsPopover>

      <Button
        variant="bordered"
        className="w-full h-11 border-1"
      >
        How does it work?
      </Button>
    </>
  );
}

export default StartButton;