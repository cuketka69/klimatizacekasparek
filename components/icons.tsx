import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LeafIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 32 32"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      <path d="M29.555 2.843c-0.072-0.276-0.291-0.486-0.565-0.546l-0.005-0.001c-0.046-0.010-0.099-0.016-0.153-0.016-0.238 0-0.451 0.109-0.59 0.281l-0.001 0.001c-1.698 2.005-3.923 3.515-6.462 4.32l-0.099 0.027c-1.693 0.552-3.662 0.946-5.697 1.103l-0.088 0.005c-2.231 0.083-4.325 0.58-6.236 1.417l0.11-0.043c-3.3 1.788-5.502 5.225-5.502 9.176 0 0.062 0.001 0.124 0.002 0.186l-0-0.009c0.009 0.303 0.030 0.602 0.064 0.9 0.154 1.198 0.484 2.285 0.966 3.285l-0.028-0.064c-1.539 1.982-2.868 4.245-3.886 6.67l-0.073 0.197c-0.038 0.087-0.060 0.188-0.060 0.295 0 0.414 0.336 0.75 0.75 0.75 0.308 0 0.572-0.185 0.688-0.45l0.002-0.005c0.964-2.307 2.092-4.294 3.425-6.123l-0.059 0.085c1.137 1.755 2.709 3.14 4.567 4.021l0.067 0.029c1.421 0.649 3.083 1.028 4.833 1.028 0.027 0 0.053-0 0.079-0l-0.004 0c1.889-0.009 3.686-0.392 5.324-1.081l-0.092 0.034c5.262-2.385 9.002-7.306 9.678-13.16l0.007-0.077c0.147-1.13 0.231-2.436 0.231-3.762 0-3.018-0.436-5.935-1.247-8.69l0.055 0.217zM29.031 14.855c-0.604 5.397-3.991 9.883-8.674 12.030l-0.094 0.038c-1.334 0.593-2.891 0.939-4.528 0.939-1.599 0-3.121-0.329-4.501-0.924l0.074 0.028c-1.81-0.853-3.27-2.198-4.242-3.864l-0.024-0.045c3.317-3.812 7.63-5.711 13.801-6.312 0.38-0.040 0.674-0.358 0.674-0.746 0-0.414-0.336-0.75-0.75-0.75-0.024 0-0.048 0.001-0.072 0.003l0.003-0c-5.639 0.209-10.681 2.598-14.343 6.343l-0.004 0.004c-0.244-0.617-0.431-1.336-0.526-2.083l-0.005-0.045c-0.030-0.256-0.048-0.512-0.055-0.768-0.001-0.049-0.002-0.108-0.002-0.166 0-3.358 1.869-6.279 4.623-7.78l0.046-0.023c1.65-0.708 3.565-1.152 5.575-1.225l0.028-0.001c2.247-0.173 4.33-0.592 6.313-1.232l-0.192 0.054c2.448-0.8 4.547-2.082 6.279-3.744l-0.006 0.005c0.523 2.020 0.823 4.338 0.823 6.727 0 1.247-0.082 2.475-0.24 3.678l0.015-0.142z" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.6 4.6L4 16l3 3 5.1-5.1a4 4 0 0 0 4.6-5.6l-2.4 2.4-2-2 2.4-2.4Z" />
    </svg>
  );
}

export function WindIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10.5a2.5 2.5 0 1 0-2.1-3.9" />
      <path d="M3 12h14.5a2.5 2.5 0 1 1-2.1 3.9" />
      <path d="M3 16h7.5a2.5 2.5 0 1 1-2.1 3.9" />
    </svg>
  );
}

export function ThermoUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 14.76V4a2 2 0 1 0-4 0v10.76a4 4 0 1 0 4 0Z" />
      <path d="m17 5 3-2M17 9l3-2" />
    </svg>
  );
}

export function DistributeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v6" />
      <path d="M6 21v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <circle cx="12" cy="12" r="2.3" />
    </svg>
  );
}

export function HouseHeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12 12 4l9 8" />
      <path d="M5 12v8h14v-8" />
      <path d="M9 17.5c1-1 1-2 0-3s-1-2 0-3" />
      <path d="M12 17.5c1-1 1-2 0-3s-1-2 0-3" />
      <path d="M15 17.5c1-1 1-2 0-3s-1-2 0-3" />
    </svg>
  );
}

export function GaugeDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M12 3v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4M3 13h2M19 13h2" />
      <path d="m12 12 4-4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 14.5A4.5 4.5 0 0 0 13 19a4.5 4.5 0 0 0 4.5-4.5c0-2-1.5-3-1.5-5 0-1.5-1-3-2-3.5.5 1.5 0 2.5-1 3.5-1.5 1.5-4.5 3-4.5 4.5Z" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v6c0 4.5 3 7.5 7.5 9 4.5-1.5 7.5-4.5 7.5-9V6L12 3Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v6c0 4.5 3 7.5 7.5 9 4.5-1.5 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="11" rx="3" />
      <path d="M8 16v3.2L11.5 16" />
      <circle cx="8.5" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="10.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DocumentHomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="4" width="12" height="16" rx="2" />
      <rect x="7.5" y="2.3" width="6" height="3" rx="1" />
      <path d="M7.5 10.5h5.5M7.5 14h5.5M7.5 17.5h3" />
      <path d="m19.6 9.4-4.3 4.3-.8 2.5 2.5-.8 4.3-4.3a1.5 1.5 0 0 0-1.7-1.7Z" />
    </svg>
  );
}


export function DropletIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3s6 6.5 6 10.5a6 6 0 1 1-12 0C6 9.5 12 3 12 3Z" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.3l1.4 4.5-2.2 1.6a12 12 0 0 0 6.4 6.4l1.6-2.2 4.5 1.4V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="m12 2.5 2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.1 1.3-6.6-4.9-4.6 6.6-.7L12 2.5Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function CoinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c0-1 1-1.8 2.5-1.8s2.5.7 2.5 1.6c0 2.2-5 1.4-5 3.7 0 .9 1 1.7 2.5 1.7s2.5-.7 2.5-1.7" />
    </svg>
  );
}
