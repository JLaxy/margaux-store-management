"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const emailPlaceholder = "You@example.com";
const passwordPlaceholder = "Password";

export default function LoginForm() {
  const loginSchema = yup.object({
    email: yup
      .string()
      .email("Invalid Email!")
      .required("Please provide an email"),
    password: yup.string().required("Please provide a password!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input placeholder={emailPlaceholder} {...register("email")} />
      {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      <label>Password</label>
      <input placeholder={passwordPlaceholder} {...register("password")} />
      {errors.password && (
        <p className="text-red-600">{errors.password.message}</p>
      )}
      <button type="submit">Login</button>
    </form>
  );
}
