type Props = {
  url: string
}

export function FlorSpline({ url }: Props) {
  return (
    <div className="spline-marco relative mx-auto h-[42vh] w-full max-w-[640px] overflow-hidden sm:h-[50vh]">
      <iframe
        title="Flor 3D"
        src={url}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="autoplay"
      />
      <p className="mt-2 text-center text-[10px] text-tinta/35">
        <a href="https://app.spline.design" target="_blank" rel="noreferrer">
          Open in Spline
        </a>
        {' · '}
        <a href="https://spline.design" target="_blank" rel="noreferrer">
          Made with Spline
        </a>
      </p>
    </div>
  )
}
