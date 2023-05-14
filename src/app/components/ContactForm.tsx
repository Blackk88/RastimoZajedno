"use client";

import React, { useRef } from "react";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //! TODO: add frontend form validation

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formDataJson = Object.fromEntries(formData.entries());

    const response = await fetch("/en/contacts/api/send-mail", {
      method: "POST",
      body: JSON.stringify(formDataJson),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  }

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column w-50 mx-auto">
      <label>Name</label>
      <input type="text" name="name" ref={nameRef} />
      <label>Subject</label>
      <input type="text" name="subject" ref={subjectRef} />
      <label>Email</label>
      <input type="email" name="email" ref={emailRef} />
      <label>Message</label>
      <textarea name="message" ref={messageRef} />
      <input type="submit" value="Send" className="mt-2" />
    </form>
  );
}
