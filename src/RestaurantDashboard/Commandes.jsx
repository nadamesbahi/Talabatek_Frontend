import React, { useEffect, useState } from "react";
import DashbordCards from "../RestaurantDashboard/Composants-Dashboard-Restaurant/DashboardCards";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function Commandes() {
  const [commandes, setCommandes] = useState([]);
  const [date, setDate] = useState("Tous");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    //get commandes filter par date
    fetch(`http://127.0.0.1:8000/api/commandes/${date}`)
    .then(res => res.json())
    .then(response => setCommandes(response)); 
   }, [date,refresh]);

  const handleChangeEtatAnnuler = (id) => {
    fetch(`http://127.0.0.1:8000/api/commandeAn/${id}`,
      { method: 'get' })
      setRefresh(!refresh); 
  }
  const handleChangeEtatAccepter = (id) => {
    fetch(`http://127.0.0.1:8000/api/commandeAc/${id}`,
      { method: 'get' })
      setRefresh(!refresh); 
  }



  return (
    <section>
      <div className="content-commandes container ">
        <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
          <img src="images/icons/commande2.svg" alt="icon-commande" />
          <span className="mx-2">/</span>
          Commandes
        </div>
        <DashbordCards />
        <div className="row mb-1 mt-3  align-items-center">
          <div className="col-9 fs-3 fw-bold black-color py-1 mb-3 ">Commandes</div>
          <div className="col-3 py-1 mb-3">
            <div className='filter-days'>
              <select value={date} name="commandes_days" id="commandes_days" className='border-0 p-2' onChange={(e) => setDate(e.target.value)} >
                <option selected value="Tous">Tous</option>
                <option value="Aujourd">Aujourd'hui</option>
                <option value="Hier">Hier</option>
              </select>
            </div>
          </div>

        </div>
        <div className="row">
          <p>Voici les données de votre liste de commandes</p>
        </div>
        <div className="row my-3 mx-auto">
          <table>
            <thead >
              <tr>
                <th scope="col">Commande ID</th>
                <th scope="col">Date</th>
                <th scope="col">Nom Client</th>
                <th scope="col">Adresse</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((commande, index) => {
                let button;
                if (commande.etat === 'accepter') {
                  button = <button className="btn icon-accepte" onClick={() => handleChangeEtatAccepter(commande.id)}><FaCheckCircle /></button>;
                } else if (commande.etat === 'annuler') {
                  button = <button className="btn icon-refuse" onClick={() => handleChangeEtatAnnuler(commande.id)}><MdCancel /></button>;
                } else{
                  button = (
                    <>
                      <button className="btn icon-refuse" onClick={() => handleChangeEtatAnnuler(commande.id)}><MdCancel /></button>
                      <button className="btn icon-accepte" onClick={() => handleChangeEtatAccepter(commande.id)}><FaCheckCircle /></button>
                    </>
                  );
                }

                return (
                  <tr key={index}>
                    <td scope="row">{commande.id}</td>
                    <td>{commande.date}</td>
                    <td>{commande.prenom} {commande.nom}</td>
                    <td>{commande.adresse}</td>
                    <td>{commande.total}</td>
                    <td>{button}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="row">
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

