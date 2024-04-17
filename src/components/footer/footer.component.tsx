import { FaGithub } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" w-full flex justify-center">
      <div className="flex items-center gap-x-5  mt-44 sm:mt-0 sm:mb-5">
        <p>Created by Gabriel Neoob</p>
        <a href="https://github.com/gabrielneoob/">
          <FaGithub />
        </a>
        <a href="https://github.com/gabrielneoob/">
          <FaElementor />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
