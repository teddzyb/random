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
        content: "p-0 overflow-hidden",
      }}
    >
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex">
          <Listbox
            aria-label="Tools"
            onAction={(key) => alert(key)}
            classNames={{
              base: "p-3",
              list: "gap-0",
            }}
          >
            <ListboxItem
              key="decision-making"
              description="Helps you make unbiased decisions"
              startContent={<div className="w-12 h-12 shrink-0 bg-primary rounded-xl" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-primary",
                base: "data-[hover=true]:bg-primary-50! rounded-xl group",
              }}
            >
              For Decision Making
            </ListboxItem>

            <ListboxItem
              key="creative-fun"
              description="Inspire creativity and add fun to your activities"
              startContent={<div className="w-12 h-12 shrink-0 bg-secondary rounded-xl" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-secondary",
                base: "data-[hover=true]:bg-secondary-50! rounded-xl group",
              }}
            >
              For Creative & Fun Tasks
            </ListboxItem>

            <ListboxItem
              key="daily-utility"
              description="Useful for everyday tasks that require randomization"
              startContent={<div className="w-12 h-12 shrink-0 bg-warning rounded-xl" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-warning",
                base: "data-[hover=true]:bg-warning-50! rounded-xl group",
              }}
            >
              For Daily Utility
            </ListboxItem>

            <ListboxItem
              key="learning-education"
              description="Ideal for educational purposes and learning activities"
              startContent={<div className="w-12 h-12 shrink-0 bg-danger rounded-xl" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-danger",
                base: "data-[hover=true]:bg-danger-50! rounded-xl group",
              }}
            >
              For Learning & Education
            </ListboxItem>
          </Listbox>

          <div className="flex-grow bg-default-100 w-full min-w-52 p-3">

          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ToolsPopover;