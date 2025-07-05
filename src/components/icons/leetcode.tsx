// components/icons/leetcode.tsx

import * as React from "react";

export const LeetcodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <rect width={32} height={32} rx={16} fill="#fff"/>
    <path d="M11 24c-2-2 0-5 2-7l7-7" stroke="#000" strokeWidth={2} strokeLinecap="round"/>
    <path d="M21 8l-8 8 8 8" stroke="#000" strokeWidth={2} strokeLinecap="round"/>
  </svg>
);
