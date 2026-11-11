export function WaveDivider({ flip = false }) {
  return (
    <div className={`bg-transparent w-full ${flip ? 'rotate-180' : ''}`} aria-hidden="true" style={{ marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" shapeRendering="geometricPrecision" className="block w-full h-[60px] sm:h-[100px]">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          style={{ fill: 'var(--section-top-color)' }}
        />
      </svg>
    </div>
  )
}