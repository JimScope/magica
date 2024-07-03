import { Card, CardBody } from "@nextui-org/react";

export default function StatsCard() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 p-4 border rounded-md">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">1408</span>
        <span className="text-sm text-muted-foreground">Polygons</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">4224</span>
        <span className="text-sm text-muted-foreground">Vertices</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">4</span>
        <span className="text-sm text-muted-foreground">Meshes</span>
      </div>
    </div>
  );
}
