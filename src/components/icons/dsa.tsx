import * as React from "react";
export const DsaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <rect width={32} height={32} rx={16} fill="#fff"/>
    <circle cx={16} cy={10} r={2} fill="#000"/>
    <circle cx={10} cy={22} r={2} fill="#000"/>
    <circle cx={22} cy={22} r={2} fill="#000"/>
    <path d="M16 12v6M16 12l-6 8M16 12l6 8" stroke="#000" strokeWidth={2}/>
  </svg>
); 