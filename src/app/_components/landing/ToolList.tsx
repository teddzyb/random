"use client";

import { toolLists } from "@/utils/config/toolsList";
import { Listbox, ListboxItem } from "@heroui/react";
import Image from "next/image";

const ToolList = () => {
  return (
    <div className="grid grid-cols-4 gap-10 w-full max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/palette.svg" alt="Palette" width={40} height={40} className="shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm text-default-500">
              Helps in
            </span>
            <span className="text-xl font-bold">
              Decision Making
            </span>
          </div>
        </div>
        <Listbox
          aria-label="For Decision Making"
          items={toolLists["decision-making"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-0",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 bg-default-100 rounded-xl font-medium",
              }}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/confetti.svg" alt="Confetti" width={40} height={40} className="shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm text-default-500">
              Great for
            </span>
            <span className="text-xl font-bold">
              Creative & Fun Tasks
            </span>
          </div>
        </div>
        <Listbox
          aria-label="For Creative & Fun Tasks"
          items={toolLists["creative-fun"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-0",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 bg-default-100 rounded-xl font-medium",
              }}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/hearts.svg" alt="Hearts" width={40} height={40} className="shrink-0" />
          <div className="flex flex-col">
            <span className="text-sm text-default-500">
              Useful for
            </span>
            <span className="text-xl font-bold">
              Daily Utility
            </span>
          </div>
        </div>
        <Listbox
          aria-label="For Daily Utility"
          items={toolLists["daily-utility"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-0",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 bg-default-100 rounded-xl font-medium",
              }}
            >
              {item.label}
            </ListboxItem>
          )}
        </Listbox>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/documents.svg" alt="Documents" width={40} height={40} className="shrink-0" />
          <div className="flex flex-col truncate">
            <span className="text-sm text-default-500">
              Perfect for
            </span>
            <span className="text-xl font-bold truncate">
              Learning & Education
            </span>
          </div>
        </div>
        <Listbox
          aria-label="For Learning & Education"
          items={toolLists["learning-education"]}
          onAction={(key) => alert(key)}
          classNames={{
            base: "p-0",
            list: "gap-2",
          }}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              variant="light"
              color="primary"
              classNames={{
                base: "py-4 px-5 bg-default-100 rounded-xl font-medium",
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