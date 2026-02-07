'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-600 text-white shadow-apple hover:bg-primary-700 active:scale-97',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-97',
        outline:
          'border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-97',
        ghost: 'hover:bg-accent hover:text-accent-foreground active:scale-97',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 min-h-[44px] px-5 py-2.5',
        sm: 'h-9 min-h-[44px] rounded-lg px-4 text-sm',
        lg: 'h-12 min-h-[44px] px-6 text-lg',
        icon: 'h-10 w-10 min-h-[44px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as any}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
