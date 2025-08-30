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
import { Bookmark, MoreVertical, ShoppingCart, MapPin, XCircle, AlertCircle } from "lucide-react";


type ProductProps = {
  productImages: string[];
  productName: string;
  seller: string;
  place: string;
  price: number;
};

function Product({
  productImages = [],
  productName = "",
  seller = "",
  place = "",
  price = 0
}: ProductProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div className="relative w-full h-[300px] bg-[var(--card)] overflow-hidden rounded-2xl">
      <Badge variant="secondary" className="absolute top-3 left-3 px-3 py-1 z-10 bg-background/80 backdrop-blur-sm border-border/30 opacity-90">
        {price} Fbu
      </Badge>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 h-[30px] w-[30px] flex items-center text-white bg-gray-900 bg-opacity-20 rounded-full z-10 p-0"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 p-2">
          <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md">
            <XCircle className="h-4 w-4" />
            Hide a listing
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md">
            <AlertCircle className="h-4 w-4" />
            Report a product
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="w-full h-[calc(100%-125px)] overflow-hidden">
        <Carousel>
          <CarouselContent>
            {productImages.map((img, index) => (
              <CarouselItem key={index}>
                <Image
                  className="h-full w-full aspect-square object-cover"
                  width={500}
                  height={500}
                  src={img}
                  alt={`post-image-${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 h-6 w-6 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" />
          <CarouselNext className="right-2 h-6 w-6 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" />
        </Carousel>
      </div>

      <div className="h-[75px] flex mx-3 border-b border-border">
        <div className="w-full h-full flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-primary-500">
            {productName}
          </h2>
          <small className="text-muted-foreground">
            {seller} · <MapPin className="h-4 w-4 inline-block" /> {place}
          </small>
        </div>
      </div>
      
      <div className="h-[50px] grid grid-cols-2 text-sm">
        <Button
          variant="ghost"
          onClick={toggleFavorite}
          className={`flex justify-center items-center ${isFavorite ? "text-accent" : "text-foreground"} h-full hover:text-foreground hover:bg-accent/10 gap-2 rounded-none`}
        >
          <Bookmark
            className={`h-4 w-4 ${isFavorite ? "fill-accent text-accent" : ""}`}
          />
          {isFavorite ? "Saved" : "Save"}
        </Button>
        
        <Button
          variant="ghost"
          className="flex justify-center items-center h-full hover:bg-accent/10 text-foreground gap-2 rounded-none border-l border-border"
        >
          <ShoppingCart className="h-4 w-4" />
          Purchase
        </Button>
      </div>
    </div>
  );
}

export default Product;