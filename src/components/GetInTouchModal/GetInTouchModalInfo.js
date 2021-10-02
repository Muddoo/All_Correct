import { useState } from "react";
import Link from "next/link";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { Button, CheckboxWrapper, Info, Text, Title } from "./GetInTouchModal.styles";

const GetInTouchModalInfo = ({ handleSubmit, handleChange, formFields }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Title>Get in Touch</Title>
      <ErrorBoundary>
        <input
          type="text"
          name="name"
          value={formFields.name}
          onChange={handleChange}
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
        <textarea
          type="text"
          name="message"
          value={formFields.message}
          onChange={handleChange}
          placeholder="Project Description"
          minLength="2"
          maxLength="200"
          required
        />
        <input
          type="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          placeholder="Email*"
          required
        />
        <label className="custom-file-upload">
          <input type="file" />
          Add files if needed
        </label>
        <CheckboxWrapper>
          <input
            type="checkbox"
            name="GDPR Agreement"
            value="GDPR Agreement"
            onChange={() => setChecked(!checked)}
          />
          <Text>GDPR Agreement</Text>
        </CheckboxWrapper>
        <Info>
          Please note that this form is strictly for project inquiries only. To apply for a job,
          please visit our{" "}
          <Link href="https://allcorrectgames.com/for-freelancers/" target="_blank" noopener="true">
            <a>career page.</a>
          </Link>
        </Info>
        <Button onClick={handleSubmit}>Send the form –></Button>
      </ErrorBoundary>
    </>
  );
};

export default GetInTouchModalInfo;
