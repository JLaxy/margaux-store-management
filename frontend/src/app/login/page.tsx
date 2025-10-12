import LoginForm from "@/components/LoginForm";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <h1>Welcome to Vent2Go!</h1>
      <p>Your store management on the go.</p>
      <section>
        <h4>Let's sign you in to Margaux Store</h4>
        <LoginForm />
      </section>
    </div>
  );
}
