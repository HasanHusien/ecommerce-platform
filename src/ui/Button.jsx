import clsx from "clsx";
import { Link } from "react-router-dom";

function Button({
  children,
  disabled,
  to,
  type,
  onClick,
}) {
  const base = clsx(
    "rounded-full bg-yellow-400 uppercase tracking-wide text-sm",
    "transition-colors duration-200 hover:bg-yellow-300 focus:outline-none ",
  );
  const styles = {
    primary:
      base +
      " px-4 py-3 font-semibold ",
    small: base + " px-3 py-2 font-xsm",
    round:
      base +
      " px-1.5 py-1 md:py-1 md:px-3 ",
    secondary: clsx(
      "rounded-full uppercase tracking-wide text-sm px-3 py-2 font-semibold border-2 border-stone-200 ml-3",
      "transition-colors duration-200 hover:bg-stone-300 focus:text-stone-400  focus:outline-none focus:ring",
    ),
  };

  if (to)
    return (
      <Link
        className={styles[type]}
        to={to}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );

  return (
    <button
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
