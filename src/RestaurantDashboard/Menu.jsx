import React, { useEffect, useState } from 'react'
import { FaProductHunt } from "react-icons/fa";
import DashbordCards from "../RestaurantDashboard/Composants-Dashboard-Restaurant/DashboardCards";

import PlatMenu from "./Composants-Dashboard-Restaurant/PlatMenu";
import { Link } from "react-router-dom";
import CardCategorie from "./Composants-Dashboard-Restaurant/CardCategorie";
export default function Menu() {
  const [plats, setPlats] = useState([]);
  const [categories, setCategories] = useState([])
  const [refresh,setrefresh]=useState(false)

  useEffect(() => {

    //get all plats
    fetch('http://127.0.0.1:8000/api/plats')
    .then(res => res.json())
    .then(response => setPlats(response));

        //get all categories
    fetch(`http://127.0.0.1:8000/api/categories`)
    .then(res => res.json())
    .then(response => setCategories(response));
},[refresh]);


  const filterUniqueByProperty=(arr, property)=> {
    const uniqueItems = [];
    const encountered = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const itemProperty = item[property];
  
      if (!encountered.has(itemProperty)) {
        uniqueItems.push(item);
        encountered.add(itemProperty);
      }
    }
  
    return uniqueItems;
  }
  const uniqueCategories = filterUniqueByProperty(categories.slice(0, 4), 'nom');

  return <section>
    <div className="container content-restaurant-plats">
      <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
        <FaProductHunt />
        <span className="mx-2">/</span>
        Plats
      </div>
      <DashbordCards />
      <div className="row my-4">
        <div className="col-10">
          <h1>Catégories</h1>
        </div>
        <div className="col-2 d-flex align-items-center view-categories">
          <h6><Link className="Link" to={'/categories_restaut'}>View All</Link></h6>
        </div>
      </div>
      <div className="row mt-5 justify-content-around" id="categories">
         {
          uniqueCategories.map((categorie, index) => {
            return <CardCategorie categories={categorie} key={index} />
          })
        }
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-6 col-sm-6">
          <h1>Plats</h1>
        </div>
      </div>
      <div className="row mx-auto my-auto d-flex justify-content-center">
        {
          plats.map((plat, index) => {
            return <PlatMenu plats={plat} key={index}  refresh={refresh} setrefresh={setrefresh} />
          })
        }
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="d-flex justify-content-center mt-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    9
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    10
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
