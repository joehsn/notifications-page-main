export default function Notification({
  hasBg,
  src,
  alt,
  children,
  className,
  message,
}) {
  return (
    <a
      href={`${alt.toLowerCase().replace(/ /g, "-")}`}
      className={`notification ${hasBg && "bg-lgb1 dark:bg-gray-900"}`}
    >
      <img src={src} alt={alt} className="notification-image" />
      <div className={`notification-body ${className || ""}`}>{children}</div>
      {message && (
        <div className={`notification-message ${className}`}>{message}</div>
      )}
    </a>
  );
}
