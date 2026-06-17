import styles from './Button.module.css';

/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * size:    'sm' | 'md' | 'lg'
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
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
