import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import ReactDOM from "react-dom";
import { Background, ModalWrapper, Text, Title } from "./Modal.styles";
import Confirm from "./Confirm";
import ErrorBoundary from "../ErrorBoundary";

const Modal = ({ showModal, onClose, title }) => {
  const modalRef = useRef();

  // react spring animation
  const animation = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
    to: {
      opacity: showModal ? 1 : 0,
      transform: showModal ? "translate3d(0, 0, 0)" : "translate3d(0, -20px, 0)",
    },
  });

  // modal related
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  // form fields
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        onClose();
      }
    },
    [showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleSubmit = () => {
    if (name && email && message) {
      onClose();
      setSubmitted(true);
    }
  };

  const modalContent = showModal && (
    <Background ref={modalRef} onClick={handleCloseClick}>
      {/* <animated.div style={animation}> */}
      <ModalWrapper role="Form Inquiry" aria-labelledby="Form Inquiry">
        <Title>{title}</Title>
        <form onSubmit={handleSubmit}>
          <ErrorBoundary>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Project Description"
              minLength="2"
              maxLength="200"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email*"
              required
            />
            <input type="file" />
            Add file if needed
            {checked && (
              <input
                type="checkbox"
                name="checkbox"
                value="GDPR Agreement"
                checked
                onChange={() => setChecked(!checked)}
              />
            )}
            <Text>
              Please note that this form is strictly for project inquiries only. To apply for a job,
              please visit our{" "}
              <Link
                href="https://allcorrectgames.com/for-freelancers/"
                target="_blank"
                noopener="true">
                <a>career page.</a>
              </Link>
            </Text>
            <button type="submit">Send the form –></button>
          </ErrorBoundary>
          {/* {submitted && <Confirm onClose={onClose} title="Thank you!" />} */}
        </form>
      </ModalWrapper>
      {/* </animated.div> */}
    </Background>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
};

export default Modal;
