"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { DATA } from "@/data/resume";
import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Theme">
          <CommandItem
            onSelect={() => {
              runCommand(() => setTheme("light"));
            }}
          >
            <SunIcon className="mr-2 h-4 w-4" />
            <span>Light</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => setTheme("dark"));
            }}
          >
            <MoonIcon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => setTheme("system"));
            }}
          >
            <LaptopIcon className="mr-2 h-4 w-4" />
            <span>System</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Navigation">
          {DATA.navbar.map((navItem) => (
            <CommandItem
              key={navItem.href}
              value={navItem.label}
              onSelect={() => {
                runCommand(() => router.push(navItem.href));
              }}
            >
              <navItem.icon className="mr-2 h-4 w-4" />
              <span>{navItem.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Social">
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.url)
            .map(([key, social]) => (
              <CommandItem
                key={key}
                value={social.name}
                onSelect={() => {
                  runCommand(() => window.open(social.url, "_blank"));
                }}
              >
                <social.icon className="mr-2 h-4 w-4" />
                <span>{social.name}</span>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
