import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('Petal Strokes runtime error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ maxWidth: 720, margin: '60px auto', padding: 24, fontFamily: 'sans-serif', color: '#4A2630', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'cursive', fontSize: 48 }}>Petal Strokes</h1>
          <p>Something went wrong loading this page.</p>
          <p style={{ fontSize: 14 }}>
            Please message us on{' '}
            <a href="https://ig.me/m/petalstroke_8" target="_blank" rel="noopener noreferrer">Instagram</a>{' '}
            or{' '}
            <a href="https://www.tiktok.com/@petalstrokes6" target="_blank" rel="noopener noreferrer">TikTok</a>.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}