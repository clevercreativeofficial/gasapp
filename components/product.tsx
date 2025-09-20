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
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Bookmark,
  MoreVertical,
  ShoppingCart,
  MapPin,
  XCircle,
  AlertCircle,
  Heart,
  CheckCircle,
} from "lucide-react";

type ProductProps = {
  productImages: string[];
  productName: string;
  seller: string;
  place: string;
  price: number;
  condition?: "new" | "used" | "refurbished";
  rating?: number;
};

function Product({
  productImages = [],
  productName = "",
  seller = "",
  place = "",
  price = 0,
  condition = "used",
  rating = 0,
}: ProductProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);

    if (!isFavorite) {
      toast.success("Added to saved items", {
        description: `${productName} has been added to your saved items.`,
      });
    } else {
      toast.info("Removed from saved items", {
        description: `${productName} has been removed from your saved items.`,
      });
    }
  };

  const handlePurchase = () => {
    toast.success("Added to cart", {
      description: `${productName} has been added to your shopping cart.`,
      action: {
        label: "View cart",
        onClick: () => console.log("View cart clicked"),
      },
    });
  };

  const conditionLabels = {
    new: "New",
    used: "Used",
    refurbished: "Refurbished",
  };

  const conditionColors = {
    new: "bg-green-500/20 text-green-700",
    used: "bg-blue-500/20 text-blue-700",
    refurbished: "bg-purple-500/20 text-purple-700",
  };

  return (
    <Card className="group relative w-full h-[300px] bg-card overflow-hidden rounded-xl border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0 h-full">
        {/* Top badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <Badge className={`block group-hover:hidden px-2 py-1 text-xs font-semibold ${conditionColors[condition]}`}>
            {conditionLabels[condition]}
          </Badge>
          <Badge variant="secondary" className="hidden group-hover:block px-2 py-1 text-xs font-semibold bg-background/90 backdrop-blur-sm">
            {price.toLocaleString()} Fbu
          </Badge>
        </div>

        {/* Rating badge */}
        {rating > 0 && (
          <Badge className="absolute top-3 right-12 z-10 px-2 py-1 text-xs font-semibold bg-background/90 backdrop-blur-sm flex items-center gap-1">
            <Heart className="h-3 w-3 fill-destructive text-destructive" />
            {rating}
          </Badge>
        )}

        {/* Options dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 h-7 w-7 z-10 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer">
              <XCircle className="h-4 w-4" />
              Hide listing
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer">
              <AlertCircle className="h-4 w-4" />
              Report product
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* debugging section*/}
        {/* {productImages.map((img, index) => (
          <Image
            key={index}
            fill
            className="object-cover"
            src={img}
            alt={`${productName} - image ${index + 1}`}
          />
        ))} */}



        {/* Image carousel */}
        <div className="relative w-full h-full overflow-hidden">
          <Carousel
            className="h-full"
            opts={{
              startIndex: currentImageIndex,
              loop: true
            }}
          >
            <CarouselContent className="h-full">
              {productImages.map((img, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      className="object-cover"
                      src={img}
                      alt={`${productName} - image ${index + 1}`}
                      priority={index === 0} // Add priority for first image
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {productImages.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? "bg-primary scale-125" 
                        : "bg-white/60"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
            {productImages.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6 bg-background/80 backdrop-blur-sm border-border/30 opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-background transition-all" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 bg-background/80 backdrop-blur-sm border-border/30 opacity-0 group-hover:opacity-100 hover:opacity-100 hover:bg-background transition-all" />
              </>
            )}
          </Carousel>
        </div>

        {/* Image indicators if multiple images */}
        {/* {productImages.length > 1 && (
          <div className="absolute bottom-14 left-0 right-0 hidden justify-center gap-1 z-10 px-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? "bg-primary scale-125" 
                    : "bg-white/60"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )} */}

        {/* Product info that shows on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
          <h2 className="text-lg font-semibold text-white mb-1 line-clamp-1">{productName}</h2>
          <p className="text-sm text-white/90 flex items-center gap-1 mb-3">
            {seller} · <MapPin className="h-3 w-3" /> {place}
          </p>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={isFavorite ? "default" : "outline"}
              onClick={toggleFavorite}
              className="flex items-center gap-2 h-9 hover:border-transparent hover:text-white"
            >
              {isFavorite ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
              {isFavorite ? "Saved" : "Save"}
            </Button>

            <Button
              onClick={handlePurchase}
              className="flex items-center gap-2 h-9"
            >
              <ShoppingCart className="h-4 w-4" />
              Purchase
            </Button>
          </div>
        </div>

        {/* Minimal info that always shows */}
        <div className="absolute bottom-0 left-0 right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 p-3 bg-gradient-to-t from-black/90 to-transparent text-white z-10">
          <h3 className="text-sm font-medium truncate">{productName}</h3>
          <p className="text-xs text-white/80 truncate">{seller}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Product;