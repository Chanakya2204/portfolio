import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/binaya-behera-097ba926a/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href:"https://github.com/Chanakya2204",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:beherakumarbinay@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href:"https://drive.google.com/file/d/18tSWczrtP575bJFeaQFE1CZfE1BLvlat/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
      file:"resume.pdf"
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[37%] left-0 fixed">
        {/* hidden lg: se jb screen bada krnege 1024px se jada hoga tbn hi ye sb dikhega */}
      <ul>
        {/* ye sb bananne ke baad isko {links.map((links)=>(  ))}  mai dalna*/}
        {links.map(({id, child, href, style, download}) => (
          <li
            key={id}
            className={
              "flex bg-black-500 justify-between items-center w-40 h-12 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500" +
              " " +
              style
            }
          >
            {/*  px-4 ke baad jitna bhi hai wo animation lane ke liye use kiya gya hai  */}
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="_blank"
              rel="noreferrer" 
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
