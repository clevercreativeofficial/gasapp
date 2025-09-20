"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  Bookmark, 
  MoreVertical, 
  MapPin, 
  XCircle, 
  AlertCircle, 
  Clock,
  DollarSign,
  Building,
  Briefcase,
  Send
} from "lucide-react";

type JobProps = {
  jobImages: string[];
  jobTitle: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  postedDate: string;
  isRemote: boolean;
  isFeatured: boolean;
};

function JobCard({
  jobImages = [],
  jobTitle = "",
  company = "",
  location = "",
  salary = "",
  jobType = "",
  postedDate = "",
  isRemote = false,
  isFeatured = false
}: JobProps) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSaved = () => {
    setIsSaved((prevState) => !prevState);
  };

  return (
    <div className="relative w-full bg-card overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
      {isFeatured && (
        <Badge className="absolute top-3 left-3 z-10 text-foreground bg-background/80 backdrop-blur-sm border-border/30 border-0">
          Featured
        </Badge>
      )}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 h-8 w-8 flex items-center text-foreground bg-background/80 backdrop-blur-sm rounded-full z-10 p-0 border border-border"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 p-2">
          <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md">
            <XCircle className="h-4 w-4" />
            Hide this job
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md">
            <AlertCircle className="h-4 w-4" />
            Report job
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Company banner/image */}
      <div className="w-full h-32 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
        {jobImages.length > 0 ? (
          <Carousel>
            <CarouselContent>
              {jobImages.map((img, index) => (
                <CarouselItem key={index}>
                  <Image
                    className="h-full w-full object-cover"
                    width={500}
                    height={500}
                    src={img}
                    alt={`job-image-${index + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {jobImages.length > 1 && (
              <>
                <CarouselPrevious className="left-2 h-6 w-6 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" />
                <CarouselNext className="right-2 h-6 w-6 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" />
              </>
            )}
          </Carousel>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Building className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>

      {/* Job details */}
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Briefcase className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground line-clamp-1">
              {jobTitle}
            </h2>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Building className="h-4 w-4 inline-block" /> 
              {company}
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
            {isRemote && (
              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                Remote
              </Badge>
            )}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {jobType} · Posted {postedDate}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <DollarSign className="h-4 w-4 mr-2" />
            {salary}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border">
          <Button
            variant={isSaved ? "secondary" : "outline"}
            onClick={toggleSaved}
            className="flex justify-center items-center h-9 gap-2"
          >
            <Bookmark
              className={`h-4 w-4 ${isSaved ? "fill-primary text-primary" : ""}`}
            />
            {isSaved ? "Saved" : "Save"}
          </Button>
          
          <Button className="flex justify-center items-center h-9 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Send className="h-4 w-4" />
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;