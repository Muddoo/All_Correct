import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: 861px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 80px;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.fonts.dark};
  text-align: left;
  padding: 40px 40px 0;
  margin: 0;
`;

export const Button = styled.button`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;
  color: #4a8eff;
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  border: none;
  text-align: left;
  display: block;
  padding-left: 40px;
  padding-bottom: 40px;

  &:hover {
    cursor: pointer;
  }
`;
