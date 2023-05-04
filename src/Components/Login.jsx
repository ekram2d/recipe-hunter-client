import React, { useContext } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const Login = () => {
      
      const navigate = useNavigate();
      const location = useLocation();
      const {signIn}=useContext(AuthContext);
      // console.log('dddddd',location);
      // const from=location.state.from.pathname || '/'
      const handleLogin=(event)=>{
            event.preventDefault();
            const form = event.target;
            const email=form.email.value;
            const password=form.password.value;

            // console.log(email,password)
            signIn(email,password)
            .then(result=>{
                  const singUser=result.user;
                  console.log(singUser);
            })
            .catch(error=>{
                  console.log(error.message);
            })
      }
      return (
            <div>
                
                  <Container className='w-50  mx-auto mt-3 mb-5'>
                        <h3>Please login here </h3>
                        <Form  onSubmit={handleLogin}>
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
                              <div className='d-flex gap-2 mb-2 mt-2 '>
                             <Button variant="primary" type="submit">
                                    Google Sign In
                              </Button>
                              <Button variant="primary" type="submit">
                              Github Sign In
                              </Button>
                             
                             </div>
                        </Form>
                        <Link to='/register'>Have no account? Go Register</Link>
                        <Form.Text className="text-sucess">

                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                  </Container>

            </div>
      );
};


export default Login;