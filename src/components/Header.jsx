"use client";

import { RiBarChartHorizontalLine } from "react-icons/ri";
import { GoScreenFull } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsFullscreenExit } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import Link from "next/link";
import { logoutAction } from "@/server-actions/serverActions";

// header component
const Header = ({ user }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  //console.log(user);

  // handle full screen mechanism
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullScreen(true));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullScreen(false));
      }
    }
  };

  // return the jsx
  return (
    <>
      <header className="header flex flex-sb">
        <div className="logo flex gap-2">
          <h1>Admin</h1>
          <div className="headerham flex flex-center">
            <RiBarChartHorizontalLine />
          </div>
        </div>

        <div className="rightnav flex gap-2">
          <div onClick={toggleFullScreen}>
            {isFullScreen ? <BsFullscreenExit /> : <GoScreenFull />}
          </div>
          <div className="notification">
            <FaRegBell />
          </div>
          <div className="profilenav">
            {user ? (
              <>
                <Image
                  src={user?.image}
                  width={30}
                  height={30}
                  alt={user?.name}
                  style={{ borderRadius: "100%", border: "1px solid black" }}
                />
                <form action={logoutAction}>
                  <button
                    style={{
                      border: "none",
                      outline: "none",
                      background: "red",
                      padding: "0.2rem 0.4rem",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "5px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <Link href={"/login"}>
                <IoMdLogIn />
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
