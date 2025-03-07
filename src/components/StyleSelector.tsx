import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "../lib/utils";

interface StyleOption {
  id: string;
  name: string;
  image: string;
  colors: string[];
  materials: Array<{
    name: string;
    image: string;
  }>;
}

interface StyleSelectorProps {
  selectedStyle?: string;
  onStyleSelect?: (style: string) => void;
  onColorSelect?: (color: string) => void;
  onMaterialSelect?: (material: string) => void;
  styles?: StyleOption[];
}

const defaultStyles: StyleOption[] = [
  {
    id: "modern",
    name: "Modern",
    image: "/images/Style-Modern.jpg",
    colors: ["#F8F9FA", "#212529", "#339AF0", "#FF6B6B", "#51CF66"],
    materials: [
      {
        name: "Glass",
        image: "/images/Materials-Glass.jpg",
      },
      {
        name: "Steel",
        image: "/images/Materials-Steel.jpg",
      },
      {
        name: "Maple",
        image: "/images/Materials-Wood.jpg",
      },
    ],
  },
  {
    id: "traditional",
    name: "Traditional",
    image: "/images/Style-Traditional.webp",
    colors: ["#E9ECEF", "#495057", "#B197FC", "#FFD43B", "#20C997"],
    materials: [
      {
        name: "Mahogany",
        image: "/images/Materials-Mahogany.jpg",
      },
      {
        name: "Marble",
        image: "/images/Materials-Marble.jpg",
      },
      {
        name: "Brass",
        image: "/images/Materials-Brass.jpg",
      },
    ],
  },
  {
    id: "bohemian",
    name: "Bohemian",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175",
    colors: ["#FFF5F5", "#862E9C", "#FCC419", "#FF922B", "#40C057"],
    materials: [
      {
        name: "Rattan",
        image: "/images/Materials-Rattan.jpg",
      },
      {
        name: "Teak",
        image: "/images/Materials-Teak.jpg",
      },
      {
        name: "Cotton Fabric",
        image: "/images/Materials-Cotton.jpg",
      },
    ],
  },
];

const StyleSelector = ({
  selectedStyle: propSelectedStyle = "modern",
  onStyleSelect = () => {},
  onColorSelect = () => {},
  onMaterialSelect = () => {},
  styles = defaultStyles,
}: StyleSelectorProps) => {
  const [selectedStyle, setSelectedStyle] = React.useState(propSelectedStyle);

  React.useEffect(() => {
    setSelectedStyle(propSelectedStyle);
  }, [propSelectedStyle]);

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
    onStyleSelect(styleId);
  };
  return (
    <div className="w-full h-full bg-white p-6 rounded-lg shadow-lg">
      <Tabs defaultValue="styles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="styles">Design Styles</TabsTrigger>
          <TabsTrigger value="colors">Color Palette</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
        </TabsList>

        <TabsContent value="styles" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {styles.map((style) => (
              <Card
                key={style.id}
                className={cn(
                  "cursor-pointer transition-all hover:scale-105",
                  selectedStyle === style.id ? "ring-2 ring-primary" : "",
                )}
                onClick={() => handleStyleSelect(style.id)}
              >
                <div className="relative h-48 w-full">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{style.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-4">
          {styles.map((style) => (
            <div
              key={style.id}
              className={cn(
                "space-y-2",
                selectedStyle === style.id ? "block" : "hidden",
              )}
            >
              <h3 className="text-lg font-semibold mb-4">
                {style.name} Color Palette
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {style.colors.map((color, index) => (
                  <Button
                    key={index}
                    className="w-full h-20 rounded-lg"
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelect(color)}
                  />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          {styles.map((style) => (
            <div
              key={style.id}
              className={cn(
                "space-y-2",
                selectedStyle === style.id ? "block" : "hidden",
              )}
            >
              <h3 className="text-lg font-semibold mb-4">
                {style.name} Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {style.materials.map((material, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer hover:scale-105 transition-all"
                    onClick={() => onMaterialSelect(material.name)}
                  >
                    <div className="relative h-32 w-full">
                      <img
                        src={material.image}
                        alt={material.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <p className="font-medium">{material.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StyleSelector;
