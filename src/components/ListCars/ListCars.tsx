"use client";

import { BrandList } from "./components/BrandList";
import * as S from "./ListCars.styles";

import { useData } from "@/hooks/data";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ListCars() {
  const { dataBrands, dataCars } = useData();

  if (dataBrands.length === 0 || dataCars.length === 0) {
    return (
      <S.WrapperSkeleton>
        <Skeleton height={"30px"} width={"300px"} />
        <Skeleton height={"25px"} width={"250px"} />
        <Skeleton height={"20vh"} />
      </S.WrapperSkeleton>
    );
  }

  return (
    <S.Wrapper>
      {dataBrands?.map((brand) => (
        <BrandList
          brand_name={brand.brand_name}
          id={brand.id}
          carsList={dataCars}
          key={brand.id}
        />
      ))}
    </S.Wrapper>
  );
}
