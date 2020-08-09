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
    link: "/about",
  },
  {
    title: " Projects",
    icon: <CodeOutlined />,
    link: "/page-2",
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
