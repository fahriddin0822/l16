import React from "react";

const Header = ({ onOpenModal, onSignIn, onSignUp }) => {
  return (
    <div className="bg-blue-400 h-12 flex justify-end items-center px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      <button
        className="bg-yellow-300 rounded-md px-2 py-1 ml-4"
        onClick={onSignIn}
      >
        Sign in
      </button>
      <button
        className="bg-yellow-300 rounded-md px-2 py-1 ml-4"
        onClick={onSignUp}
      >
        Sign up
      </button>
    </div>
  );
};

export default Header;
