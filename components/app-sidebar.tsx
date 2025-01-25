
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import { data } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { BadgeCheckIcon, BellIcon, ChevronUp, CreditCardIcon, LogOutIcon, SparkleIcon } from "lucide-react"
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu"


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"}
              className="data-[state-open]:bg-sidebar-accent data-[state-open]:text-sidebar-accent-foreground"
            >
              <Link href={'/'}
                className="flex aspect-square size-8 items-center justify-center"
              >
                <Image src={data.app.logo} alt={data.app.name} width={32} height={32} />
              </Link>
              <div className="grid">
                <h1 className="truncate font-semibold">{data.app.name}</h1>
                <p className="truncate text-xs">{data.app.version}</p>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {data.navMain.map((item, index) => (
                <Collapsible key={index} asChild defaultOpen={item.isActive}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="text-muted-foreground" />
                        {item.title}
                      </SidebarMenuButton>

                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem, subIndex) =>
                          <SidebarMenuSubItem key={subIndex}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}
                                className="hover:text-blue-500 hover:border-r-4 border-blue-300 transition-colors flex items-center gap-x-4"
                              >
                                <subItem.icon />
                                <span className="font-bold">{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size={"lg"}
                  className="data-[state-open]:bg-sidebar-accent data-[state-open]:text-sidebar-accent-foreground"
                >

                  <Avatar>
                    <AvatarImage src={data.user.avatar}
                      alt={data.user.name}
                      className="object-cover rounded-full"
                    />
                    <AvatarFallback className="rounded-full">{
                      data.user.name.charAt(0)
                    }</AvatarFallback>
                  </Avatar>

                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate text-xs">{data.user.name}</span>
                    <span className="truncate">{data.user.email}</span>
                  </div>
                  <ChevronUp className="ml-auto size-4" />

                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="end"
                sideOffset={4}
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar>
                      <AvatarImage src={data.user.avatar}
                        alt={data.user.name}
                        className="object-cover rounded-full"
                      />
                      <AvatarFallback className="rounded-full">{
                        data.user.name.charAt(0)
                      }</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {data.user.email}
                      </span>
                    </div>
                  </div>





                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <SparkleIcon/>
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheckIcon/>
                   Account
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <CreditCardIcon/>
                    Billing
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BellIcon/>
                   Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <LogOutIcon/>
                   Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>

              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
