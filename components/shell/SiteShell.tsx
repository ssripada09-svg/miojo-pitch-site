import type { ReactNode } from "react";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <TopNav />
      <main id="top">{children}</main>
      <Footer />
    </>
  );
}
