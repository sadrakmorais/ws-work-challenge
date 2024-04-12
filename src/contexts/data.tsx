/* eslint-disable react-hooks/rules-of-hooks */
import { Brand, Car } from "@/components/ListCars/ListCars.types";
import axios from "axios";
import React, {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

export type dataContextData = {
  dataBrands: Brand[];
  dataCars: Car[];
  isLoading: boolean;
  getData: () => void;
};
type dataProviderProps = {
  children: ReactNode;
};

export const dataContext = createContext<dataContextData>(
  {} as dataContextData
);

export function DataProvider({ children }: dataProviderProps) {
  const [dataCars, setDataCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataBrands, setDataBrands] = useState<Brand[]>([]);

  const getData = useCallback(async () => {
    try {
      const getBrands = axios.get(
        "https://wswork-api-challenger.onrender.com/brands"
      );

      const getCars = axios.get(
        "https://wswork-api-challenger.onrender.com/cars"
      );

      const [resultBrands, resultCars] = await Promise.all([
        getBrands,
        getCars,
      ]);

      if (resultBrands.status !== 200 && resultCars.status !== 200) return;

      setDataCars(resultCars.data);
      setDataBrands(resultBrands.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  const values = useMemo<dataContextData>(
    () => ({ dataBrands, dataCars, isLoading, getData }),
    [dataBrands, dataCars, isLoading, getData]
  );

  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}
