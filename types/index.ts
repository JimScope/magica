import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type IProducts = {
  uuid: string;
  name: string;
  categories: string[];
  price: number;
  img: string;
};

export type IProduct = IProducts & {
  details: string;
  vox: string;
  gltf: string;
};
