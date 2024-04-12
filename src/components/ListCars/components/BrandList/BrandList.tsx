import * as S from "./BrandList.styles";
import { BrandListLogicProps, BrandListProps } from "./BrandList.types";
import { CardCar } from "../CardCar/CardCar";

export function BrandList({ brand_name, id, carsList }: BrandListProps) {
  const { filteredBrandList } = useBrandListLogic({ carsList, id });

  if (filteredBrandList.length === 0) return <></>;

  return (
    <S.Wrapper>
      <h1>{brand_name}</h1>
      <h2>{filteredBrandList.length} resultados </h2>
      <S.WrapperList>
        {filteredBrandList.map((car) => (
          <CardCar car={car} key={car.id} />
        ))}
      </S.WrapperList>
    </S.Wrapper>
  );
}

function useBrandListLogic({ carsList, id }: BrandListLogicProps) {
  const filteredBrandList = carsList.filter((car) => {
    if (!car.brand && id === 99) {
      return car;
    }
    return car.brand === id;
  });

  return {
    filteredBrandList,
  };
}
