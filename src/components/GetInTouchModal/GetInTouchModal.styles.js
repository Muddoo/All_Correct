import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: auto;
  position: fixed;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 404px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.dark};
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);

  input {
    font-family: ${(props) => props.theme.fonts.inter};
    outline: none;
    width: 80%;
    padding: 15px;
    margin: 0 40px;
    box-sizing: border-box;
  }

  textarea {
    font-family: ${(props) => props.theme.fonts.inter};
    outline: none;
    width: 80%;
    height: 100px;
    padding: 15px;
    margin: 40px 40px;
  }

  input[type="file"] {
    display: none;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 16px;
  }

  .custom-file-upload {
    font-family: ${(props) => props.theme.fonts.inter};
    background: ${(props) => props.theme.colors.dark};
    border: 1px solid ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white};
    box-sizing: border-box;
    display: block;
    margin: 40px 40px;
    width: 80%;
    max-width: 324px;
    min-height: 50px;
    padding: 15px 83px;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  text-align: left;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.fonts.dark};
  padding: 40px 40px 60px;
  margin: 0;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-right: 40px;
  margin-bottom: 60px;
`;

export const Info = styled.p`
  margin: 0 40px 93px;
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.fonts.dark};
`;

export const Button = styled.button`
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.02em;
  margin-left: 40px;
  margin-bottom: 40px;
  color: #4a8eff;
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
