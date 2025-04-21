import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "../../../components/Common/Logo";
import Loader from "../../../components/Common/Loader";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());

    const finalData = { ...value };

    fetch("http://localhost:5000/register", {
      // Update the URL as per your backend
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully registered");
        setLoading(false);
        navigate("/signin");
      })
      .catch((err) => {
        toast.error(err.message || "Registration failed");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block">
        <Logo />
      </div>

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-[40%] before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-[40%] after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 bg-transparent px-5 py-3 text-base text-white outline-none transition placeholder:text-grey focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 bg-transparent px-5 py-3 text-base text-white outline-none transition placeholder:text-grey focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 bg-transparent px-5 py-3 text-base text-white outline-none transition placeholder:text-grey focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-primaryPurple px-5 py-3 text-darkmode font-medium text-[18px] transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border border-primary"
          >
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className="text-body-secondary mb-4 text-white text-base">
        By creating an account you agree to our{" "}
        <a href="/#" className="text-primary hover:underline">
          Privacy
        </a>{" "}
        and{" "}
        <a href="/#" className="text-primary hover:underline">
          Policy
        </a>
      </p>

      <p className="text-body-secondary text-white text-base">
        Already have an account?
        <a href="/signin" className="pl-2 text-primary hover:underline">
          Sign In
        </a>
      </p>
    </>
  );
};

export default SignUp;
