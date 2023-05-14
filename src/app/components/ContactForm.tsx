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
    <form
      className="form-floating p-4 shadow rounded-4 my-4 mx-auto col-12 col-md-8 col-lg-6 col-xl-5 "
      onSubmit={submitHandler}
    >
      <h2 className="text-center mt-2 mb-4">Send us a message...</h2>
      <div className="d-flex gap-3">
        <div className="form-floating mb-4 w-100">
          <input
            required
            type="text"
            className="form-control "
            id="name"
            name="name"
            placeholder="Password"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3 w-100">
          <input
            required
            type="text"
            className="form-control "
            id="subject"
            placeholder="Password"
            name="subject"
          />
          <label htmlFor="subject">Subject</label>
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          required
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className=" mb-4">
        <label htmlFor="message" className="ps-2 py-2">
          Message
        </label>
        <textarea
          required
          className="form-control"
          id="message"
          name="message"
          rows={4}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
}
