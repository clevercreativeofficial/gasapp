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
    { icon: <Car className="h-6 w-6" />, name: "Vehicles" },
    { icon: <Footprints className="h-6 w-6" />, name: "Sporting goods" },
    { icon: <Smartphone className="h-6 w-6" />, name: "Electronics" },
    { icon: <Clapperboard className="h-6 w-6" />, name: "Entertainment" },
    { icon: <Home className="h-6 w-6" />, name: "Home goods" },
    { icon: <Shirt className="h-6 w-6" />, name: "Apparel" },
    { icon: <Guitar className="h-6 w-6" />, name: "Musical instruments" },
    { icon: <Heart className="h-6 w-6" />, name: "Family" },
    { icon: <Briefcase className="h-6 w-6" />, name: "Office supplies" },
    { icon: <PawPrint className="h-6 w-6" />, name: "Pet supplies" },
    { icon: <FileText className="h-6 w-6" />, name: "Classifieds" },
    { icon: <Gamepad2 className="h-6 w-6" />, name: "Toys & Games" }
  ];

  return (
    <Card className="mt-3 border-transparent">
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
              className="py-2 px-3 rounded-full flex items-center gap-2 cursor-pointer hover:bg-accent/80 transition-colors"
            >
              {category.icon}
              {category.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Categories;