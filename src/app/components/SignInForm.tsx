"use client";

import React, { useState } from "react";
import styled from "styled-components";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    identifier: "", // mobile or email
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Handle API call or validation
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Sign In</Title>

      <Label htmlFor="identifier">Mobile or Email</Label>
      <Input
        id="identifier"
        name="identifier"
        type="text"
        value={formData.identifier}
        onChange={handleChange}
        placeholder="Enter mobile or email"
        required
      />

      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />

      <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>

      <SubmitButton type="submit">Sign In</SubmitButton>
    </FormContainer>
  );
};

// Styled Components

const FormContainer = styled.form`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 32px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin: 12px 0 6px;
  font-size: 14px;
  color: #444;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ForgotPasswordLink = styled.a`
  display: block;
  margin-top: 10px;
  text-align: right;
  font-size: 13px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

export { SignInForm };
