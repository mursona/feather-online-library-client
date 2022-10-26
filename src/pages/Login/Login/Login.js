import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css';

const Login = () => {

  const googleProvider = new GoogleAuthProvider()

  const [error, setError] = useState('');
  const { signIn, setLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            if(user){
              navigate(from, {replace: true});
          }
          else{
              toast.error('Please Log In With Google.')
          }
        })
        .catch(error => {
          console.error(error)
          setError(error.message);
      })
}

  const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              form.reset();
              setError('');
              if(user.emailVerified){
                  navigate(from, {replace: true});
              }
              else{
                  toast.error('Your email is not verified. Please verify your email address.')
              }
          })
          .catch(error => {
              console.error(error)
              setError(error.message);
          })
          .finally(() => {
              setLoading(false);
          })
  }


    return (
    <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="top-border border border-3"></div>
              <Card className="shadow card-bg">
                <Card.Body>
                  <div className="mb-3 mt-md-2">
                    <h2 className="fw-bold mb-2 text-uppercase btn-text">FOLibrary</h2>
                    <p className=" mb-4">Please enter your login and password!</p>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="btn-text" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button className='btn-login' type="submit">
                            Login
                          </Button>
                        </div>
                        <Button onClick={handleGoogleSignIn} className='my-2 px-5' variant='outline-success'>Log In With Google</Button>
                        <Button className='my-2 px-5' variant='outline-success'>Log In With Github</Button>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{" "}
                          <Link to='/register' className="btn-text fw-bold">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
    );
};

export default Login;