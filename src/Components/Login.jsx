import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
      const auth = getAuth(app)
      const Provider = new GoogleAuthProvider();
      const githubprovier = new GithubAuthProvider();
      const navigate = useNavigate();
      const location = useLocation();
      const { signIn, LogWithGoogle, LogWithGithub } = useContext(AuthContext);
      const [error, setError] = useState(null);
      // console.log('dddddd',location);

      const from = location.state?.from?.pathname || '/'
      const handleLogin = (event) => {
            event.preventDefault();
            setError("");
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            if (password.length < 6) {
                  setError('password must be at least 6 character')
                  return;
            }
            signIn(email, password)
                  .then(result => {
                        const singUser = result.user;
                        // console.log(singUser);
                        navigate(from)
                  })
                  .catch(error => {
                        setError(error.message);
                  })
      }

      const handleGoogleSignIn = () => {
            console.log("gihub mama is coming")
            LogWithGoogle(auth, Provider)
                  .then(result => {
                        const user = result.user;

                        // console.log(user);
                        navigate(from)
                  })
                  .catch((error) => setError(error))

      }
      const handleGithubSignIn = () => {
            console.log("github mama is coming")
            LogWithGithub(auth, githubprovier)
                  .then(result => {
                        const user = result.user;

                        // console.log(user);
                        navigate(from)
                  })
                  .catch((error) => setError(error))

      }
      return (
            <div>

                  <Container className='w-50  mx-auto mt-3 mb-5'>
                        <h3>Please login here </h3>
                        <Form onSubmit={handleLogin}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" required />
                              </Form.Group>

                              <Button variant="primary" type="submit">
                                    Login
                              </Button>

                        </Form>

                        <div className='d-flex   justify-content-center  gap-2 mt-2'>
                              <Button onClick={handleGoogleSignIn} variant="primary" type="submit">
                                    Google Sign In
                              </Button>
                              <Button onClick={handleGithubSignIn} variant="primary" type="submit">
                                    Github Sign In
                              </Button>

                        </div>
                        <Link to='/register'>Have no account? Go Register</Link>


                  </Container>
                  <Form.Text className="text-sucess">

                  </Form.Text>
                  <Form.Text className="text-danger">
                        {error}
                  </Form.Text>

            </div>
      );
};


export default Login;