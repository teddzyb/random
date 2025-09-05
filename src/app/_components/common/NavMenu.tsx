"use client";

import { Button, Divider } from "@heroui/react";
import { ChevronDown } from "lucide-react";

const NavMenu = () => {
  return (
    <div className="flex gap-3 items-center">
      <Button
        variant="solid"
        size="sm"
        className="text-base hover:text-primary bg-transparent data-[hover=true]:opacity-100!"
        endContent={<ChevronDown size={18} />}
      >
        Tools
      </Button>

      <Divider orientation="vertical" className="h-8" />

      <Button
        variant="solid"
        size="sm"
        className="text-base hover:text-primary bg-transparent data-[hover=true]:opacity-100!"
      >
        Sign in
      </Button>

      <Button
        color="primary"
        size="sm"
        className="text-base"
      >
        Sign up
      </Button>
    </div >
  );
}

export default NavMenu;