import { useEffect, useRef, useState, useCallback, useContext } from "react";
import ReactDOM from "react-dom";
import GetInTouchConfirm from "./GetInTouchConfirm";
import GetInTouchModalInfo from "./GetInTouchModalInfo";
import { Background, ModalWrapper } from "./GetInTouchModal.styles";
import GetInTouchModalContext from "../../context/GetInTouchModalContext";

const GetInTouchModal = () => {
  const { showModal, closeModal } = useContext(GetInTouchModalContext);

  const modalRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  // form fields
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formFields;

  // modal related
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
      setFormFields({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        closeModal();
        setFormFields({
          name: "",
          email: "",
          message: "",
        });
      }
    },
    [showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = (event) => {
    if (name && email && message) {
      event.preventDefault();
      nextStep();
      setSubmitted(true);
    }
  };

  const modalContent = showModal && (
    <Background onClick={handleOutsideClick} ref={modalRef}>
      <ModalWrapper role="Form Inquiry" aria-labelledby="Form Inquiry">
        <form>
          {step === 1 && submitted ? (
            <GetInTouchConfirm closeModal={closeModal} />
          ) : (
            <GetInTouchModalInfo
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formFields={formFields}
              submitted={submitted}
              closeModal={closeModal}
            />
          )}
        </form>
      </ModalWrapper>
    </Background>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default GetInTouchModal;
