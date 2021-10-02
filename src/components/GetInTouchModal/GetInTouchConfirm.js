import { Text, Container, TextWrapper, Button } from "./GetInTouchConfirm.styles";

const GetInTouchConfirm = ({ closeModal }) => {
  return (
    <Container>
      <TextWrapper>
        <Text>Thank you!</Text>
        <Text>Your request has been sent to our manager and we will reach back to you soon.</Text>
      </TextWrapper>

      <Button onClick={closeModal} color="blue" type="button">
        Ok, got it!
      </Button>
    </Container>
  );
};

export default GetInTouchConfirm;
