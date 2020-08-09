import React from "react"
import {
  CodeOutlined,
  UserOutlined,
  ToolOutlined,
  FileTextOutlined,
  ContactsOutlined,
} from "@ant-design/icons"

export default [
  {
    title: " About",
    icon: <UserOutlined />,
    link: "/about",
  },
  {
    title: " Skills",
    icon: <ToolOutlined />,
    link: "/#skills",
  },
  {
    title: " Projects",
    icon: <CodeOutlined />,
    link: "/#projects",
  },
  {
    title: "Resume",
    icon: <FileTextOutlined />,
    link: "/page-2",
  },
  {
    title: "Contact",
    icon: <ContactsOutlined />,
    link: "/page-2",
  },
]
