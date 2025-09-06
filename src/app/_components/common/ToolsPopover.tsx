"use client";

import { toolLists } from "@/utils/config/toolsList";
import { Popover, PopoverContent, PopoverTrigger, PopoverProps, Listbox, ListboxItem } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const listboxItemClasses = {
  title: "font-semibold text-lg",
  wrapper: "py-2 px-3 gap-px",
};

const ToolsPopover = (props: {
  children: React.ReactNode;
  popoverProps?: Partial<PopoverProps>;
}) => {
  const { children, popoverProps } = props;
  const [selectedCategory, setSelectedCategory] = useState("decision-making");

  return (
    <Popover
      {...popoverProps}
      onOpenChange={() => setSelectedCategory("decision-making")}
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
            aria-label="Categories"
            classNames={{
              base: "p-3",
              list: "gap-0",
            }}
          >
            <ListboxItem
              key="decision-making"
              description="Helps you make unbiased decisions"
              startContent={<Image src="/assets/palette.svg" alt="Palette" width={48} height={48} className="shrink-0" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-primary",
                base: "data-[hover=true]:bg-primary-50! rounded-xl group",
              }}
              onMouseEnter={() => setSelectedCategory("decision-making")}
            >
              For Decision Making
            </ListboxItem>

            <ListboxItem
              key="creative-fun"
              description="Inspire creativity and add fun to your activities"
              startContent={<Image src="/assets/confetti.svg" alt="Confetti" width={48} height={48} className="shrink-0" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-warning",
                base: "data-[hover=true]:bg-warning-50! rounded-xl group",
              }}
              onMouseEnter={() => setSelectedCategory("creative-fun")}
            >
              For Creative & Fun Tasks
            </ListboxItem>

            <ListboxItem
              key="daily-utility"
              description="Useful for everyday tasks that require randomization"
              startContent={<Image src="/assets/hearts.svg" alt="Hearts" width={48} height={48} className="shrink-0" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-danger",
                base: "data-[hover=true]:bg-danger-50! rounded-xl group",
              }}
              onMouseEnter={() => setSelectedCategory("daily-utility")}
            >
              For Daily Utility
            </ListboxItem>

            <ListboxItem
              key="learning-education"
              description="Ideal for educational purposes and learning activities"
              startContent={<Image src="/assets/documents.svg" alt="Documents" width={48} height={48} className="shrink-0" />}
              endContent={<ChevronRight size={18} className="text-default-400" />}
              classNames={{
                ...listboxItemClasses,
                title: listboxItemClasses.title + " group-hover:text-secondary",
                base: "data-[hover=true]:bg-secondary-50! rounded-xl group",
              }}
              onMouseEnter={() => setSelectedCategory("learning-education")}
            >
              For Learning & Education
            </ListboxItem>
          </Listbox>

          <div className="flex-grow bg-default-100 w-full min-w-52">
            <Listbox
              aria-label="Tools"
              items={toolLists[selectedCategory as keyof typeof toolLists]}
              onAction={(key) => alert(key)}
              topContent={<div className="px-2 pt-2 pb-1 text-xs font-semibold">TOOLS</div>}
              classNames={{
                base: "p-3",
                list: "gap-0",
              }}
            >
              {(item) => (
                <ListboxItem
                  key={item.key}
                  variant="light"
                  color="primary"
                  classNames={{
                    title: "text-sm",
                  }}
                >
                  {item.label}
                </ListboxItem>
              )}
            </Listbox>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ToolsPopover;