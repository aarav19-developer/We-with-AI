import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * variant: 'primary' | 'secondary' | 'ghost' | 'outline'
 * size:    'sm' | 'md' | 'lg'
 *
 * When href is supplied, renders a React Router <Link> for internal routes
 * (starts with /) or a plain <a> for external URLs (http/mailto/tel).
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('mailto') ||
      href.startsWith('tel');

    if (isExternal) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          {...rest}
        >
          {children}
        </a>
      );
    }

    /* Internal route — use React Router Link (no page reload) */
    return (
      <Link to={href} className={cls} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
