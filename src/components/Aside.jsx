"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Aside component
const Aside = (props) => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const pathname = usePathname();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };

  useEffect(() => {
    console.log(pathname);
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <>
      <aside className="asideleft">
        <ul>
          <Link href={"/"}>
            <li
              onClick={() => handleLinkClick("/")}
              className={activeLink === "/" ? "navactive" : ""}
            >
              <FaHome />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link href={"/blogs"}>
            <li
              onClick={() => handleLinkClick("/blogs")}
              className={activeLink === "/blogs" ? "navactive" : ""}
            >
              <BsStack />
              <span>Blogs</span>
            </li>
          </Link>

          <Link href={"/addblog"}>
            <li
              onClick={() => handleLinkClick("/addblog")}
              className={activeLink === "/addblog" ? "navactive" : ""}
            >
              <MdOutlineAddPhotoAlternate />
              <span>Add Blog</span>
            </li>
          </Link>

          <Link href={"/draft"}>
            <li
              onClick={() => handleLinkClick("/draft")}
              className={activeLink === "/draft" ? "navactive" : ""}
            >
              <LuLoader />
              <span>Pending</span>
            </li>
          </Link>

          <Link href={"/settings"}>
            <li
              onClick={() => handleLinkClick("/settings")}
              className={activeLink === "/settings" ? "navactive" : ""}
            >
              <IoMdSettings />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
