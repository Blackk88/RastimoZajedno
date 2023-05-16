"use client";

import { ToastContainer, toast } from "react-toastify";

interface Props {
  dictionary: {
    notification: {
      pending: string;
      success: string;
    };
  };
}

export default function ContactForm({ dictionary }: Props) {
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //! TODO: add frontend form validation

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formDataJson = Object.fromEntries(formData.entries());

    try {
      toast.info("Sending your message...", { theme: "colored" });
      const response = await fetch("/en/contacts/api/send-mail", {
        method: "POST",
        body: JSON.stringify(formDataJson),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      toast.dismiss();
      toast.success(dictionary.notification.success, {
        theme: "colored",
        autoClose: 3000,
      });
    } catch (error) {
      toast("Something went wrong. Please try again", {
        theme: "colored",
        autoClose: 3000,
      });
    }

    form.reset();
  }

  return (
    <>
      <form
        className="form-floating p-4 shadow rounded-4 my-4 mx-auto col-12 col-md-8 col-lg-8 col-xl-6"
        onSubmit={submitHandler}
      >
        <h2 className="text-center mt-2 mb-4">Send us a message</h2>
        <div className="d-md-flex gap-3">
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
        <button
          type="submit"
          className="btn btn-info w-100 py-3 rounded-5 fw-bold text-uppercase fs-5 text-white"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
