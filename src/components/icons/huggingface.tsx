// components/icons/huggingface.tsx

import * as React from "react";

export const HuggingFaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <circle cx={16} cy={16} r={16} fill="#fff" stroke="#000" strokeWidth={2}/>
    <ellipse cx={16} cy={20} rx={7} ry={4} fill="none" stroke="#000" strokeWidth={2}/>
    <ellipse cx={12} cy={14} rx={1.2} ry={2} fill="#000"/>
    <ellipse cx={20} cy={14} rx={1.2} ry={2} fill="#000"/>
    <path d="M13 19c1 1 5 1 6 0" stroke="#000" strokeWidth={1.5} strokeLinecap="round"/>
  </svg>
);
