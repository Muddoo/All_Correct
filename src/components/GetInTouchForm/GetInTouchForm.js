import { useContext } from "react";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";
import GetInTouchModal from "../GetInTouchModal/GetInTouchModal";
import { Text, Container, Wrapper } from "./GetInTouchForm.styles";

const GetInTouchForm = ({ inherit }) => {
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);

  return (
    <Container inherit={inherit}>
      <Wrapper onClick={openModal}>
        <Text color="blue">Get in touch</Text>
        <Text>to start your project &#10230;</Text>
      </Wrapper>
      <GetInTouchModal closeModal={closeModal} showModal={showModal} />
    </Container>
  );
};

export default GetInTouchForm;
