import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { DoorOpen, Square, Columns, Plus, Minus, Move } from "lucide-react";
import { motion } from "framer-motion";

interface RoomObject {
  id: string;
  type: "door" | "window" | "feature";
  position: { x: number; y: number };
}

interface RoomLayoutBuilderProps {
  onLayoutChange?: (objects: RoomObject[]) => void;
  onDimensionsChange?: (dimensions: {
    width: number;
    length: number;
    height: number;
  }) => void;
  initialObjects?: RoomObject[];
  dimensions?: { width: number; length: number; height: number };
}

const defaultObjects: RoomObject[] = [
  { id: "1", type: "door", position: { x: 50, y: 50 } },
  { id: "2", type: "window", position: { x: 200, y: 50 } },
];

const RoomLayoutBuilder = ({
  onLayoutChange = () => {},
  onDimensionsChange = () => {},
  initialObjects = defaultObjects,
  dimensions: initialDimensions = { width: 12, length: 15, height: 8 },
}: RoomLayoutBuilderProps) => {
  const [dimensions, setDimensions] = useState(initialDimensions);
  const [roomObjects, setRoomObjects] = useState<RoomObject[]>(initialObjects);
  const [selectedTool, setSelectedTool] = useState<
    "door" | "window" | "feature" | null
  >(null);

  const handleAddObject = (type: "door" | "window" | "feature") => {
    const newObject: RoomObject = {
      id: Math.random().toString(),
      type,
      position: { x: 50, y: 50 },
    };
    setRoomObjects([...roomObjects, newObject]);
    onLayoutChange([...roomObjects, newObject]);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4 flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={selectedTool === "door" ? "default" : "outline"}
                onClick={() => setSelectedTool("door")}
              >
                <DoorOpen className="w-4 h-4 mr-2" />
                Door
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add a door to the layout</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={selectedTool === "window" ? "default" : "outline"}
                onClick={() => setSelectedTool("window")}
              >
                <Square className="w-4 h-4 mr-2" />
                Window
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add a window to the layout</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={selectedTool === "feature" ? "default" : "outline"}
                onClick={() => setSelectedTool("feature")}
              >
                <Columns className="w-4 h-4 mr-2" />
                Feature
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add an architectural feature</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Width (ft)
          </label>
          <input
            type="number"
            value={dimensions.width}
            onChange={(e) => {
              const newDimensions = {
                ...dimensions,
                width: Number(e.target.value),
              };
              setDimensions(newDimensions);
              onDimensionsChange(newDimensions);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Length (ft)
          </label>
          <input
            type="number"
            value={dimensions.length}
            onChange={(e) => {
              const newDimensions = {
                ...dimensions,
                length: Number(e.target.value),
              };
              setDimensions(newDimensions);
              onDimensionsChange(newDimensions);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (ft)
          </label>
          <input
            type="number"
            value={dimensions.height}
            onChange={(e) => {
              const newDimensions = {
                ...dimensions,
                height: Number(e.target.value),
              };
              setDimensions(newDimensions);
              onDimensionsChange(newDimensions);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <Card
        className="relative bg-gray-100 border-2 border-dashed border-gray-300"
        style={{ width: "100%", height: 400 }}
      >
        {roomObjects.map((object) => (
          <motion.div
            key={object.id}
            drag
            dragMomentum={false}
            className="absolute cursor-move"
            style={{
              x: object.position.x,
              y: object.position.y,
            }}
            onDragEnd={(_, info) => {
              const updatedObjects = roomObjects.map((obj) =>
                obj.id === object.id
                  ? { ...obj, position: { x: info.point.x, y: info.point.y } }
                  : obj,
              );
              setRoomObjects(updatedObjects);
              onLayoutChange(updatedObjects);
            }}
          >
            <div className="p-2 bg-white rounded shadow-md flex items-center gap-2">
              {object.type === "door" && <DoorOpen className="w-4 h-4" />}
              {object.type === "window" && <Square className="w-4 h-4" />}
              {object.type === "feature" && <Columns className="w-4 h-4" />}
              <Move className="w-4 h-4 text-gray-400" />
            </div>
          </motion.div>
        ))}

        {selectedTool && (
          <div className="absolute bottom-4 right-4">
            <Button
              onClick={() => handleAddObject(selectedTool)}
              className="bg-green-500 hover:bg-green-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add {selectedTool}
            </Button>
          </div>
        )}
      </Card>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setRoomObjects([])}
            className="text-red-500"
          >
            <Minus className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        </div>
        <div className="text-sm text-gray-500">
          {roomObjects.length} objects placed
        </div>
      </div>
    </div>
  );
};

export default RoomLayoutBuilder;
