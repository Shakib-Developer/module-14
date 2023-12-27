"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [formValue, SetFormValue] = useState({
    email: "ahmed@gmail.com",
  });
  const router = useRouter();

  const inputChange = (name, value) => {
    SetFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    if (formValue.email.length === 0) {
      alert("Email Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/login", config);
      const json = await response.json();
      if (json["status"] === true) {
        router.replace("/dashboard");
        router.refresh();
      } else {
        alert(json["somthing wrong!"]);
      }
    }
  };

  return (
    <div>
      <div className="bg-gray-500 w-2/4 mx-auto px-5 pb-20 my-16">
        <div>
          <h1 className="text-center py-16 text-4xl font-bold text-white">
            Log in Form
          </h1>
          <form className="flex justify-around items-center" onSubmit={Submit}>
            <label>User Email</label> <br />
            <input
              className="p-2 mt-2 text-gray-700"
              value={formValue.email}
              onChange={(e) => inputChange("email", e.target.value)}
              type="email"
              placeholder="example@gmail.com"
            />
            <input
              className="btn btn-primary mt-3"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
