"use client";

import { Button } from "@/components/ui/button"
import Filters from "@/components/filters";
import Categories from "@/components/categories";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function ModalWrapper() {

  return (
    <>
      <div
        className="md:hidden block w-fit mb-4"
      >
        <Button variant="secondary">
          <i className="fi fi-rr-settings-sliders translate-y-0.5"></i>
          Filters
        </Button>
      </div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
            <DialogDescription>
              <div className="md:h-[calc(100vh-350px)] h-[calc(100vh-50px)] flex flex-col overflow-y-auto">
                <Filters />
                <Categories />
                <div className="mt-3">
                  <Button>Apply</Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ModalWrapper;
