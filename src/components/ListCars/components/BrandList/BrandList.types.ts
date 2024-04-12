import { Car } from "../../ListCars.types";

export type BrandListProps = {
  id: number;
  brand_name: string;
  carsList: Car[];
};
export type BrandListLogicProps = Pick<BrandListProps, "id" | "carsList">;
