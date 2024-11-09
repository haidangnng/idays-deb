import { SidebarMenu } from "@/lib/types/sidebar-menu";
import { SquareTerminal } from "lucide-react";

const users = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

const menu: SidebarMenu[] = [
  {
    title: "Menu",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "submenu 1",
        url: "#",
      },
      {
        title: "submenu 2",
        url: "#",
      },
      {
        title: "submenu 3",
        url: "#",
      },
    ],
  },
];

export { menu as sideMenu, users as userInfo };
