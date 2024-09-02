import { IoMdHeart } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="p-2 flex flex-row flex-wrap justify-center items-center gap-2 bg-zinc-100 shadow-lg">
        Created By <IoMdHeart color="darkred" />
        <a
          href="https://www.linkedin.com/in/chetannada/"
          target="_blank"
          title="Chetan Nada's Linkedin Profile"
          className="!text-blue-950 font-bold"
        >
          Chetan Nada
        </a>
        <FaRegCopyright />
        {year}
        <a
          href="https://github.com/chetannada/ReactJs-Projects"
          target="_blank"
          title="ReactJs Projects Github Repository"
        >
          <span className="text-cyan-800 font-bold mr-2">React.js</span>Projects
        </a>
      </footer>
    </>
  );
};

export default Footer;
