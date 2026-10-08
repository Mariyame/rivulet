'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { 
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia
} from "@/components/ui/item"
import { 
  Avatar ,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/useAuth"
import { 
    Download, 
    MailIcon, 
    UserRound
} from "lucide-react"
import { ProfileProps } from "@/types/auth"

export function Profile() {
     const { user } = useAuth()
     return(
        <section className="flex flex-col gap-6">
           <ProfileFormEdit user={user}/>
        </section>
     );
}
function ProfileFormEdit({user}: ProfileProps) {
  return (
    <Card>
        <CardContent>
            <form className="space-y-4">
              <Item size="md">
                  <ItemMedia>
                  <Avatar size="lg">
                  <AvatarImage src=""></AvatarImage>
                  <AvatarFallback className="text-foreground">{user?.avatarFallback?.()}</AvatarFallback>
                  </Avatar>
                  </ItemMedia>
                  <ItemContent className="gap-4">
                  <ItemDescription>Upload a new photo or choose from <br/>your device. JPG, PNG or WEBP (max 2MB).</ItemDescription>
                  <ItemActions >
                  <Input type="file"  className=""/>
                      <Download />
                  <Button variant="outline" size="md">
                      <span>Remove</span>
                  </Button>
                  </ItemActions>
                  </ItemContent>
              </Item>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email-spacing">Full Name</Label>
                <InputGroup>
                        <InputGroupInput type="text" placeholder="Enter your full name" value={user?.name}/>
                        <InputGroupAddon>
                        <UserRound />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email-spacing">Email</Label>
                    <InputGroup>
                        <InputGroupInput type="email" placeholder="Enter your email" value={user?.email} />
                        <InputGroupAddon>
                        <MailIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="outline" size="md" render={
                        <a href="/settings">
                        Cancel
                        </a>
                    }></Button>
                    <Button size="md">Save Changes</Button>
                </div>
            </form>
        </CardContent>
    </Card>
   );
  }




