import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  FaBars,
  FaCircle,
  FaProductHunt,
  FaRegUser,
  FaThLarge,
  FaUserEdit,
  FaHamburger,
  FaRestroom

} from "react-icons/fa";

import { NavLink, useParams } from "react-router-dom";
export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [restaurant, setRestaut] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const ref = useRef(null);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaThLarge />,
    },
    {
      path: "/profil",
      name: "Profil",
      icon: <FaRegUser />,
    },
    {
      path: "/commandes",
      name: "Les Commandes",
      icon: <img src="/images/icons/commandes.svg" className='image-icon' />,
    },
    {
      path: "/reservations",
      name: "Les Réservations",
      icon: <img src="/images/icons/reservations.svg" className='image-icon' />,
    },
    {
      path: "/ajouter_plat",
      name: "Ajouter Plat",
      icon: <FaUserEdit />,
    },
    {
      path: "/menu",
      name: "Les Plats",
      icon: <FaProductHunt />,
    },
  ];
  //get infos reestaurant
  const {id}=useParams()
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/restaurants/3`)
    .then(res => res.json())
    .then(response => setRestaut(response));
    }, []);

  return (
    <div className="Mycontainer MySidebar" ref={ref}>
      <div
        style={{
          width: isOpen ? "400px" : "60px"
        }}
        className="sidebar "
      >
        <div className="top_section top-dashboard">
          <div className="d-flex align-items-center">
            <div style={{ display: isOpen ? "block" : "none" }}>
              <div className="d-flex align-items-center">
                <FaCircle className="green-color " />
                <span className="ms-2"> Active</span>
              </div>
            </div>

            <div
              style={{ marginLeft: isOpen ? "200px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="position-relative"
          >
            <div className="mt-4 d-flex mx-auto w-25 h-25 rounded-circle m-2 Circle-border">
              <img
                src={`http://127.0.0.1:8000/storage/profil/image/${restaurant.photo}`}
                alt="Profil_Image"
                className="mx-auto w-100 rounded-circle"
              />
              <br />
            </div>
            <div className="Profil_Outline position-absolute top-50 start-50 translate-middle"></div>
          </div>
          <div
            className="text-center my-4 fs-6 fw-bold"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <span className="mb-2 d-block">{restaurant.nom}</span>
            <span className="fw-normal">{restaurant.email}</span>
          </div>
        </div>
        <div className="Buttom-sidebar">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link my-3 sidebar-item ps-4"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
          <div className="m-4" style={{ display: isOpen ? "block" : "none" }}>
            <Calendar className="rounded-3  w-100" />
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
