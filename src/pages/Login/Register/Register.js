import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import './Register.css';

const Register = () => {

  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;

      createUser(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              setError('');
              form.reset();
              handleUpdateUserProfile(name, photoURL);
              handleEmailVerification();
              toast.success('Please verify your email address.')
          })
          .catch(e => {
              console.error(e);
              setError(e.message);
          });
  }

  const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }

      updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
  }

  const handleEmailVerification  = () => {
      verifyEmail()
      .then(() =>{})
      .catch(error => console.error(error));
  }

  const handleAccepted = event => {
      setAccepted(event.target.checked)
  }

    return (
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={6} lg={8} xs={12}>
              <div className="top-border border border-3"></div>
              <Card className="shadow card-bg">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase btn-text">FOLibrary</h2>
                    <p className=" mb-5">Please Register Now!</p>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Your FullName
                          </Form.Label>
                          <Form.Control type="text" name="name" placeholder="Enter Your FullName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Photo Url
                          </Form.Label>
                          <Form.Control type="text" name="photoURL" placeholder="Enter Your FullName" />
                        </Form.Group>

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
                          <Form.Control type="password" name="password"  placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                onClick={handleAccepted}
                                label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                        </Form.Group>
                        <div className="d-grid">
                          <Button className='btn-login' type="submit" disabled={!accepted}>
                            Sign Up
                          </Button>
                        </div>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account?{" "}
                          <a href="{''}" className="btn-text fw-bold">
                            Login
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default Register;