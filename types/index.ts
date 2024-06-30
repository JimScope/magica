import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type IProduct = {
  uuid: string;
  name: string;
  price: string;
  img: string;
  gltf: string;
};
