import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SlidersHorizontal } from "lucide-react";

const Filters = () => {
  return (
    <Card className="h-full border-transparent">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <SlidersHorizontal className="h-5 w-5 text-accent" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="sort-by">Sort by (default)</Label>
          <Select>
            <SelectTrigger id="sort-by" className="h-10">
              <SelectValue placeholder="Date listed: Newest first" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Date listed: Newest first</SelectItem>
              <SelectItem value="nearest">Distance: Nearest first</SelectItem>
              <SelectItem value="lowest">Price: Lowest first</SelectItem>
              <SelectItem value="highest">Price: Highest first</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="condition">Condition</Label>
          <Select>
            <SelectTrigger id="condition" className="h-10">
              <SelectValue placeholder="New" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="like-new">Used: Like new</SelectItem>
              <SelectItem value="good">Used: Good</SelectItem>
              <SelectItem value="fair">Used: Fair</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Availability</Label>
          <RadioGroup defaultValue="available" className="flex gap-5">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="available" id="available" />
              <Label htmlFor="available" className="text-sm font-normal cursor-pointer">
                Available
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="sold" id="sold" />
              <Label htmlFor="sold" className="text-sm font-normal cursor-pointer">
                Sold
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Price range (BIF)</Label>
          <div className="flex items-center gap-2 text-sm">
            <Input
              placeholder="Min"
              className="w-1/2 h-10 pl-3"
            />
            <Input
              placeholder="Max"
              className="w-1/2 h-10 pl-3"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Filters;