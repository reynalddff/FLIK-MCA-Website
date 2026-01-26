import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant: ButtonVariant;
  label: string;
  to: string;
};

export default function Button({ variant, label, to }: ButtonProps) {
  const baseClasses = `
    flex flex-[1_0_0]
    h-[60px]
    relative
    rounded-[10px]
    cursor-pointer
    transition-colors
    duration-300
  `;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-[#701bc1]
      hover:bg-[#4A1280]
      text-white
    `,
    secondary: `
      bg-white
      hover:bg-[#E5E7EB]
      text-[#111928]
      border
      border-[#111928]
    `,
  };

  return (
    <Link
      to={to}
      data-name="Button"
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {/* border overlay for secondary (match design lo) */}
      {variant === "secondary" && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[10px] pointer-events-none"
        />
      )}

      <div className="flex flex-row items-center justify-center size-full">
        <div className="flex items-center justify-center px-[20px] py-[16px] size-full">
          <p
            className={`
              leading-[1.5]
              not-italic
              text-[16px]
              whitespace-pre
            `}
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
          >
            {label}
          </p>
        </div>
      </div>
    </Link>
  );
}
