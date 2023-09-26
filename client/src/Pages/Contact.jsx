import { useState } from "react";
import HomeLayouts from "../Layouts/HomeLayouts";
import {toast} from "react-hot-toast";
import { isEmail } from "../Helper/RegexMatcher";
import axiosInstance from "../Helper/axiosInstance";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    // console.log(name, value)
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }
  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fields are mandatory");
      return;
    }
    if (!isEmail(userInput.email)) {
      toast.error("Invalid email");
      return;
    }
    try {
      const response = axiosInstance.post('/contact', { ...userInput });
        toast.promise(response, {
          loading: "submitting your message",
          success: "form submitted successfully",
          error: "failed to submit form",
        });
      const contactResponse = await response;
      console.log(contactResponse)
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("operation failed....");
    }
  }
  return (
    <HomeLayouts>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          noValidate
          onSubmit={onFormSubmit}
          className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">
          <h1 className="text-3xl font-semibold">Contact Form</h1>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              className="bg-transparent border px-2 py-1 rounded-sm"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleInputChange}
              value={userInput.name}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              className="bg-transparent border px-2 py-1 rounded-sm"
              type="Email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInputChange}
              value={userInput.email}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="text-xl font-semibold">
              Message
            </label>
            <textarea
              className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
              id="message"
              name="message"
              placeholder="Enter your message"
              onChange={handleInputChange}
              value={userInput.message}
            />
          </div>
          <button
            text="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </HomeLayouts>
  );
}

export default Contact;
