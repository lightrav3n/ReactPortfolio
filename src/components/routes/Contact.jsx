import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="content">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact me
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions?
        </p>

        <div className="row">
          <div className="col-md-12 mb-md-0 mb-5">
            <Form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label htmlFor="name">Your name</Form.Label>
                    <Form.Control type="text" id="name" name="name" />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group>
                    <Form.Label htmlFor="email">Your email</Form.Label>
                    <Form.Control type="text" id="email" name="email" />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <Form.Group>
                    <Form.Label htmlFor="subject">Subject</Form.Label>
                    <Form.Control type="text" id="subject" name="subject" />
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <Form.Group>
                    <Form.Label htmlFor="message">Your message</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="message"
                      name="message"
                      rows="2"
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>

            <div className="text-center text-md-left">
              {/* Use Link from react-router-dom for navigation */}
              <Link
                to="#"
                className="btn btn-primary"
                onClick={() => document.getElementById("contact-form").submit()}
              >
                Send
              </Link>
            </div>
            <div className="status"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
