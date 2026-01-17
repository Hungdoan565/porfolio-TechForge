"use client";

import React from "react";

interface TechIconProps {
  className?: string;
  size?: number;
}

// React - Official atom logo
export const ReactIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <circle cx="16" cy="16" fill="#61DAFB" r="2.5" />
    <ellipse
      cx="16"
      cy="16"
      fill="none"
      rx="11"
      ry="4.2"
      stroke="#61DAFB"
      strokeWidth="1.2"
    />
    <ellipse
      cx="16"
      cy="16"
      fill="none"
      rx="11"
      ry="4.2"
      stroke="#61DAFB"
      strokeWidth="1.2"
      transform="rotate(60 16 16)"
    />
    <ellipse
      cx="16"
      cy="16"
      fill="none"
      rx="11"
      ry="4.2"
      stroke="#61DAFB"
      strokeWidth="1.2"
      transform="rotate(120 16 16)"
    />
  </svg>
);

// Vue.js - Official V shape logo
export const VueIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883" />
    <path d="M7.5 4L16 18.5L24.5 4H19.5L16 10.5L12.5 4H7.5Z" fill="#35495E" />
  </svg>
);

// TypeScript - Official TS badge
export const TypeScriptIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <rect fill="#3178C6" height="28" rx="1.5" width="28" x="2" y="2" />
    <path
      d="M14.5 17H11.5V25H9.5V17H6.5V15.5H14.5V17Z"
      fill="white"
    />
    <path
      d="M16 25V15.5H19.8C20.6 15.5 21.3 15.7 21.8 16C22.3 16.3 22.7 16.7 23 17.2C23.2 17.7 23.3 18.3 23.3 19C23.3 19.7 23.2 20.3 22.9 20.8C22.7 21.3 22.3 21.7 21.7 22C21.2 22.3 20.5 22.4 19.7 22.4H17.5V25H16ZM17.5 21.2H19.6C20.2 21.2 20.6 21 20.9 20.7C21.2 20.4 21.3 19.8 21.3 19C21.3 18.2 21.2 17.6 20.9 17.3C20.6 17 20.2 16.8 19.6 16.8H17.5V21.2Z"
      fill="white"
    />
  </svg>
);

// Tailwind CSS - Official wind waves
export const TailwindIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path
      d="M9 13.7C9.9 10.2 12.1 8.5 16 8.5C21.8 8.5 22.6 12.8 25.5 13.7C27.4 14.3 29.1 13.5 30.5 11.8C29.6 15.3 27.4 17 23.5 17C17.7 17 16.9 12.7 14 11.8C12.1 11.2 10.4 12 9 13.7ZM1 21.2C1.9 17.7 4.1 16 8 16C13.8 16 14.6 20.3 17.5 21.2C19.4 21.8 21.1 21 22.5 19.3C21.6 22.8 19.4 24.5 15.5 24.5C9.7 24.5 8.9 20.2 6 19.3C4.1 18.7 2.4 19.5 1 21.2Z"
      fill="#38BDF8"
    />
  </svg>
);

// Node.js - Official hexagon logo
export const NodeIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path
      d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
      fill="#339933"
    />
    <path
      d="M16 2V30L28 23V9L16 2Z"
      fill="#66CC33"
    />
    <path
      d="M16 11L12 13.3V17.8L16 20.1L20 17.8V13.3L16 11Z"
      fill="white"
    />
  </svg>
);

