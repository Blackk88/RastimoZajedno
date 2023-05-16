"use client";

import { useRef, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./contact-form.module.scss";

interface Props {
  dictionary: {
    notification: {
      pending: string;
      success: string;
    };
  };
}
export default function ContactForm({ dictionary }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [isInputValid, setIsInputValid] = useState({
    name: false,
    email: false,
    subject: true,
    message: false,
  });

  const [isTouched, setIsTouched] = useState(false);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isFormValid = Object.values(isInputValid).every(
      (input) => input === true
    );

    if (!isFormValid) {
      toast.error("Please enter a valid information!");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formDataJson = Object.fromEntries(formData.entries());

    try {
      toast.info("Sending your message...", { hideProgressBar: true });
      const response = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(formDataJson),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      toast.dismiss();
      toast.success(dictionary.notification.success, {});
    } catch (error) {
      toast("Something went wrong. Please try again", {});
    }

    setFormData({
      name: "",
      email: "",
      message: "",
      subject: "",
    });

    setIsInputValid({
      name: false,
      email: false,
      message: false,
      subject: false,
    });

    setIsTouched(false);
  }

  function changeHandler(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setIsTouched(true);
    const { name, value } = e.currentTarget;

    const isInputValid = inputValidation(name, value);

    setIsInputValid((prev) => ({
      ...prev,
      [name]: isInputValid,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function inputValidation(input: string, value: string) {
    switch (input) {
      case "name":
        const regName = /.{3,}/;
        return regName.test(value);
      case "email":
        const regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return regEmail.test(value);
      case "subject":
        return true;
      case "message":
        const regMessage = /\w+/;
        return regMessage.test(value);
      default:
        return false;
    }
  }

  return (
    <>
      <form
        className="form-floating p-4 shadow rounded-4 my-4 mx-auto col-12 col-md-8 col-lg-8 col-xl-6"
        onSubmit={submitHandler}
        noValidate
      >
        <h2 className="text-center mt-2 mb-4">Send us a message</h2>
        <div className="d-md-flex gap-3">
          <div className="form-floating mb-4 w-100">
            <input
              required
              type="text"
              className={`form-control ${
                isTouched && (isInputValid.name ? "is-valid" : "is-invalid")
              }`}
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={changeHandler}
            />
            <label htmlFor="name">Name*</label>
            <div className="invalid-feedback">
              {formData.name === ""
                ? "Field is required"
                : "Input valid name (min 3 letter)"}
            </div>
          </div>
          <div className="form-floating mb-3 w-100">
            <input
              type="text"
              className={`form-control ${
                isTouched && (isInputValid.subject ? "is-valid" : "is-invalid")
              }`}
              id="subject"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={changeHandler}
            />
            <label htmlFor="subject">Subject (optional)</label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            required
            type="email"
            className={`form-control ${
              isTouched && (isInputValid.email ? "is-valid" : "is-invalid")
            }`}
            id="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={changeHandler}
          />
          <label htmlFor="email">Email address*</label>
          <div className="invalid-feedback">
            {formData.email === "" ? "Field is required" : "Input valid email"}
          </div>
        </div>
        <div className=" mb-4">
          <label htmlFor="message" className="ps-2 py-2">
            Message*
          </label>
          <textarea
            required
            className={`form-control ${
              isTouched && (isInputValid.message ? "is-valid" : "is-invalid")
            }`}
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={changeHandler}
          />
          <div className="invalid-feedback">
            {formData.message === ""
              ? "Field is required"
              : "Input valid message"}
          </div>
        </div>

        <button
          type="submit"
          className={
            classes.btnSubmit +
            " btn btn--submit w-100 py-3 rounded-5 fw-bold text-uppercase"
          }
        >
          Send Message
        </button>
      </form>
      <ToastContainer
        theme="colored"
        transition={Slide}
        autoClose={3000}
        limit={5}
      />
    </>
  );
}
