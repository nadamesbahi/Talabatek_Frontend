import React from "react";
import {
  FaDollarSign,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShoppingBag,
  FaTwitter,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="Mainfooter text-center text-lg-start text-white fw-bold">
      <section className="">
        <div className="container-fluid text-center text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto ">
              <div className="footerImageContainer mx-auto">
                <img src="/images/logo.png" alt="" className="img-fluid" />
              </div>
              <p>
                Talabatek est un site web populaire de livraison qui permet aux
                clients de commander des repas auprès d'une variété de
                restaurants locaux et de les faire livrer directement à leur
                porte.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">
              <h6 className="text-uppercase mx-auto mx-md-0 fw-bold  mx-md-0 mb-4">
                Links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Support
                </a>
              </p>
              <p>
                <Link to="/Private_Police" className="text-white">
                  Terms and Conditions
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4">
              <h6 className="text-uppercase mx-auto mx-md-0 fw-bold mb-4">
                About us
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Sign In
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Register
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4">
              <h6 className="text-uppercase mx-auto mx-md-0 text-center fw-bold mb-4">
                Contact Us
              </h6>
              <p className="mt-4">
                Get in touch with us via mail phone.We are waiting for your call
                or message
              </p>
              <p className=" btn text-white px-3 py-2 text-center w-100 rounded-pill buttom-footer mt-4">
                Contact@Talabatek.com
              </p>
              <p className="mt-4">
                <section className="mb-4">
                  <a
                    className="btn text-white text-start btn-floating m-1 rounded-circle d-inline-flex p-2 facebook-color me-3"
                    href="#!"
                    role="button"
                  >
                    <FaFacebookF classNameName="" />
                  </a>

                  <a
                    className="btn text-white btn-floating m-1 rounded-circle d-inline-flex p-2 twitter-color mx-3"
                    href="#!"
                    role="button"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    className="btn text-white btn-floating m-1 rounded-circle d-inline-flex p-2 instagram-color mx-3"
                    href="#!"
                    role="button"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    className="btn text-white btn-floating m-1 rounded-circle d-inline-flex p-2 linkedin-color mx-3"
                    href="#!"
                    role="button"
                  >
                    <FaLinkedinIn />
                  </a>
                </section>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-2 pb-4 fs-5">
        Created By
        <span className="buttom-dashboard-color"> Talabatek - team </span> ©
        2023
      </div>
    </footer>
    
  );
}
