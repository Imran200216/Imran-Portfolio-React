import * as React from "react";
export const ApiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <rect width={32} height={32} rx={16} fill="#fff"/>
    <rect x={10} y={14} width={12} height={4} rx={2} fill="#000"/>
    <rect x={14} y={10} width={4} height={12} rx={2} fill="#000"/>
  </svg>
); 