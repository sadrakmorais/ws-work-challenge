import { useContext } from "react";

import { dataContext, dataContextData } from "../contexts/data";

export function useData(): dataContextData {
  return useContext(dataContext);
}