// Python - Official two snakes
export const PythonIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path
      d="M15.885 2.5C12.089 2.5 10.5 4.268 10.5 6.8V9.5H16.5V10.5H7.5C5.6 10.5 4 12.1 4 14.8C4 17.5 5.5 19.5 7.5 19.5H10V16C10 14 11.5 12.5 13.5 12.5H18.5C20.2 12.5 21.5 11.2 21.5 9.5V6.8C21.5 4.3 19.7 2.5 15.885 2.5ZM13 4.5C13.6 4.5 14 4.9 14 5.5C14 6.1 13.6 6.5 13 6.5C12.4 6.5 12 6.1 12 5.5C12 4.9 12.4 4.5 13 4.5Z"
      fill="#3776AB"
    />
    <path
      d="M16.115 29.5C19.911 29.5 21.5 27.732 21.5 25.2V22.5H15.5V21.5H24.5C26.4 21.5 28 19.9 28 17.2C28 14.5 26.5 12.5 24.5 12.5H22V16C22 18 20.5 19.5 18.5 19.5H13.5C11.8 19.5 10.5 20.8 10.5 22.5V25.2C10.5 27.7 12.3 29.5 16.115 29.5ZM19 27.5C18.4 27.5 18 27.1 18 26.5C18 25.9 18.4 25.5 19 25.5C19.6 25.5 20 25.9 20 26.5C20 27.1 19.6 27.5 19 27.5Z"
      fill="#FFD43B"
    />
  </svg>
);

// PostgreSQL - Official elephant
export const PostgreSQLIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <g>
      <path
        d="M24.5 11C24.5 7 21.8 3.5 16.5 3C11 2.5 7.5 5.5 7 10C6.8 11.5 7 13 7.5 14.5C6.8 15 6.5 15.8 6.5 16.8C6.5 18.5 7.5 20 9 20.8C9 21.5 9.2 24.5 9.5 26.5C9.6 27.2 10.2 27.8 10.8 27.8C11.5 27.8 12 27.2 12 26.5L12.3 23.5C12.8 24.5 13.2 26 13.5 27C13.6 27.6 14.2 28 14.8 28C15.5 28 16 27.5 16 26.8C16 25.8 15.8 24.5 15.5 23C16.8 23.3 18.2 23.2 19.5 22.8C19.8 24.5 20 26.2 20.2 27C20.3 27.6 20.8 28 21.5 28C22.2 28 22.8 27.5 22.8 26.8L23.2 23.8C23.5 24.5 23.8 26 24 27C24.1 27.6 24.7 28 25.3 28C26 28 26.5 27.5 26.5 26.8L27 21.5C28.5 20.5 29.5 19 29.5 17C29.5 15.8 29 14.8 28.2 14C28.8 12.5 29 11 28.5 9.5C27.8 7 25.8 5 23 4.5C22.8 6 23 8 24.5 11Z"
        fill="#336791"
      />
      <ellipse cx="12.5" cy="14" fill="white" rx="1.8" ry="2.5" />
      <ellipse cx="20.5" cy="14" fill="white" rx="1.8" ry="2.5" />
      <ellipse cx="12.5" cy="14.5" fill="#336791" rx="0.8" ry="1.2" />
      <ellipse cx="20.5" cy="14.5" fill="#336791" rx="0.8" ry="1.2" />
    </g>
  </svg>
);

// MongoDB - Official leaf
export const MongoDBIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path
      d="M16 2C16 2 10 6 10 14C10 20 13 26 16 30C19 26 22 20 22 14C22 6 16 2 16 2Z"
      fill="#00ED64"
    />
    <path
      d="M16 2C16 2 22 6 22 14C22 20 19 26 16 30V2Z"
      fill="#00ED64"
    />
    <path
      d="M16 2C16 2 13 6 13 14C13 20 14.5 26 16 30V2Z"
      fill="#12924F"
    />
    <rect x="15" y="24" width="2" height="6" rx="1" fill="#B8C4C2" />
  </svg>
);

