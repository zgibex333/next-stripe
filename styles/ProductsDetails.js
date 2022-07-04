import styled from "styled-components";

export const DetailsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    width: 40%;
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
  }

  span {
    color: var(--secondary);
  }

  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background-color: var(--primary);
  color: #fff;
  font-weight: 500;
`;
