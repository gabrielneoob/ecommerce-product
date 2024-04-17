import { FaGithub } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex w-max">
      <p>Created by Gabriel Neoob</p>
      <a href="https://github.com/gabrielneoob/">
        <FaGithub />
      </a>
      <a href="https://github.com/gabrielneoob/">
        <FaElementor />
      </a>
    </footer>
  );
};

export default Footer;
