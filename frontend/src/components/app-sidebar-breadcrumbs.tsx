import { BreadcrumbsItem } from '@/types/breadcrumbs';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from './ui/breadcrumb';

export function AppSidebarBreadcrumbs({ items }: { items: BreadcrumbsItem[]}) {
    return (
        <Breadcrumb>
        <BreadcrumbList>
        {items.map((item, index) => (
            <BreadcrumbItem key={index}>
                {item.href ? (
                    <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                ) : (
                    <span>{item.title}</span>
                )}
            </BreadcrumbItem>
        ))}
        {items.length > 1 && <BreadcrumbSeparator />}
        </BreadcrumbList>
        </Breadcrumb>
    )
}

export function AppSidebarBreadcrumbsSkeleton() {
    return (
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
                <span className="w-24 h-4 bg-gray-300 rounded animate-pulse"></span>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <span className="w-24 h-4 bg-gray-300 rounded animate-pulse"></span>
            </BreadcrumbItem>   
        </BreadcrumbList>
        </Breadcrumb>
    )
}

