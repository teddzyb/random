"use client";

import { Popover, PopoverContent, PopoverTrigger, PopoverProps } from "@heroui/react";


const ToolsPopover = (props: {
  children: React.ReactNode;
  popoverProps?: Partial<PopoverProps>;
}) => {
  const { children, popoverProps } = props;

  return (
    <Popover {...popoverProps} radius="md">
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ToolsPopover;