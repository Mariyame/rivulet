'use client'

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { AppSidebarBreadcrumbs } from "@/components/app-sidebar-breadcrumbs"
import { getBreadcrumbItems } from "@/lib/utils"


export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);
  const { isLoading, isAuthenticated, isVerified } = useAuth();

  useEffect(() => {
    if(!isVerified) {
      router.replace("/verify-email")
      
    }

    if(!isLoading && !isAuthenticated) {
      router.replace("/login");
    }

  },[isLoading, isAuthenticated, isVerified, router]);

  if (isLoading) {
    return (
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                />
               <AppSidebarBreadcrumbs items={items}/>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <Card className="w-full max-w-xs">
                <CardHeader>
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="aspect-video w-full" />
                </CardContent>
              </Card>
            </div>
          </SidebarInset>
        </SidebarProvider>
    );
  }

  if (!isAuthenticated) {
     return;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-vertical:h-4 data-vertical:self-auto"
            />
            <AppSidebarBreadcrumbs items={items}/>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )

}