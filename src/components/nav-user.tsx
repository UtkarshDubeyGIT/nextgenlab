"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    
  }
}) {
  const { isMobile } = useSidebar()

  return (
   <div>
    <div>
      <Avatar>
        {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
        <div> {user.name}  </div>
        <div> {user.email}  </div>
        <button className="bg-red-500 text-white p-2 rounded-md">Logout</button>
      </Avatar>
    </div>
   </div>
  )
}
