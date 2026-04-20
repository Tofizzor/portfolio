import { cn } from '@/lib/cn';

/**
 * @param {object} props
 * @param {string} [props.className]
 */
export function AboutBody({ className }) {
  return (
    <div className={cn('max-w-3xl space-y-4 text-muted', className)}>
      <p>
        I aim for clear scope, fast feedback loops, and code that the next person can pick up—including future
        me. That means tests where they buy confidence, docs where they save time, and pragmatic trade-offs written
        down when deadlines bite.
      </p>
      <p>
        This site is static on purpose: fast, cheap to host, and easy to iterate. Pairing with modern tooling is
        part of how I ship; ownership of decisions and outcomes stays with me.
      </p>
    </div>
  );
}
