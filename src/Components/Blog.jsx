
import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';

const Blog = () => {
   
      return (
            <div className='mt-5'>

                  

                  <div className='container'>
                        <h3>Question 1: Tell us the differences between uncontrolled and controlled components?

                        </h3>
                        <h5 className=''>Answer 1:
                              <p> Uncontrolled Components: Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.</p>
                              <p>Controlled Components: In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.</p>


                        </h5>
                  </div>

                  {/* second */}
                  <div className='container text-left'>
                        <h3 className='text-left'>Question 2: How to validate React props using PropTypes?

                        </h3>
                        <h5>
                              Answer 2:
                              <p>Install the prop-types package using npm or yarn:

                                    npm install prop-types</p>
                              <p>import the PropTypes library in your component.</p>
                              <p>Define the PropTypes for your component by adding a propTypes object to your component class. This object should have the name of each prop as a key and the type </p>
                              <p>Use the PropTypes library to specify the expected types of your props. The library provides several built-in types, including string, number, bool, array, object, and more.</p>
                        </h5>
                  </div>

                  <div className='container'>
                        <h3 className='text-left'>Question 3: Tell us the difference between nodejs and express js.?

                        </h3>
                        <h5>
                              Answer 3:
                              <p>Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Node allows you to write and run Javascript code server-side.</p>
                              <p>Express.js is a framework for Node.js. Basically instead of writing 20 lines of code for a simple functionality with Node.js, you can write it in 2 lines using Express.js.

                                    You can write the webapp using Node.js, but I don`t recommend it. Express is a minimalistic framework and it will make you life easier.</p>
                        </h5>

                  </div>
                  <div className='container'>
                        <h3 className='text-left'>Question 4: What is a custom hook, and why will you create a custom hook??

                        </h3>
                        <h5>
                              Answer 4:
                              <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</p>
                              <p>You can also use the isRequired modifier to specify that a prop is required and should generate a warning if it's not provided.</p>
                        </h5>

                  </div>
            </div>
      );
};

export default Blog;