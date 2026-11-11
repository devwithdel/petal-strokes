export function WaveDivider({ flip = false, color = '#F0CFCF' }) {
  return (
    <div className={`w-full leading-none ${flip ? 'rotate-180' : ''}`} aria-hidden="true" style={{ marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" shapeRendering="geometricPrecision" className="block h-12 w-full sm:h-16">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}