"use client";
import { Breadcrumb, Input, Layout, Menu, Typography, theme } from "antd";
import { SearchOutlined, QqCircleFilled } from "@ant-design/icons";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import Image from "next/image";
import { SearchProps } from "antd/es/input";
import Contents from "../component/content";

const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const Page = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="!h-full">
      <Sider
        className="!bg-[#790909] border-[1px] border-[#000]"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="!bg-[#790909] "
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout className="h-[880px]">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between flex-row">
            <div>
              <Input
                className="ml-[20px] mt-[15px] flex  flex-row-reverse rounded-[20px] font-poppins text-[#8591A3] "
                style={{ width: 200 }}
                placeholder="Search"
                prefix={<SearchOutlined className=" flex  flex-row-reverse" />}
              />
            </div>
            <div className="flex mr-[10px]">
              <Typography className="text-black text-xl cursor-pointer  font-[700]  flex mt-4">
                Sarib Ghouri
              </Typography>

              <QqCircleFilled
                style={{
                  fontSize: "40px",
                  color: "black",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              />
            </div>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Contents />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Page;
