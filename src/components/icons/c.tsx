import * as React from "react";
export const CIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <rect width={32} height={32} rx={16} fill="#fff"/>
    <polygon points="16,4 28,11.5 28,20.5 16,28 4,20.5 4,11.5" fill="#000"/>
    <path d="M21 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0" fill="#fff"/>
    <path d="M19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="#000"/>
  </svg>
); 