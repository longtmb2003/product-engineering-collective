import { cn } from "@/lib/utils";
import styles from "./Action.module.css";

/*
 * Every call to action on the homepage is a link, so this renders an <a>.
 * A <button> variant arrives with the contact form.
 *
 * Minimum height 48px — above the 44px touch target floor.
 */
export function Action({
  href,
  variant = "primary",
  external = false,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(styles.action, styles[variant])}
    >
      {children}
      {external ? <span className="srOnly">(opens in a new tab)</span> : null}
    </a>
  );
}
