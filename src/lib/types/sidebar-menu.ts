import { LucideIcon } from "lucide-react";

type SidebarMenuChildren = {
  title: string;
  url: string;
};

type SidebarMenu = {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: true;
  items: SidebarMenuChildren[];
};

export type { SidebarMenu };
