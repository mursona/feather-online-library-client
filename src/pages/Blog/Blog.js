import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div class="container mt-5 mb-5">
            <h3 className='my-4 blog-text'>Top Four Question & Answer of React</h3>
        <div class="row m-0">
          <div class="col-12 mb-4 blog">
            <div class="card">
              <div class="card-body blog-bg text-start">
                <span class="badge num">01</span>
                <h6 class="card-title mt-3">What is cors?</h6>
                <p class="card-text">CORS stands for Cross-Origin Resource Sharing. CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
              </div>
            </div>
          </div>
          <div class="col-12 mb-4 blog">
            <div class="card">
              <div class="card-body blog-bg text-start">
                <span class="badge num">02</span>
                <h6 class="card-title mt-3">Why are you using firebase? what other options do you have implement authentication?</h6>
                <p class="card-text">
                   Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
                <p>We can also use Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
              </div>
            </div>
          </div>
          <div class="col-12 mb-4 blog">
            <div class="card">
              <div class="card-body blog-bg text-start">
                <span class="badge num">03</span>
                <h6 class="card-title mt-3">How does the private route work?</h6>
                <p class="card-text">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
              </div>
            </div>
          </div>
          <div class="col-12 mb-4 blog">
            <div class="card">
              <div class="card-body blog-bg text-start">
                <span class="badge num">04</span>
                <h6 class="card-title mt-3">What is Node? How does node work?</h6>
                <p class="card-text">Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
                <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;