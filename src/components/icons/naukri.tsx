import * as React from "react";
export const NaukriIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <circle cx={16} cy={16} r={16} fill="#000"/>
    <ellipse cx={16} cy={16} rx={10} ry={5} fill="#fff"/>
    <text x="8" y="21" fontSize="10" fontWeight="bold" fill="#000">naukri</text>
  </svg>
); 