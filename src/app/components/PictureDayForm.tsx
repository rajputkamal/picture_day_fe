"use client";

import styled, { css } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

// import { useContext } from "react";
// import { MobileContext } from "../context/MobileContext";
import emailjs from "emailjs-com";
import { ErrorMessage } from "./ErrorMessage";
import { Button } from "./Button";
import { SectionLayout } from "./Layout";

const PictureDayForm = () => {
  const isMobile = false;

  const sendEmail = (values, resetForm) => {
    const templateParams = {
      booking_for: values.booking_for,
      name:
        values.booking_for === "school"
          ? values.schoolName
          : values.studentName,
      contactPerson: values.contactPerson,
      email: values.email,
      NoOfStudents:
        values.booking_for === "school" ? values.NoOfStudents : "N/A",
      address: values.address,
      dateTime: values.dateTime,
    };

    emailjs
      .send(
        "service_x50zaq2",
        "template_1wmpjj9",
        templateParams,
        "MPC5OpLsba6hnVM3y"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        resetForm();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again.");
      });
  };

  const formik = useFormik({
    initialValues: {
      booking_for: "school",
      schoolName: "",
      studentName: "",
      contactPerson: "",
      email: "",
      NoOfStudents: "",
      address: "",
      dateTime: "",
    },
    validationSchema: Yup.object({
      booking_for: Yup.string().required("Please select one option"),
      schoolName: Yup.string()
        .required("School Name is required")
        .max(64, "School Name should not be longer than 64 characters"),
      studentName: Yup.string()
        .required("Student Name is required")
        .max(64, "Student Name should not be longer than 64 characters"),
      contactPerson: Yup.string()
        .required("Contact Person Name is required")
        .max(64, "Contact Person should not be longer than 64 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .max(64, "Email should not be longer than 64 characters"),
      NoOfStudents: Yup.number()
        .required("Number of Students is required")
        .min(1, "Number of Students should be greater than 0"),
      address: Yup.string()
        .required("Address is required")
        .max(64, "Address should not be longer than 64 characters"),
      dateTime: Yup.date().required("Date & Time is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values, resetForm);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit} isMobile={isMobile}>
      <StyledCheckboxWrapper isMobile={isMobile}>
        <StyledCheckbox>
          <input
            type="radio"
            id="school"
            name="booking_for"
            value="school"
            checked={formik.values.booking_for === "school"}
            onChange={formik.handleChange}
          />
          <label htmlFor="school" style={{ cursor: "pointer" }}>
            School/Institute
          </label>
        </StyledCheckbox>
        <StyledCheckbox>
          <input
            type="radio"
            id="parent"
            name="booking_for"
            value="parent"
            checked={formik.values.booking_for === "parent"}
            onChange={formik.handleChange}
          />
          <label htmlFor="parent" style={{ cursor: "pointer" }}>
            Parent/Guardian/Student
          </label>
        </StyledCheckbox>
      </StyledCheckboxWrapper>

      {formik.values.booking_for === "school" && (
        <>
          <label htmlFor="html">School Name:</label>
          <StyledInput
            type="text"
            id="schoolName"
            placeholder="School Name"
            {...formik.getFieldProps("schoolName")}
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <ErrorMessage message={formik.errors.schoolName} />
          )}
        </>
      )}

      {formik.values.booking_for === "parent" && (
        <>
          <label htmlFor="html">Student Name:</label>
          <StyledInput
            type="text"
            id="studentName"
            placeholder="Student Name"
            {...formik.getFieldProps("studentName")}
          />
          {formik.touched.studentName && formik.errors.studentName && (
            <ErrorMessage message={formik.errors.studentName} />
          )}
        </>
      )}

      <label htmlFor="html">Person of Contact:</label>
      <StyledInput
        type="text"
        id="contactPerson"
        placeholder="Person of Contact"
        {...formik.getFieldProps("contactPerson")}
      />
      {formik.touched.contactPerson && formik.errors.contactPerson && (
        <ErrorMessage message={formik.errors.contactPerson} />
      )}

      <label htmlFor="html">
        {formik.values.booking_for === "parent" ? "Email:" : "School Email:"}
      </label>
      <StyledInput
        type="email"
        id="email"
        placeholder="Email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email && (
        <ErrorMessage message={formik.errors.email} />
      )}

      {formik.values.booking_for === "school" && (
        <>
          <label htmlFor="html">Number of Students:</label>
          <StyledInput
            type="number"
            id="NoOfStudents"
            placeholder="Number of Students"
            {...formik.getFieldProps("NoOfStudents")}
          />
          {formik.touched.NoOfStudents && formik.errors.NoOfStudents && (
            <ErrorMessage message={formik.errors.NoOfStudents} />
          )}
        </>
      )}

      <label htmlFor="html">
        {formik.values.booking_for === "school"
          ? "School Address:"
          : "Address:"}
      </label>
      <StyledInput
        type="text"
        id="address"
        placeholder="Address"
        {...formik.getFieldProps("address")}
      />
      {formik.touched.address && formik.errors.address && (
        <ErrorMessage message={formik.errors.address} />
      )}

      <label htmlFor="html">Preffered Date & Time:</label>
      <StyledInput
        type="datetime-local"
        id="dateTime"
        placeholder="Date & Time"
        {...formik.getFieldProps("dateTime")}
      />
      {formik.touched.dateTime && formik.errors.dateTime && (
        <ErrorMessage message={formik.errors.dateTime} />
      )}

      <StyledButtonContainer isMobile={isMobile}>
        <Button type="reset" title="Reset" onClick={formik.handleReset} />
        <Button type="submit" title="Book a Photoshoot" submitButton />
      </StyledButtonContainer>
    </StyledForm>
  );
};

const StyledForm = styled.form<{ isMobile: boolean }>(
  ({ isMobile }) => css`
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${isMobile ? "12px" : "16px"};
    padding: ${isMobile ? "32px 0" : "64px 0"};
    @media (max-width: 768px) {
      max-width: 400px;
    }
    @media (max-width: 460px) {
      max-width: 300px;
    }
  `
);

const StyledCheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 460px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const StyledCheckbox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #e1e4e8;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
    & button {
      width: 100%;
    }
  }
`;
export { PictureDayForm };
