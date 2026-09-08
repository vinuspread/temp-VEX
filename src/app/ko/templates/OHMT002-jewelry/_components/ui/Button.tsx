import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type Variant = 'primary' | 'white' | 'ghost' | 'dark' | 'bordered';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size, className, href, children, ...rest }, ref) => {
    const variantMap: Record<Variant, string> = {
      primary: 'flex-1 py-4 bg-[var(--color-primary)] text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-[var(--color-primary-hover)] transition-all',
      white: 'px-10 py-4 bg-white text-neutral-900 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[var(--color-primary)] hover:text-white transition-all',
      ghost: 'px-6 py-4 border border-neutral-300 text-neutral-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all',
      dark: 'w-full py-8 bg-neutral-900 text-white text-xs font-bold uppercase tracking-[0.5em] hover:bg-[var(--color-primary)] transition-all',
      bordered: 'px-12 py-5 border border-[var(--color-primary)] text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300'
    };

    const sizeMap: Record<Size, string> = {
      sm: 'px-3 py-2',
      md: 'px-4 py-3',
      lg: 'px-5 py-4'
    };

    const sizeClass = size ? sizeMap[size] : '';
    const baseClasses = twMerge(
      variantMap[variant],
      sizeClass,
      className
    );

    if (href) {
      const { type: buttonType, ...anchorProps } = rest;
      void buttonType;
      const linkProps = anchorProps as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={baseClasses} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={baseClasses} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
