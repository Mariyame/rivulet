'use client'; 

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Edit } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function ProfileHeader() {
    const { user } = useAuth()
    return(
        <div className="flex flex-col gap-6">
            <Item>
                <ItemContent>
                    <ItemTitle>My Account</ItemTitle>
                    <ItemDescription>Manage your profile, security and preferences all in one place.</ItemDescription>
                </ItemContent>
            </Item>
            <Item variant="outline" size="md" className="w-full bg-primary/10">
                <ItemMedia>
                <Avatar size="lg">
                <AvatarImage src=""></AvatarImage>
                <AvatarFallback className="text-foreground">{user?.avatarFallback?.()}</AvatarFallback>
                </Avatar>
                </ItemMedia>
                <ItemContent>
                <ItemTitle>{user?.name}</ItemTitle>
                <ItemDescription>{user?.email}</ItemDescription>
                <ItemDescription>Joined: {user?.joined.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</ItemDescription>
                </ItemContent>
                <ItemActions>
                <Button variant="outline" render={
                    <a href="/settings/profile">
                    <Edit />
                    <span>Edit Profile</span>
                    </a>
                }>
                </Button>
                </ItemActions>
            </Item>
        </div>
    );
  }