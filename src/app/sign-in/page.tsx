"use client";

import React, { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Button, Checkbox, Form, Input, Modal } from "antd";

const Page = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    const { email, password } = values;
    router.push("/dashboard");
    setLoading(true);

    form
      .validateFields()

      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
        setLoading(false);
      });
  };

  return (
    <div className="mx-auto max-w-[460px] mt-[50px] pl-[10px] pr-[10px]  items-center flex flex-col leading-[70px]">
      <h1 className="font-[600] text-[30px] font-poppins text-[#000] mb-[-30px]">
        Sign-in
      </h1>
      <p className="font-[500] text-[14px] font-poppins text-[#8591A3]  mb-[45px]"></p>

      <Form form={form} onFinish={onFinish} className="max-w-[450px] w-full">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input
            autoComplete="email"
            placeholder="Email"
            className="font-[500] text-[14px]  rounded-[10px] font-poppins text-[#8591A3] h-[60px] max-w-[450px] mb-[20px] "
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            autoComplete="current-password"
            placeholder="Password"
            className="h-[60px] max-w-[450px] rounded-[10px]"
            maxLength={16}
          />
        </Form.Item>

        <div className="flex justify-between">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="mr-[5px] cursor-pointer items-center flex text-[#b82f2f]   font-poppins text-[16px] font-[500]">
              Remember me
            </Checkbox>
          </Form.Item>
          <p
            onClick={() => {
              router.push("/forgot-password");
            }}
            className="text-[#b82f2f]  font-poppins text-[16px] font-[500] cursor-pointer"
          >
            Forgot password?
          </p>
        </div>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={loading}
            className="rounded-[10px] bg-[#790909]  max-w-[450px] w-full h-[50px]  login text-white text-[18px] font-[500]  font-poppins"
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>

      <Button
        onClick={() => {
          router.push("/signup");
        }}
        className="rounded-[10px] bg-[#790909]  max-w-[450px] w-full h-[50px]  login text-white text-[18px] font-[500]  font-poppins"
      >
        Sign up
      </Button>
    </div>
  );
};
export default Page;
