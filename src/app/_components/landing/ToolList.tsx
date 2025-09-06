"use client";

import { toolLists } from "@/utils/config/toolsList";
import { Listbox, ListboxItem } from "@heroui/react";
import Image from "next/image";

const ToolList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-3">
          <Image src="/assets/palette.svg" alt="Palette" width={24} height={24} className="shrink-0" />
          <span className="text-xl font-bold">
            Decision Making
          </span>
        </div>
        <Listbox
          aria-label="For Decision Making"
          items={toolLists["decision-making"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-1",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 border border-default-300 rounded-xl font-medium",
              }}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-3">
          <Image src="/assets/confetti.svg" alt="Confetti" width={24} height={24} className="shrink-0" />
          <span className="text-xl font-bold">
            Creative & Fun Tasks
          </span>
        </div>
        <Listbox
          aria-label="For Creative & Fun Tasks"
          items={toolLists["creative-fun"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-1",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 border border-default-300 rounded-xl font-medium",
              }}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-3">
          <Image src="/assets/hearts.svg" alt="Hearts" width={24} height={24} className="shrink-0" />
          <span className="text-xl font-bold">
            Daily Utility
          </span>
        </div>
        <Listbox
          aria-label="For Daily Utility"
          items={toolLists["daily-utility"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-1",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 border border-default-300 rounded-xl font-medium",
              }}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-3">
          <Image src="/assets/documents.svg" alt="Documents" width={24} height={24} className="shrink-0" />
          <span className="text-xl font-bold">
            Learning & Education
          </span>
        </div>
        <Listbox
          aria-label="For Learning & Education"
          items={toolLists["learning-education"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-1",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 border border-default-300 rounded-xl font-medium",
              }}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </div>
    </div>
  );
}

export default ToolList;