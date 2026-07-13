"use client"

import React from "react"

interface LogoACSProps {
  variant?: "default" | "inverse"
  className?: string
  size?: number
}

export default function LogoACS({
  variant = "default",
  className = "",
  size = 200,
}: LogoACSProps) {
  const isInverse = variant === "inverse"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Addbill Construction Solutions"
    >
      <circle
        cx="100"
        cy="100"
        r="84"
        fill={isInverse ? "#0F2D52" : "none"}
        stroke={isInverse ? "#FFFFFF" : "#0F2D52"}
        strokeWidth="7"
      />
      <g
        stroke={isInverse ? "#FFFFFF" : "#4FA9FF"}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 138L64 62L68 62L68 56L72 56L72 62L90 138" />
        <path d="M58 98L78 98" />
        <path d="M96 60C78 60 78 138 96 138" />
        <path d="M108 60C130 60 130 76 108 100C86 112 86 138 108 138" />
      </g>
    </svg>
  )
}
