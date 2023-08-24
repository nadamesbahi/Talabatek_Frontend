import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  const [search, setsearch] = useState("Search...");
  const [toggle, settoggle] = useState(true);
  const [Profiltoggle, setProfiltoggle] = useState(true);
  const [client, setclient] = useState([])
  function toggleSearch() {
    settoggle(!toggle);
  }
  function ProfiltoggleHandler() {
    setProfiltoggle(!Profiltoggle);
  }
  useEffect(() => {
    //get client 
    fetch(`http://127.0.0.1:8000/api/clients/1`)
      .then(res => res.json())
      .then(response => setclient(response));

  }, [])
  return (
    <nav className="HeaderNav navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="logocontainer">
          <NavLink className="Link navbar-brand fw-bold" to="/">
            <img
              src="/images/logo.png"
              alt="Talabatek_Logo"
              className="img-fluid w-100"
            />
          </NavLink>
        </div>
        <button
          className="navbar-toggler d-flex align-items-center d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="d-inline-flex">
            <div
              className="headerProfilImageContainer d-lg-inline position-relative me-4"
              onClick={ProfiltoggleHandler}
            >
              <img
                src=
                {`http://127.0.0.1:8000/storage/profil/image/${client.photo}`}

                alt=""
                className="img-fluid rounded-circle"
              />
              <div className="profilList">
                <ul
                  className={`text-white text-start list-group list-group-flush rounded ${Profiltoggle ? "d-none" : ""
                    }`}
                >
                  <li className="list-group-item">
                    <div>{client.nom} {client.prenom}</div>
                    <div className="text-white-50">{client.email}</div>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="/">Dashboard</NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="/profil">Settings</NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="/">Earnings</NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink to="/">Sign out</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={`nav-NavLink mx-2 mx-md-3`}
                aria-current="page"
                activeClassName="active"
              >
                {" "}
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-NavLink mx-2 mx-md-3">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/services" className="nav-NavLink mx-2 mx-md-3">
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-NavLink mx-2 mx-md-3">
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center mb-3 mb-lg-0 position-relative">
            <input
              className={
                toggle
                  ? "form-control border-end-0 border rounded-pill d-none"
                  : "form-control text-white rounded-pill SearchInput me-2 "
              }
              type="search"
              id="example-search-input"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <span
              className={`position-absolute top-50 end-0 translate-middle-y ${toggle ? "" : "d-none"
                }`}
            >
              <button
                onClick={toggleSearch}
                className="btn text-white rounded-pill ms-n5 mb-3 mb-lg-0"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search "
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </span>
          </div>
          <div
            className="headerProfilImageContainer d-none d-lg-inline position-relative" style={{ marginRight: "60px" }}
            onClick={ProfiltoggleHandler}
          >
            <img
                src=
                {`http://127.0.0.1:8000/storage/profil/image/${client.photo}`}
                 alt=""
              className="img-fluid rounded-circle"
            />
            <div className="profilList" >
              <ul
                className={`text-white list-group list-group-flush rounded ${Profiltoggle ? "d-none" : ""
                  }`}
              >
                <li className="list-group-item">
                  <div>{client.nom} {client.prenom}</div>
                  <div className="text-white-50">{client.email}</div>
                </li>
                <li className="list-group-item">
                  <NavLink to="/">Dashboard</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/profil">Settings</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/">Earnings</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/">Sign out</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="d-flex justify-content-between">
            <button
              className="btn login-btn fw-bold ms-0 ms-lg-3 mx-2 rounded col-6 col-lg-auto"
              type="submit"
            >
              Log in
            </button>
            <button
              className="btn signup-btn fw-bold  rounded col-6 col-lg-auto"
              type="submit"
            >
              Sign up
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
