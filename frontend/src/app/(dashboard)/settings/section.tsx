'use client'


import { 
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { useAuth } from "@/hooks/useAuth"

import { ChevronRightIcon } from "lucide-react"
import {  accountItems } from "@/data/dashboard"

export default function Account() {
  const { user } = useAuth()

  return (
    <div className="p-6 space-y-6">
      
      <Item>
        <ItemContent>
          <ItemTitle>
            My Account
          </ItemTitle>
          <ItemDescription>
            Manage your profile and account settings
          </ItemDescription>
        </ItemContent>
      </Item>

        <p>Account</p>
        <div className="grid grid-cols-2 gap-4">
          {accountItems.account.map((item) => {
            const Icon = item.icon;
            return (
            <Item key={item.title } variant="outline" size="md" className="bg-white" render={
              <a href={item.url}>
                <ItemMedia>
                  <Icon className={item.class}/>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4"/>
                </ItemActions>
              </a>
            }/> 
            )}
           )}
        </div>
        <p>More</p>
        <div className="grid grid-cols-2 gap-4">
          {accountItems.more.map((item) => {
            const Icon = item.icon;
            return (
            <Item key={item.title } variant="outline" size="md" className="bg-white" render={
              <a href={item.url}>
                <ItemMedia>
                  <Icon className={item.class}/>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4"/>
                </ItemActions>
              </a>
            }/>
            )}
          )}
        </div>
    </div>
  )
}
