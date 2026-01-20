"use client"

import { UserButton } from "@clerk/nextjs"
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-3 p-2">
          <UserButton
            showName
            appearance={{
              elements: {
                avatarBox: "h-16 w-16",
                userButtonPopoverCard: "shadow-lg",
              },
            }}
          />
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
