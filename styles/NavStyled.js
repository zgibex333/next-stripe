import styled from "styled-components";

export const NavStyled = styled.div`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  h1 {
    font-size: 1rem;
    padding: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
  }

  span {
    background: #ff2626;
    color: #fff;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    top: -20%;
    right: -10%;
    pointer-events: none;
  }
`;
