"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

// Dummy data for statuses
const statusData = [
  {
    id: 1,
    name: "Emily Rose",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    status: "https://images.unsplash.com/photo-1726741696376-e405ed2b3946?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Rosita Rositae",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "https://images.unsplash.com/photo-1638861267900-58defe6114cd?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Enaile Retrica",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Awa Melvine",
    profile: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Emily Rose",
    profile: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Enaile Retrica",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
];

const Status = () => {
  return (
    <Card className="w-full overflow-hidden border-border/20 bg-card/70 backdrop-blur-sm p-5 rounded-2xl">
      <CardContent className="p-0">
        <Carousel opts={{ align: "start", dragFree: true }}>
          <CarouselContent className="ml-0">
            {statusData.map(({ id, name, profile, status }) => (
              <CarouselItem key={id} className="basis-[115px] pl-3">
                <div className="relative h-[165px] w-[115px] overflow-hidden rounded-2xl border border-border/30 shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="absolute right-2 top-2 z-10">
                    <Avatar className="h-11 w-11 border-2 border-background">
                      <AvatarImage src={profile} alt={`${name}'s profile`} />
                      <AvatarFallback className="bg-gradient-to-r from-accent to-accent text-white font-medium">
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Image
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    src={status}
                    alt={`${name}'s status`}
                  />
                  <div className="absolute bottom-0 left-0 z-0 flex h-1/2 w-full items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent p-2">
                    <p className="text-xs font-medium text-white truncate w-full text-center drop-shadow-md">
                      {name}
                    </p>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 h-9 w-9 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background shadow-md hover:shadow-lg transition-all" />
          <CarouselNext className="right-1 h-9 w-9 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background shadow-md hover:shadow-lg transition-all" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default Status;