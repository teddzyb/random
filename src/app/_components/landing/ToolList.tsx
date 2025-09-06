"use client";

import { toolLists } from "@/utils/config/toolsList";
import { Listbox, ListboxItem } from "@heroui/react";

const ToolList = () => {
  return (
    <div className="grid grid-cols-4 gap-10 w-full max-w-6xl">
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-xl font-bold">
          For Decision Making
        </h2>
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
        <h2 className="text-center text-xl font-bold">
          For Creative & Fun Tasks
        </h2>
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
        <h2 className="text-center text-xl font-bold">
          For Daily Utility
        </h2>
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
        <h2 className="text-center text-xl font-bold">
          For Learning & Education
        </h2>
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