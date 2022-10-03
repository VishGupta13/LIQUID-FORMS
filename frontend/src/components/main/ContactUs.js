import React from 'react'
// import './style.css';
const ContactUs = () => {

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Countdown timer
   */

  let countdown = select('.countdown');

  const countDownDate = function() {
    let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();

    let weeks = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    let output = countdown.getAttribute('data-template');
    output = output.replace('%w', weeks).replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
    countdown.innerHTML = output;
  }
  countDownDate();
  setInterval(countDownDate, 1000);

})()

  return (
    <div><>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>WeBuild - Bootstrap Coming Soon Template</title>
    <meta content="" name="description" />
    <meta content="" name="keywords" />
    {/* Favicons */}
    <link href="assets/img/favicon.png" rel="icon" />
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
    {/* Google Fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i"
      rel="stylesheet"
    />
    {/* Vendor CSS Files */}
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link
      href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
      rel="stylesheet"
    />
    {/* Template Main CSS File */}
    <link href="assets/css/style.css" rel="stylesheet" />
    {/* =======================================================
    * Template Name: WeBuild - v4.8.0
    * Template URL: https://bootstrapmade.com/free-bootstrap-coming-soon-template-countdwon/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
    {/* ======= Header ======= */}
    <header id="header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1 className="text-light">
            <a href="index.html">
              <span>WeBuild</span>
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        </div>
        <div className="contact-link float-right">
          <a href="#contact" className="scrollto">
            Contact Us
          </a>
        </div>
      </div>
    </header>
    {/* End #header */}
    {/* ======= Hero Section ======= */}
    <section id="hero">
      <div className="hero-container">
        <h1>WeBuild</h1>
        <h2>
          We're working hard to improve our website and we'll ready to launch
          after
        </h2>
        <div
          className="countdown"
          data-count="2023/12/3"
          data-template="%d days %h:%m:%s"
        />
        <form
          action="forms/notify.php"
          method="post"
          role="form"
          className="php-email-form"
        >
          <div className="row no-gutters">
            <div className="col-md-6 form-group pr-md-1">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="col-md-6 form-group pl-md-1">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your notification request was sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Get notified!</button>
          </div>
        </form>
      </div>
    </section>
    {/* End Hero */}
    <main id="main">
      {/* ======= Contact Us Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="row contact-info">
            <div className="col-md-4">
              <div className="contact-address">
                <i className="bi bi-geo-alt" />
                <h3>Address</h3>
                <address>A108 Adam Street, NY 535022, USA</address>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-phone">
                <i className="bi bi-phone" />
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:+155895548855">+1 5589 55488 55</a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-email">
                <i className="bi bi-envelope" />
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="form">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* End Contact Us Section */}
    </main>
    {/* End #main */}
    {/* ======= Footer ======= */}
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>WeBuild</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-coming-soon-template-countdwon/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    {/* End #footer */}
    {/* Vendor JS Files */}
    {/* Template Main JS File */}
  </>
  </div>
  )
}

export default ContactUs;
