import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-direction: column;

  h1 {
    color: #000040;
  }
`;

export const Field = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  span {
    font-size: 16px;
    font-family: var(--font-roboto);
    color: #000040;
  }

  input {
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: 2px solid #000040;
    height: 40px;

    &::placeholder {
      font-family: var(--font-raleway);
    }
  }
`;

export const WrapperFields = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 20px;
`;