// AWS - Official logo with smile
export const AWSIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <g>
      <polygon
        points="10.5,15.5 11.2,17.8 11.9,15.5 12.7,15.5 11.6,18.8 10.8,18.8 10.1,16.5 9.4,18.8 8.6,18.8 7.5,15.5"
        fill="#252F3E"
      />
      <path
        d="M15.2 18.8L14.8 17.5H13.2L12.8 18.8H12L13.6 15.5H14.4L16 18.8H15.2ZM14 15.5L13.4 17.1H14.6L14 15.5Z"
        fill="#252F3E"
      />
      <path
        d="M17.8 18.8C17.3 18.8 16.8 18.7 16.5 18.4L16.7 17.9C17 18.1 17.4 18.3 17.8 18.3C18.3 18.3 18.5 18.1 18.5 17.8C18.5 17.3 16.3 17.5 16.3 16.2C16.3 15.6 16.8 15.4 17.5 15.4C17.9 15.4 18.3 15.5 18.6 15.7L18.4 16.2C18.1 16 17.8 15.9 17.5 15.9C17.1 15.9 16.9 16 16.9 16.3C16.9 16.8 19.1 16.6 19.1 17.9C19.1 18.5 18.6 18.8 17.8 18.8Z"
        fill="#252F3E"
      />
      <path
        d="M6 22.5C9.5 24.8 14.5 26 19.5 25.5C22 25.2 24 24.5 25.5 23.5"
        stroke="#FF9900"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M25.8 22.2C26.3 23 26.7 23.8 26.8 24.5C26.8 24.8 26.5 25 26.2 24.9C25.5 24.6 24.8 24.2 24.2 23.7"
        fill="#FF9900"
      />
    </g>
  </svg>
);

// Google Cloud - Official multicolor logo
export const GCPIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path
      d="M20.5 9.5L22.2 8L23.5 7C21.5 4.5 18.5 3 15.5 3C11 3 7.3 5.8 5.8 9.8L8 11.5L11 11C12 9.2 13.8 8 16 8C18 8 19.5 8.5 20.5 9.5Z"
      fill="#EA4335"
    />
    <path
      d="M26.5 13C26 11.5 25.3 10.2 24.3 9L20.5 12.5C21.5 13.5 22 14.8 22 16.3L26.5 13Z"
      fill="#4285F4"
    />
    <path
      d="M5.8 9.8C5.3 11 5 12.5 5 14C5 15.5 5.3 17 5.8 18.2L10.3 14.7C10.1 14.3 10 13.7 10 13C10 12.3 10.2 11.7 10.5 11.2L5.8 9.8Z"
      fill="#FBBC05"
    />
    <path
      d="M16 22C13.8 22 11.8 21 10.5 19.5L6 22.5C8 25.5 11.8 27.5 16 27.5C18.8 27.5 21.3 26.5 23.3 25L20 21.5C19 21.8 17.5 22 16 22Z"
      fill="#34A853"
    />
    <path
      d="M26.5 13L22 16.3C22 17 21.8 17.8 21.5 18.5L26 21.5C26.8 19.8 27.3 17.8 27.3 15.5C27.3 14.7 27 13.8 26.5 13Z"
      fill="#4285F4"
    />
    <path
      d="M20 21.5L23.3 25C24 24.5 24.8 23.8 25.5 23L22 19.5C21.5 20.2 20.8 20.8 20 21.5Z"
      fill="#34A853"
    />
  </svg>
);

// Azure - Official logo
export const AzureIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path
      d="M13.5 4L5 26H11L13 21H20L14.5 26H27L17 4H13.5Z"
      fill="#0078D4"
    />
    <path
      d="M17 4H13.5L18 16L20 21H13L11 26H14.5L27 26L17 4Z"
      fill="#50E6FF"
      opacity="0.8"
    />
  </svg>
);

