import React from "react";

type LogoProps = {
  variant?: "icon" | "withText";
  className?: string;
  textClassName?: string;
};

const Logo: React.FC<LogoProps> = ({
  variant = "icon",
  className = "",
  textClassName = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/logo.png"
        alt="Logo"
        className={variant === "icon" ? "w-10 h-10" : "w-8 h-8"}
      />
      {variant === "withText" && (
        <span
          className={`ml-2 font-semibold text-text text-lg font-nunito ${textClassName}`}
        >
          Gelişiyor
        </span>
      )}
    </div>
  );
};

export default Logo;
