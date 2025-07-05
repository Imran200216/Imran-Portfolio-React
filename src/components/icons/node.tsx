import * as React from "react";
export const NodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <polygon points="16,4 28,11.5 28,20.5 16,28 4,20.5 4,11.5" fill="#fff" stroke="#000" strokeWidth={2}/>
    <text x="8" y="22" fontSize="12" fontWeight="bold" fill="#000">Node</text>
  </svg>
); 