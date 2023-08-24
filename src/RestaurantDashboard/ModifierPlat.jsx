
import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import InputField from "../RestaurantDashboard/Composants-Dashboard-Restaurant/InputField";
import DashbordCards from "../RestaurantDashboard/Composants-Dashboard-Restaurant/DashboardCards";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ModifierPlat() {
  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const [prix, setprix] = useState();
  const [nom, setnom] = useState('');
  const [photo, setphoto] = useState(null);
  const [idCategorie, setidCategorie] = useState('');
  const [description, setDescription] = useState('');
  const [plats, setPlats] = useState([])
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    //get all categories
    fetch(`http://127.0.0.1:8000/api/categories`)
      .then(res => res.json())
      .then(response => setCategories(response));
  }, [refresh])

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

  //get infos plat
  const handleUpdate = async () => {
    await axios.get(`http://127.0.0.1:8000/api/plats/${id}`)
      .then(({ data }) => {
        const { nom, prix, description, photo, idCategorie } = data
        setnom(nom)
        setprix(prix)
        setDescription(description)
        setphoto(photo)
        setidCategorie(idCategorie)

      }).catch(({ response: { data } }) => {
        console.log(data.message)
      })

  }
  useEffect(() => {
    handleUpdate()
  }, [])
  //update infos plat
  const updatePlat = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('_method', 'PATCH')
    formData.append('nom', nom)
    formData.append('prix', prix)
    formData.append('description', description)
    if (photo !== null) {
      formData.append('photo',photo)
    }
    formData.append('idCategorie', idCategorie)

    await axios.post('http://127.0.0.1:8000/api/plats/' + id, formData)
      .then(({ data }) => {
        console.log(data)
      }).catch(({ response }) => {
        if (response.status == 422) {
          console.log(response.data.errors)
        } else {
          console.log(response.data)
        }
      })
      setRefresh(!refresh); 
  }


  return (
    <div className="formulaire-dashboard container ">
      <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
        <FaUserEdit />
        <span className="mx-2" >/</span>
        Modifier Plat
      </div>
      <DashbordCards />
      <div className="mb-2 mt-3 d-flex justify-content-between align-items-center">
        <div className="fs-3 fw-bold black-color py-1 mb-3 ">Modifier Plat</div>
      </div>
      <form onSubmit={updatePlat} enctype="multipart/form-data">
        <div className="row mt-3">
          <div className="col">
            <InputField id="Nom" label="Nom" type="text" val={nom} newval={setnom} />
          </div>
          <div className="col">
            <InputField id="Prix" label="Prix" type="text" val={prix} newval={setprix} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <InputField id="Description" label="Description" type="text" val={description} newval={setDescription} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <input type="file" id="photo"  onChange={(event) => setphoto(event.target.files[0])} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col select">
            <select id="categorie" value={idCategorie} onChange={(event) => setidCategorie(event.target.value)}>
              {
                uniqueCategories.map((categorie, index) => {
                  return <option value={categorie.id} key={index}>{categorie.nom}</option>
                })
              }
            </select>
          </div>
        </div>


        <div className="row mt-3">
          <div className="col d-flex justify-content-end">
            <button className="me-3 px-5 py-2 Cancel-button fw-bold">
              Cancel
            </button>
            <button type="submit" className="me-3 px-5 py-2 save-button fw-bold" >Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

