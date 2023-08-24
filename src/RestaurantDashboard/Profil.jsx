import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import InputField from "../RestaurantDashboard/Composants-Dashboard-Restaurant/InputField";
import axios from "axios";

export default function Profil() {
  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const [nom, setnom] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [telephone, settelephone] = useState("");
  const [adresse, setadresse] = useState("");
  const [photo, setphoto] = useState('');
  const [refresh, setRefresh] = useState(false);

  const { id } = useParams()

    //get infos restaurant
  const handleUpdate = async () => {
    await axios.get(`http://127.0.0.1:8000/api/restaurants/3`)
      .then(({ data }) => {
        const { nom, telephone, email, mot_de_passe, adresse, photo } = data
        setnom(nom)
        settelephone(telephone)
        setemail(email)
        setpassword(mot_de_passe)
        setadresse(adresse)
        setphoto(photo)

      }).catch(({ response: { data } }) => {
        console.log(data.message)
      })

  }
  useEffect(() => {
    handleUpdate()
  }, [refresh])
  
  //changer etat de restau
  const handelDelete=(id)=>{
    fetch(`http://127.0.0.1:8000/api/restaurant/3`)
  }
  //update infos restaurant
  const updateRestaurant = async (e) => {
    // e.preventDefault()
    const formData = new FormData();
    formData.append('_method', 'PATCH')
    formData.append('nom', nom)
    formData.append('telephone', telephone)
    formData.append('email', email)
    formData.append('mot_de_passe', password)
    formData.append('adresse', adresse)

    if (photo !== null) {
      formData.append('photo', photo.name)
    }
    await axios.post('http://127.0.0.1:8000/api/restaurants/3',formData)
      .then(({ data }) => {
        console.log(data)
      }).catch(({ response }) => {
        if (response.status == 422) {
          console.log(response.data.errors)
        } else {
          console.log(response.data.message)
        }
      })
      setRefresh(!refresh)

  }
  // console.log(photo);
  return (
    <div className="profil container ">
      <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
        <FaUser />
        <span className="mx-2">/</span>
        Profil
      </div>
      <div className="mb-2 mt-3 d-flex justify-content-between align-items-center">
        <div className="fs-3 fw-bold black-color py-1 ">Edit Profil</div>
        <div className="rounded-circle m-2 profilImage">
          <img
            src={'/images/'+photo}
            alt="Profil_Image"
            className="mx-auto w-100 rounded-circle"
          />
        </div>
      </div>
      <div className="form-profil-style-file">
        <div class="row mt-3">
          <div class="col">
            <InputField id="Nom"  label="Nom" type="text" val={nom} newval={setnom} name='nom'/>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <InputField id="Email"  label="Email" type="text" val={email} newval={setemail} name='email'/>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <InputField id="Adress" label="Adress" type="text" val={adresse} newval={setadresse} name='adresse'/>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <InputField id="Telephone" label="Telephone" type="text" val={telephone} newval={settelephone} name='telephone'/>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <InputField id="Password" label="Password" type="text" val={password} newval={setpassword} name='mot_de_passe'/>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">

            <input type="file" id="photo"  onChange={(event) => setphoto(event.target.files[0])} />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col d-flex justify-content-end">
            <button className="me-3 px-5 py-2 Cancel-button fw-bold" type="reset">
              Cancel
            </button>
            <button  className="me-3 px-5 py-2 save-button fw-bold" onClick={updateRestaurant}>Save</button>
            <button type='submit' className="px-5 py-2 supprimer-profil-button fw-bold" onClick={handelDelete}>Supprimer Profil</button>
          </div>
        </div>
      </div>
    </div>
  );
}
