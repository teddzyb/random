"use client"

import { useRouter } from "next/navigation";
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { ThemeProvider as NextThemesProvider } from "next-themes";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  // note: read heroui docs if you are using custom basePath

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <ToastProvider
          toastProps={{
            classNames: {
              base: "lg:bottom-[10px]! lg:right-[10px]!",
            },
          }}
        />
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}