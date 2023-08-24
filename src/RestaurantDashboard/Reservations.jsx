import React, { useEffect, useState } from "react";
import DashbordCards from "../RestaurantDashboard/Composants-Dashboard-Restaurant/DashboardCards";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [date, setDate] = useState();
  // const getReservations = (value) => {
  //   fetch(`http://127.0.0.1:8000/api/reservations/${value}`)
  //     .then(res => res.json())
  //     .then(response => setReservations(response));
  // }
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/reservations/${date}`)
    .then(res => res.json())
    .then(response => setReservations(response));
    }, []);
  const handleChange=(e)=>{
    setDate(e.target.value)
    // getReservations(date)
  }

  return (
    <section>
      <div className="content-reservations container ">
        <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
          <img src="images/icons/reservation2.svg" alt="icon-reservation" />
          <span className="mx-2">/</span>
          Réservations
        </div>
        <DashbordCards />
        <div className="row mb-1 mt-3 d-flex justify-content-between align-items-center">
          <div className="col-9 fs-3 fw-bold black-color py-1 mb-3 ">Réservations</div>
          <div className="col-3 py-1 mb-2">
            <div className='filter-days'>
            <select value={date} name="commandes_days" id="commandes_days" className='border-0 p-2' onChange={handleChange} >
                  <option  value="Tous">Tous</option>
                  <option  value="Aujourd">Aujourd'hui</option>
                  <option value="Hier">Hier</option>
                </select>
            </div>
          </div>
        </div>
        <div className="row">
          <p>Voici les données de votre liste de réservations</p>
        </div>
        <div className="row my-3 mx-auto">
          <table>
            <thead >
              <tr>
                <th scope="col">Réservation ID</th>
                <th scope="col">Date</th>
                <th scope="col">Nom Client</th>
                <th scope="col">Email</th>
                <th scope="col">N°
                  Personne</th>
                <th scope="col">Table</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* {reservations.map((reservation, index) => {
                return (
                  <tr>
                    <td scope="row">{reservation.id}</td>
                    <td>{reservation.date_reserver}</td>
                    <td>Jessica Wong</td>
                    <td>jessica@gmail.com</td>
                    <td>{reservation.numéro_personne}</td>
                    <td>{reservation.numéro_table}</td>
                    <td><button className="btn icon-refuse"><MdCancel /></button><button className="btn icon-accepte"><FaCheckCircle /></button></td>
                  </tr>
                )
              })} */}
              <tr>
                <td scope="row">3</td>
                <td>26 March 2020,12:42 AM</td>
                <td>Kareem Hammes</td>
                <td>kareem@gmail.com</td>
                <td>2</td>
                <td>12</td>
                <td><button className="btn icon-refuse"><MdCancel /></button><button className="btn icon-accepte"><FaCheckCircle /></button></td>
              </tr> 
              <tr>
                <td scope="row">4</td>
                <td>26 March 2020,12:42 AM</td>
                <td>Dessie Hartmann</td>
                <td>dessie@gmail.com</td>
                <td>5</td>
                <td>20</td>
                <td><button className="btn icon-refuse"><MdCancel /></button><button className="btn icon-accepte"><FaCheckCircle /></button></td>
              </tr>
              <tr>
                <td scope="row">5</td>
                <td>20 Mai 2022,12:42 AM</td>
                <td>Johan Feil</td>
                <td>johan@gmail.com</td>
                <td>1</td>
                <td>3</td>
                <td><button className="btn icon-refuse"><MdCancel /></button><button className="btn icon-accepte"><FaCheckCircle /></button></td>
              </tr> 
              <tr>
                <td scope="row">6</td>
                <td>26 Mai 2020,12:42 AM</td>
                <td>Jessica Wong</td>
                <td>jessica@gmail.com</td>
                <td>3</td>
                <td>10</td>
                <td><button className="btn icon-refuse"><MdCancel /></button><button className="btn icon-accepte"><FaCheckCircle /></button></td>
              </tr>
              <tr>
                <td scope="row">8</td>
                <td>30 Avril 2022,12:42 AM</td>
                <td>Sincere Rice</td>
                <td>sincereice@gmail.com</td>
                <td>2</td>
                <td>4</td>
                <td><button className="btn icon-refuse"><MdCancel /></button><button className="btn icon-accepte"><FaCheckCircle /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row ">
          <div className="col">
            <div className="d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      9
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      10
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
