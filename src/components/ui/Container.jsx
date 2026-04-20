import { cn } from '@/lib/cn';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 */
export function Container({ children, className }) {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
