"use client";
import React from "react";
import { Button, Layout, Menu, Typography } from "antd";

import Image from "next/image";
import { useRouter } from "next/navigation";
const { Header } = Layout;

const DynamicHeader = () => {
  const router = useRouter();
  return (
    <Header className="bg-[#790909] shadow-lg shadow-black-500/40 flex   ">
      <div className="container mx-auto shadow-lg  ">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl  font-[700]  flex cursor-pointer  ">
            <Image
              className=" rounded-[50%]"
              src={"/images/download.png"}
              width={70}
              height={70}
              alt=""
            />

            <Typography className="text-white text-xl cursor-pointer  font-[700]  flex mt-4">
              Thread App
            </Typography>
          </div>

          <div className=" flex justify-center items-center mt-2 gap-6">
            <Button
              onClick={() => {
                router.push("/sign-in");
              }}
              className="bg-[#fff]  text-[#790909] font-[600]"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                router.push("/sign-up");
              }}
              className="bg-[#fff]  text-[#790909] font-[600]"
            >
              SignUp
            </Button>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DynamicHeader;
