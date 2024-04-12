import { Car } from "../../ListCars.types";

export type CardCarProps = {
  car: {
    brand?: number;
  } & Pick<
    Car,
    "ano" | "cor" | "nome_modelo" | "combustivel" | "num_portas" | "valor"
  >;
};
