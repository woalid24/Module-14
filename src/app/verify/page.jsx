"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { getCookie } from "cookies-next";

const page = () => {
  const myEmail = getCookie("email");

  const router = useRouter();
  const [formValue, setFormValue] = useState({
    password: "1234",
  });

  const inputChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };
  const Submit = async (e) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {
    if (formValue.password.length === 0) {
      alert("Please Required password");
    } else {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      
      const data = await response.json();
      if (data["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(data["message"]);
      }
    }
  };
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
              </div>
            </div>

            <div>
              <div className="flex flex-col space-y-16">
                <form onSubmit={Submit} className="">
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    value={formValue.password}
                    onChange={(e) => inputChange("password", e.target.value)}
                    type="password"
                  />
                </form>

                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between items-baseline">
                    <button
                      onClick={handleSubmit}
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
