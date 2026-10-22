type Props = {
  clase?: string
}

export function Enredadera({ clase = '' }: Props) {
  return (
    <svg className={clase} viewBox="0 0 180 720" fill="none" aria-hidden="true">
      <path
        d="M92 710c8-70-18-120 6-180s-22-110 8-170-20-108 4-168-16-90 2-140"
        stroke="#7d8b6f"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M96 620c28-8 46 6 58 22M88 540c-30-4-48 10-58 28M102 430c32-12 44 4 50 24M86 330c-28-8-46 6-54 24M100 220c26-10 40 2 48 20M90 120c-24-6-38 8-44 22"
        stroke="#8fa07e"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <ellipse cx="148" cy="632" rx="18" ry="8" fill="#8fa07e" opacity=".75" transform="rotate(-28 148 632)" />
      <ellipse cx="34" cy="556" rx="17" ry="8" fill="#7d8b6f" opacity=".7" transform="rotate(32 34 556)" />
      <ellipse cx="150" cy="444" rx="16" ry="7" fill="#8fa07e" opacity=".72" transform="rotate(-22 150 444)" />
      <ellipse cx="36" cy="344" rx="16" ry="7" fill="#7d8b6f" opacity=".7" transform="rotate(26 36 344)" />
      <ellipse cx="144" cy="232" rx="15" ry="7" fill="#8fa07e" opacity=".74" transform="rotate(-30 144 232)" />
      <ellipse cx="48" cy="132" rx="14" ry="7" fill="#7d8b6f" opacity=".68" transform="rotate(24 48 132)" />

      <g transform="translate(118 500)">
        <circle r="16" fill="#e8b4b4" />
        <circle cx="-6" cy="-4" r="8" fill="#f3d0cc" />
        <circle cx="5" cy="4" r="6" fill="#c98989" />
        <circle r="3" fill="#f7e6e2" />
      </g>
      <g transform="translate(52 390)">
        <circle r="14" fill="#d7a8a0" />
        <circle cx="-5" cy="-3" r="7" fill="#f0d0c8" />
        <circle cx="4" cy="3" r="5" fill="#c98989" />
        <circle r="2.5" fill="#fff4f0" />
      </g>
      <g transform="translate(124 268)">
        <circle r="15" fill="#e8b4b4" />
        <circle cx="-5" cy="-4" r="8" fill="#f3d0cc" />
        <circle cx="5" cy="3" r="6" fill="#d7a8a0" />
        <circle r="3" fill="#f7e6e2" />
      </g>
      <g transform="translate(58 168)">
        <circle r="13" fill="#f0d0c8" />
        <circle cx="-4" cy="-3" r="6" fill="#e8b4b4" />
        <circle cx="4" cy="3" r="5" fill="#c98989" />
        <circle r="2.4" fill="#fff4f0" />
      </g>
      <g transform="translate(108 70)">
        <circle r="12" fill="#e8b4b4" />
        <circle cx="-4" cy="-3" r="6" fill="#f3d0cc" />
        <circle r="2.2" fill="#f7e6e2" />
      </g>
      <ellipse cx="86" cy="88" rx="7" ry="4" fill="#d7a8a0" opacity=".85" />
      <ellipse cx="110" cy="590" rx="6" ry="4" fill="#e8b4b4" opacity=".8" />
    </svg>
  )
}
