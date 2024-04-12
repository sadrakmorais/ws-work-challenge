import { IoAddCircle } from "react-icons/io5";
import { Button } from "../Button";
import * as S from "./FormAddNewCar.styles";
import { FormEvent, useReducer, useState } from "react";
import { formatedValue } from "@/utils/formatedValue";
import ReactSelect from "react-select";
import { useData } from "@/hooks/data";
import { ActionType } from "./FormAddNewCar.types";
import { Car } from "../ListCars/ListCars.types";
import axios from "axios";
import { generateRandowNumberId } from "@/utils/generateRandomNumberId";
import { ToastContainer, toast } from "react-toastify";

export function FormAddNewCar() {
  const {
    dispatch,
    optionsSelect,
    state,
    stylesSelect,
    handlePostNewCar,
    isLoading,
  } = useFormAddNewCarLogic();
  return (
    <S.Form onSubmit={handlePostNewCar}>
      <h1>Adicionar novo carro</h1>
      <S.WrapperFields>
        <S.Field>
          <span>Modelo do carro</span>
          <input
            placeholder="Corolla"
            onChange={(event) =>
              dispatch({ type: "SET_NAME_MODEL", payload: event?.target.value })
            }
          />
        </S.Field>
        <S.Field>
          <span>Marca</span>
          <ReactSelect
            styles={stylesSelect}
            placeholder="Toyota"
            options={optionsSelect}
            onChange={(event) =>
              dispatch({
                type: "SET_BRAND",
                payload: event?.value ? event?.value : 99,
              })
            }
          />
        </S.Field>
      </S.WrapperFields>
      <S.WrapperFields>
        <S.Field>
          <span>Ano</span>
          <input
            placeholder="2024"
            onChange={(event) =>
              dispatch({
                type: "SET_YEAR",
                payload: Number(event?.target.value),
              })
            }
          />
        </S.Field>
        <S.Field>
          <span>Cor</span>
          <input
            placeholder="PRETA"
            onChange={(event) =>
              dispatch({ type: "SET_COLOR", payload: event.target.value })
            }
          />
        </S.Field>
      </S.WrapperFields>
      <S.WrapperFields>
        <S.Field>
          <span>Nº de portas</span>
          <input
            placeholder="4"
            onChange={(event) =>
              dispatch({
                type: "SET_NUM_DOOR",
                payload: Number(event?.target.value),
              })
            }
          />
        </S.Field>
        <S.Field>
          <span>Combustível</span>
          <input
            placeholder="GASOLINA"
            onChange={(event) =>
              dispatch({
                type: "SET_FUEL",
                payload: event?.target.value,
              })
            }
          />
        </S.Field>
      </S.WrapperFields>
      <S.Field>
        <span>Valor</span>

        <input
          placeholder="R$ 30.000"
          value={state.valor && state.valor}
          onChange={(event) =>
            dispatch({
              type: "SET_VALUE",
              payload: formatedValue(event.target.value.replace(/\D/g, "")),
            })
          }
        />
      </S.Field>
      <Button
        type="submit"
        text="Confirmar"
        icon={<IoAddCircle size={22} />}
        isLoading={isLoading}
        isDisabled={
          !state.ano ||
          !state.brand ||
          !state.combustivel ||
          !state.cor ||
          !state.nome_modelo ||
          !state.num_portas ||
          !state.valor
        }
        fullScreen
      />
    </S.Form>
  );
}

function useFormAddNewCarLogic() {
  const { dataBrands, getData } = useData();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const stylesSelect = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      borderColor: "#000040",
      border: "2px solid",
      borderRadius: "8px",
      height: "40px",
      fontFamily: "var(--font-raleway)",
      ":hover": {
        borderColor: "#000040",
      },
    }),
    valueContainer: () => ({
      height: "40px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "8px",
    }),
    option: () => ({
      fontFamily: "var(--font-raleway)",
      padding: "4px",
      ":hover": {
        background: "#ccc",
      },
    }),
  };

  const optionsSelect = dataBrands?.map((brand) => {
    return {
      value: brand.id,
      label: brand.brand_name,
    };
  });

  const initialState: Omit<Car, "id" | "timestamp_cadastro" | "modelo_id"> = {
    ano: 0,
    combustivel: "",
    num_portas: 0,
    cor: "",
    nome_modelo: "",
    valor: "",
    brand: undefined,
  };

  function reducer(
    state: Omit<Car, "id" | "timestamp_cadastro" | "modelo_id">,
    action: ActionType
  ): Omit<Car, "id" | "timestamp_cadastro" | "modelo_id"> {
    switch (action.type) {
      case "SET_YEAR":
        return { ...state, ano: action.payload };
      case "SET_FUEL":
        return { ...state, combustivel: action.payload };
      case "SET_NUM_DOOR":
        return { ...state, num_portas: action.payload };
      case "SET_COLOR":
        return { ...state, cor: action.payload };
      case "SET_NAME_MODEL":
        return { ...state, nome_modelo: action.payload };
      case "SET_VALUE":
        return { ...state, valor: action.payload };
      case "SET_BRAND":
        return { ...state, brand: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  async function handlePostNewCar(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const payload: Car = {
      ano: state.ano,
      combustivel: state.combustivel,
      cor: state.cor,
      id: generateRandowNumberId(),
      modelo_id: generateRandowNumberId(),
      nome_modelo: state.nome_modelo,
      num_portas: state.num_portas,
      timestamp_cadastro: new Date().getTime(),
      valor: state.valor,
      brand: state.brand,
    };
    try {
      const { data, status } = await axios.post(
        "https://wswork-api-challenger.onrender.com/cars",
        payload
      );

      if (status !== 201) {
        return toast.error("Houve um erro, tente novamente mais tarde!", {
          position: "bottom-center",
          autoClose: 5000,
        });
      }
      setIsLoading(false);
      getData();

      return toast.success("Novo carro adicionado!", {
        position: "bottom-center",
        autoClose: 5000,
      });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    optionsSelect,
    stylesSelect,
    state,
    dispatch,
    handlePostNewCar,
    initialState,
    isLoading,
  };
}
