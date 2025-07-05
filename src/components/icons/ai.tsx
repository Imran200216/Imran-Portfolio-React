import * as React from "react";
export const AiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <rect width={32} height={32} rx={16} fill="#fff"/>
    <rect x={10} y={10} width={12} height={12} rx={6} fill="#000"/>
    <circle cx={16} cy={16} r={4} fill="#fff"/>
    <rect x={15} y={4} width={2} height={4} fill="#000"/>
    <rect x={15} y={24} width={2} height={4} fill="#000"/>
    <rect x={4} y={15} width={4} height={2} fill="#000"/>
    <rect x={24} y={15} width={4} height={2} fill="#000"/>
  </svg>
); 