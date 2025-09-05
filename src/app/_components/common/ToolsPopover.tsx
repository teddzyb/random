"use client";

import { Popover, PopoverContent, PopoverTrigger, PopoverProps, Listbox, ListboxItem } from "@heroui/react";
import { ChevronRight } from "lucide-react";

const listboxItemClasses = {
  title: "font-semibold text-lg",
  wrapper: "py-2 px-3 gap-px",
};

const ToolsPopover = (props: {
  children: React.ReactNode;
  popoverProps?: Partial<PopoverProps>;
}) => {
  const { children, popoverProps } = props;

  return (
    <Popover
      {...popoverProps}
      radius="md"
      classNames={{
        content: "p-2",
      }}
    >
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <Listbox
          aria-label="Tools"
          onAction={(key) => alert(key)}
        >
          <ListboxItem
            key="decision-making"
            description="Helps you make unbiased decisions"
            endContent={<ChevronRight size={18} className="text-default-400" />}
            classNames={listboxItemClasses}
          >
            For Decision Making
          </ListboxItem>

          <ListboxItem
            key="creative-fun"
            description="Designed to inspire creativity and add fun to your activities"
            endContent={<ChevronRight size={18} className="text-default-400" />}
            classNames={listboxItemClasses}
          >
            For Creative & Fun Tasks
          </ListboxItem>

          <ListboxItem
            key="daily-utility"
            description="Useful for everyday tasks that require randomization"
            endContent={<ChevronRight size={18} className="text-default-400" />}
            classNames={listboxItemClasses}
          >
            For Daily Utility
          </ListboxItem>

          <ListboxItem
            key="learning-education"
            description="Ideal for educational purposes and learning activities"
            endContent={<ChevronRight size={18} className="text-default-400" />}
            classNames={listboxItemClasses}
          >
            For Learning & Education
          </ListboxItem>
        </Listbox>
      </PopoverContent>
    </Popover>
  );
};

export default ToolsPopover;