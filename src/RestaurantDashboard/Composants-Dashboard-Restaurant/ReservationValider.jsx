import React from "react";
import { Link } from "react-router-dom";

export default function ReservationValider() {
  return (
      <div className="cards-reservations p-2 px-4">
        <div className="row d-flex mb-4 mt-2">
          <div className="col-10 fs-5"><span>Réservations en attent de validation</span></div>

          <div className="col-2">
          <Link to="/reservations" className="Link"><h6>View all</h6></Link>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col d-flex flex-column flex-lg-row align-items-center justify-content-between p-2 px-3 mb-4 me-2 rounded border-card">
            <div>
              <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start ">
                <div className="position-relative d-flex rounded-circle m-2 mt-0 ms-0 client-card ">
                  <img
                    src="images/restaurant1.jpg"
                    alt="clientImage"
                    className="mx-auto w-100 rounded-circle img-fluid"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle client-profile"></div>
                </div>
                <div className="d-flex flex-column justify-content-between ms-2">
                  <div className="fs-5 mb-3">Johnson ( Table 8 )</div>
                  <div className="fw-light mb-2">
                    24 April, 2023 | 04:00 PM
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex buttons-validation-reservation">
              <button type="button" className="btn px-4 mx-1">
                Valider
              </button>
              <button type="button" className="btn px-4 mx-1">
                Refuser
              </button>
            </div>
          </div>
          <div className="col d-flex flex-column flex-lg-row align-items-center justify-content-between p-2 px-3 mb-4 me-2 border-card">
            <div>
              <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start ">
                <div className="position-relative d-flex rounded-circle m-2 mt-0 ms-0 client-card ">
                  <img
                    src="/images/profilClient.jpeg"
                    alt="clientImage"
                    className="mx-auto w-100 rounded-circle img-fluid"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle client-profile"></div>
                </div>
                <div className="d-flex flex-column justify-content-between ms-2">
                  <div className="fs-5 mb-3">Jessica ( Table 5 )</div>
                  <div className="fw-light mb-2">
                    24 April, 2023 | 04:00 PM
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex buttons-validation-reservation">
              <button type="button" className="btn px-4 mx-1">
                Valider
              </button>
              <button type="button" className="btn px-4 mx-1">
                Refuser
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
