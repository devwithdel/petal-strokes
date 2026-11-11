import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-script text-6xl text-charcoal">404</h1>
      <p className="mt-3 text-charcoal-soft">This page bloomed away. Let's get you back home.</p>
      <Link to="/" className="mt-6 inline-block">
        <Button>Back to home</Button>
      </Link>
    </Container>
  )
}