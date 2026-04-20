import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const variants = {
  primary: 'bg-accent text-accent-foreground hover:opacity-90',
  secondary:
    'border border-border bg-card text-foreground hover:bg-background',
  ghost: 'text-foreground hover:bg-card',
};

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {'primary'|'secondary'|'ghost'} [props.variant]
 * @param {string} [props.href] External link
 * @param {string} [props.to] React Router path
 * @param {boolean} [props.external]
 */
export function Button({
  children,
  className,
  variant = 'primary',
  href,
  to,
  external,
  ...rest
}) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
