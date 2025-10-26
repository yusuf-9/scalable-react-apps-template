import { type HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

export default function Card({ 
  variant = "default", 
  className = "", 
  children, 
  ...props 
}: CardProps) {
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

