type Props = {
  clase?: string
  variante?: 'tulipan' | 'rosa' | 'rama'
}

export function DecoracionBotanica({ clase = '', variante = 'tulipan' }: Props) {
  if (variante === 'rama') {
    return (
      <svg className={clase} viewBox="0 0 160 220" fill="none" aria-hidden="true">
        <path
          d="M78 210C78 150 70 110 86 70"
          stroke="#7d8b6f"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M84 92c18-8 28-6 38 4M76 128c-20-6-30-2-40 10M88 64c14-16 12-28 2-38"
          stroke="#7d8b6f"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <ellipse cx="122" cy="88" rx="14" ry="8" fill="#e8b4b4" opacity=".75" />
        <ellipse cx="38" cy="132" rx="13" ry="7" fill="#d7a8a0" opacity=".7" />
        <ellipse cx="98" cy="42" rx="11" ry="7" fill="#f0d0c8" opacity=".8" />
      </svg>
    )
  }

  if (variante === 'rosa') {
    return (
      <svg className={clase} viewBox="0 0 180 200" fill="none" aria-hidden="true">
        <path d="M90 188c2-46-6-80 2-118" stroke="#7d8b6f" strokeWidth="1.5" />
        <path
          d="M92 140c22 6 34-8 36-22M88 156c-24 4-34-10-32-24"
          stroke="#7d8b6f"
          strokeWidth="1.2"
        />
        <ellipse cx="118" cy="128" rx="16" ry="8" fill="#8fa07e" opacity=".7" transform="rotate(-20 118 128)" />
        <ellipse cx="62" cy="146" rx="16" ry="8" fill="#8fa07e" opacity=".65" transform="rotate(24 62 146)" />
        <circle cx="92" cy="62" r="28" fill="#e8b4b4" />
        <circle cx="80" cy="54" r="16" fill="#f3d0cc" />
        <circle cx="100" cy="70" r="12" fill="#c98989" />
        <circle cx="92" cy="60" r="6" fill="#f7e6e2" />
      </svg>
    )
  }

  return (
    <svg className={clase} viewBox="0 0 140 220" fill="none" aria-hidden="true">
      <path d="M70 210c0-54 4-96 0-138" stroke="#7d8b6f" strokeWidth="1.6" />
      <path
        d="M70 150c24 8 38-6 42-22M70 168c-26 6-38-8-40-24"
        stroke="#7d8b6f"
        strokeWidth="1.3"
      />
      <ellipse cx="108" cy="136" rx="18" ry="8" fill="#8fa07e" opacity=".75" transform="rotate(-18 108 136)" />
      <ellipse cx="32" cy="154" rx="18" ry="8" fill="#8fa07e" opacity=".7" transform="rotate(22 32 154)" />
      <path
        d="M70 86c-22-28-8-52 0-58 8 6 22 30 0 58z"
        fill="#e8b4b4"
      />
      <path d="M70 86c-16-18-18-42-8-54 14 10 20 32 8 54z" fill="#f0d0c8" />
      <path d="M70 86c16-18 18-42 8-54-14 10-20 32-8 54z" fill="#d7a8a0" />
      <path d="M70 86c0-22 10-40 18-46-4 18-10 34-18 46z" fill="#c98989" opacity=".85" />
    </svg>
  )
}
