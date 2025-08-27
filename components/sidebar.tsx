import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function Sidebar({ children }: { children: ReactNode }) {
  return (
    <aside className="sticky left-0 top-[71px] w-[275px] min-h-[calc(100vh-100px)]">
      <div className="pr-3 h-full">
        <div className="bg-background rounded-xl h-full flex flex-col">
          <ScrollArea className="h-full">
            {children}
          </ScrollArea>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;