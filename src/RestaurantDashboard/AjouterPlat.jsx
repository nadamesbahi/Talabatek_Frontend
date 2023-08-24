import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import InputField from "../RestaurantDashboard/Composants-Dashboard-Restaurant/InputField";
import DashbordCards from "../RestaurantDashboard/Composants-Dashboard-Restaurant/DashboardCards";
import axios from "axios";

export default function AjouterPlat() {
  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const [refresh,setrefresh]=useState(false)
  const [prix, setprix] = useState("");
  const [nom, setnom] = useState();
  const [photo, setphoto] = useState(null);
  const [idCategorie, setidCategorie] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //get all categories
    fetch(`http://127.0.0.1:8000/api/categories`)
        .then(res => res.json())
        .then(response => setCategories(response));
}, [refresh]);

  //filtrer categories
  const filterUniqueByProperty = (arr, property) => {
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
  const uniqueCategories = filterUniqueByProperty(categories, 'nom');

  //add plat
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom', nom)
    formData.append('prix', prix)
    formData.append('description', description)
    formData.append('photo', photo)
    formData.append('idCategorie', idCategorie)

    await axios.post('http://127.0.0.1:8000/api/plats', formData)
      .then(({ data }) => {
        console.log(data.message)
      }).catch(({ response }) => {
        if (response.status == 422) {
          console.log(response.data.errors)
        } else {
          console.log(response.data.message)
        }
      })
      setrefresh(!refresh)
  };


  return (
    <div className="formulaire-dashboard container ">
      <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
        <FaUserEdit />
        <span className="mx-2">/</span>
        Ajouter Plat
      </div>
      <DashbordCards />
      <div className="mb-2 mt-3 d-flex justify-content-between align-items-center">
        <div className="fs-3 fw-bold black-color py-1 mb-3 ">Ajouter Plat</div>
      </div>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div class="row mt-3">
          <div class="col">
            <InputField id="Nom" label="Nom" type="text" val={nom} newval={setnom} />
          </div>
          <div class="col">
            <InputField id="Prix" label="Prix" type="text" val={prix} newval={setprix} />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <InputField id="Description" label="Description" type="text" val={description} newval={setDescription} />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="file" id="photo"  onChange={(event) => setphoto(event.target.files[0])} />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col select">
            <select id="categorie" value={idCategorie} onChange={(event) => setidCategorie(event.target.value)}>
              {
                uniqueCategories.map((categorie, index) => {
                  return <option value={categorie.id} key={index}>{categorie.nom}</option>
                })
              }
            </select>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col d-flex justify-content-end">
            <button className="me-3 px-5 py-2 Cancel-button fw-bold">
              Cancel
            </button>
            <button type="submit" className="me-3 px-5 py-2 save-button fw-bold" onClick={()=>setrefresh(true)}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