// Docker - Official whale with containers
export const DockerIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <g>
      <path
        d="M28 15.5C28 15.5 27.5 15 26.5 15C26.2 15 25.8 15 25.5 15.1C25.2 14.2 24.5 13.5 23.5 13.2C23.3 13.2 23.2 13.3 23.2 13.5C23.2 14 23.5 14.5 24 14.8C24.2 15 24.5 15.1 24.8 15.2C24.8 15.3 24.8 15.4 24.9 15.5C25.3 15.4 25.7 15.4 26 15.4C26.8 15.4 27.3 15.6 27.5 15.8C27.6 16 27.8 16.3 27.7 17C27.5 17.8 27 18.3 26.2 18.7C25.4 19 24.5 19 23.7 18.8C22.8 18.5 22.2 18 21.6 17.2C21 16.4 20.7 15.5 20.7 14.5C20.7 13.5 21 12.6 21.6 11.9C22.2 11.2 23.1 10.8 24.1 10.8C24.7 10.8 25.2 10.9 25.6 11.1C25.7 11.2 25.9 11.1 25.9 11C26 10.9 25.9 10.7 25.8 10.6C25.3 10.3 24.7 10.2 24.1 10.2C22.9 10.2 21.8 10.7 21 11.5C20.3 12.3 19.9 13.4 19.9 14.5C19.9 15.7 20.3 16.8 21 17.7C21.8 18.7 22.8 19.3 23.9 19.7C24.5 19.9 25.2 20 25.8 20C26.8 20 27.8 19.7 28.5 19.2C29.2 18.6 29.7 17.8 29.8 16.9C30 16.3 29.8 15.8 29.5 15.5C29.2 15.3 28.7 15.5 28 15.5Z"
        fill="#2496ED"
      />
      <rect x="5" y="14" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="8" y="14" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="11" y="14" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="14" y="14" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="17" y="14" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="8" y="11" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="11" y="11" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="14" y="11" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="11" y="8" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="14" y="8" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
      <rect x="14" y="5" width="2.5" height="2.5" rx="0.3" fill="#2496ED" />
    </g>
  </svg>
);

// Next.js - Official N logo
export const NextJsIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <circle cx="16" cy="16" r="14" fill="black" className="dark:fill-white" />
    <path
      d="M12 10V22L22 10"
      stroke="url(#nextjs-grad-1)"
      strokeWidth="2"
      strokeLinecap="round"
      className="dark:stroke-black"
    />
    <path
      d="M22 10V22"
      stroke="url(#nextjs-grad-2)"
      strokeWidth="2"
      strokeLinecap="round"
      className="dark:stroke-black"
    />
    <defs>
      <linearGradient id="nextjs-grad-1" x1="12" y1="10" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="nextjs-grad-2" x1="22" y1="10" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Express - Simple E
export const ExpressIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <rect fill="#353535" height="24" rx="3" width="24" x="4" y="4" className="dark:fill-white" />
    <text fill="white" fontSize="16" fontWeight="bold" x="10" y="22" className="dark:fill-black">
      E
    </text>
  </svg>
);

// FastAPI - Lightning bolt
export const FastAPIIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path d="M17 2L5 18H16L14 30L27 14H16L17 2Z" fill="#009688" />
    <path d="M17 2L5 18H12L10 26L20 14H16L17 2Z" fill="#009688" opacity="0.7" />
  </svg>
);

// Nuxt.js - N shape
export const NuxtIcon = ({ className, size = 24 }: TechIconProps) => (
  <svg
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
  >
    <path d="M18 5L28 25H22L18 17L14 25H8L18 5Z" fill="#00DC82" />
    <path d="M6 25L13 13L20 25H14L13 23L12 25H6Z" fill="#00DC82" opacity="0.7" />
  </svg>
);

// Export all icons as a map
export const TechIcons = {
  react: ReactIcon,
  vue: VueIcon,
  typescript: TypeScriptIcon,
  tailwind: TailwindIcon,
  node: NodeIcon,
  python: PythonIcon,
  postgresql: PostgreSQLIcon,
  mongodb: MongoDBIcon,
  aws: AWSIcon,
  gcp: GCPIcon,
  azure: AzureIcon,
  docker: DockerIcon,
  nextjs: NextJsIcon,
  express: ExpressIcon,
  fastapi: FastAPIIcon,
  nuxt: NuxtIcon,
};

export type TechIconName = keyof typeof TechIcons;
