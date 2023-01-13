import React from 'react'
import Navbar from './NavBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


const Signin = () => {
  return (
    <>
      <Navbar />
      <Form>
        <Container className="text-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control type="email" placeholder="Enter your E-Mail" className="text-center" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="text-center" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" className="text-center" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
          <div>
            <p className="text-muted mt-3">
              Don't have an account yet?
            </p>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </div>
        </Container>
      </Form>
    </>
  )
}

export default Signin