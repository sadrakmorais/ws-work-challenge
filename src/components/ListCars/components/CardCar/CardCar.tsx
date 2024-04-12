import { BsFillFuelPumpFill } from "react-icons/bs";
import * as S from "./CardCar.styles";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { CardCarProps } from "./CardCar.types";

export function CardCar({ car }: CardCarProps) {
  return (
    <S.Wrapper>
      <S.IconCar>
        <IoCarSportSharp size={28} color="#fff" />
      </S.IconCar>
      <S.WrapperCarInformations>
        <h3>
          {car.nome_modelo} · {car.ano}
        </h3>
        <p className="color">{car.cor}</p>
        <S.FeatureCar>
          <BsFillFuelPumpFill size={20} color="#000040" />
          <p>{car.combustivel}</p>
        </S.FeatureCar>
        <S.FeatureCar>
          <GiCarDoor size={20} color="#000040" />
          <p>{car.num_portas} Portas</p>
        </S.FeatureCar>
        <S.WrapperValue>
          <p className="value">Valor:</p>
          <p className="total-amount">R${car.valor}</p>
        </S.WrapperValue>
      </S.WrapperCarInformations>
    </S.Wrapper>
  );
}
