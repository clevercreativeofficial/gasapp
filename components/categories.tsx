import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Footprints,
  Smartphone,
  Clapperboard,
  Home,
  Shirt,
  Guitar,
  Heart,
  Briefcase,
  PawPrint,
  FileText,
  Gamepad2,
  Grid3X3
} from 'lucide-react';

const Categories = () => {
  const categories = [
    { icon: <Car className="h-4 w-4" />, name: "Vehicles" },
    { icon: <Shirt className="h-4 w-4" />, name: "Apparel" },
    { icon: <Footprints className="h-4 w-4" />, name: "Sporting goods" },
    { icon: <Smartphone className="h-4 w-4" />, name: "Electronics" },
    { icon: <Heart className="h-4 w-4" />, name: "Family" },
    { icon: <Clapperboard className="h-4 w-4" />, name: "Entertainment" },
    { icon: <Home className="h-4 w-4" />, name: "Home goods" },
    { icon: <Guitar className="h-4 w-4" />, name: "Musical instruments" },
    { icon: <Briefcase className="h-4 w-4" />, name: "Office supplies" },
    { icon: <PawPrint className="h-4 w-4" />, name: "Pet supplies" },
    { icon: <FileText className="h-4 w-4" />, name: "Classifieds" },
    { icon: <Gamepad2 className="h-4 w-4" />, name: "Toys & Games" }
  ];

  return (
    <Card className="mt-3 border-transparent py-6">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Grid3X3 className="h-5 w-5 text-accent" />
          Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="h-10 px-3 rounded-full inline-flex items-center gap-2 cursor-pointer hover:bg-accent/80 transition-colors"
            >
              <span>
                {category.icon}
              </span>
              {category.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Categories;