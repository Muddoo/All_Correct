import styled from "styled-components";

export const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 63px;
  letter-spacing: -0.01em;

  span {
    /*  Color the span with theme.primary color */
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SubTitle = styled.h2`
  font-size: 35px;
  color: ${(props) => props.color};
`;
