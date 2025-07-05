import * as React from "react";
export const AdkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <rect width={32} height={32} rx={16} fill="#fff"/>
    <path d="M8 12v8h2v-3h2c1.5 0 2.5-1 2.5-2.5S13.5 12 12 12H8zm2 2h2c.5 0 1 .5 1 1s-.5 1-1 1h-2v-2z" fill="#000"/>
    <path d="M16 12v8h2v-3h2c1.5 0 2.5-1 2.5-2.5S21.5 12 20 12h-4zm2 2h2c.5 0 1 .5 1 1s-.5 1-1 1h-2v-2z" fill="#000"/>
    <path d="M24 12v8h-2v-8h2z" fill="#000"/>
  </svg>
); 