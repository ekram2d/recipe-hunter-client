import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import app from '../firebase/firebase.config';
import { getAuth, updateProfile } from 'firebase/auth';
const auth = getAuth(app);
const Register = () => {
      const [error,setError]=useState(null);
      const { createUser } = useContext(AuthContext);
      const handleregister = ((event) => {
            event.preventDefault();
            setError("");
            const form = event.target;
            const name = form.displayname.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, photo, email, password)
           if(password.length < 6) {
            setError('password must be at least 6 character')
            return ;
           }
            createUser(email, password)
                  .then((result) => {
                        console.log(result);
                        const registerUser = result.user;
                        console.log(registerUser);
                        setProfile(name, photo);

                  })
                  .catch(error => {
                        setError(error.messgae);

                  })

      })
      const setProfile = (name, photo) => {
            console.log("eeeeee", name, photo)
            updateProfile(auth.currentUser, {
                  displayName: name, photoURL: photo
            })
                  .then((user) => {
                        console.log('Profile updated!');
                        // Profile updated!
                        // ...
                  }).catch((error) => {
                        console.log(error.messgae);
                        // An error occurred
                        // ...
                  });
      }
      return (
            <div className='mb-5'>
                  <Container className='w-25 mx-auto mt-3'>
                        <h3>Please Register  here </h3>
                        <Form onSubmit={handleregister}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Display Name</Form.Label>
                                    <Form.Control type="text" name='displayname' placeholder="Enter name" required />

                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Photo url</Form.Label>
                                    <Form.Control type="text" name='photo' placeholder="Enter phot url" required />

                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" required />
                              </Form.Group>

                              <Button variant="primary" type="submit">
                                    Register
                              </Button>
                        </Form>
                        <Link to='/login'>AL ready acount?Go Login</Link>

                  </Container>
                  <Form.Text className="text-sucess">

                  </Form.Text>
                  <Form.Text className="text-danger">
               {error}
                  </Form.Text>

            </div>
      );
};

export default Register;