import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();

  const clickHandler = () => {
    if (router.asPath == "/students-listing") {
      router.push("/");
    }
    if (router.asPath == "/") {
      router.push("/students-listing");
    }
  };
  return (
    <div className="flex items-center justify-center w-full px-2 py-3 border-b-2">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl">
        <p className="text-3xl font-semibold text-center">
          {" "}
          KIIT E-CELL INTERNSHIP CAMP&apos;23{" "}
          {router.asPath == "/students-listing" ? "Students" : "Companies"}
        </p>

        <button
          onClick={clickHandler}
          className="px-4 py-2 my-2 font-semibold text-white bg-blue-600 rounded-md"
        >
          {router.asPath == "/students-listing"
            ? "Switch to Company Listing"
            : "Switch to Student Listing"}
        </button>
      </div>
    </div>
  );
};

export default Header;
