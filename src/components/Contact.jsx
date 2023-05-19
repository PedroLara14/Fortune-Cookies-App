import React from 'react'
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className="w-50 h-20 flex items-center justify-center fixed -mb-6 bottom-0">
      <div className="app__contact flex items-center justify-center">
        <p className="text-2xl tracking-tighter">
          Meet the developer of this project
        </p>
        <a href="https://github.com/PedroLara14" className="-mt-0.5 ml-2">
          <BsGithub size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Contact