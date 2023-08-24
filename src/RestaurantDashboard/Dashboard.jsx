import React from "react";
import DashbordCards from "../RestaurantDashboard/Composants-Dashboard-Restaurant/DashboardCards";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import ReservationValider from "../RestaurantDashboard/Composants-Dashboard-Restaurant/ReservationValider";
import ReviewsCommandes from "../RestaurantDashboard/Composants-Dashboard-Restaurant/ReviewsCommandes";
import ReviewsCatégories from "./Composants-Dashboard-Restaurant/ReviewsCatégories";

export default function Dashboard() {
  return <section>
    <div className="content-dashboard container ">
      <Link to="/" className="Link">
        <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
          <FaHome />
          <span className="mx-2">/</span>
          Dashboard
        </div>
      </Link>
      <DashbordCards />
      <div className="row my-4">
        <div className="col-lg-7 col-md-8 col-sm-12">
          <h1 className="fw-bold">Commandes</h1>
          <ReviewsCommandes/>
        </div>
        <div className="col-lg-5 col-md-8 col-sm-12">
        <h1 className="fw-bold">Catégories</h1>
        <ReviewsCatégories/>
        </div>
      </div>
      <ReservationValider />

    </div>
  </section>;
}
