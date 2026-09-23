import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type Props = ComponentProps<typeof Link>;

export default function TextLink({
    className = '',
    children,
    ...props
}: Props) {
    return (
        <Link
            className={cn(
                'text-foreground transition-colors duration-300 ease-out hover:text-primary dark:hover:text-primary/90',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
