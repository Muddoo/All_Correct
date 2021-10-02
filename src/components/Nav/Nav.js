import { useContext } from "react";
import GetInTouchModal from "../GetInTouchModal/GetInTouchModal";
import { Container, Logo, Menu, Text } from "./Nav.styles";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";

function Nav({ lang, inherit }) {
  const { showModal, openModal, closeModal } = useContext(GetInTouchModalContext);

  return (
    <Container inherit={inherit}>
      <Logo>
        <Text color="blue">Allcorrect</Text>
        <Text>Game outsourcing studio</Text>
      </Logo>
      <Menu>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Portfolio
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          About us
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Services
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Pricing
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Blog
        </Text>
        <Text as="a" href="#" rel="noreferrer noopener" className="normal">
          Join us
        </Text>
        <Text className="normal" color="blue" onClick={openModal}>
          Get in touch
        </Text>
        <GetInTouchModal onClose={closeModal} showModal={showModal} />
        {lang && <Text className="normal block">Ru</Text>}
      </Menu>
    </Container>
  );
}

export default Nav;
