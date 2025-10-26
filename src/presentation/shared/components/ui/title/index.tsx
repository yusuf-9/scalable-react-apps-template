import React, { type HTMLAttributes } from "react";
import styles from "./Title.module.css";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "accent" | "muted";
}

export default function Title({ 
  level = 1, 
  variant = "default", 
  className = "", 
  children, 
  ...props 
}: TitleProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  
  return React.createElement(
    Tag,
    {
      className: `${styles.title} ${styles[variant]} ${className}`,
      ...props
    },
    children
  );
}

