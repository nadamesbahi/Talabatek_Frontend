import React, { useState } from "react";
import InputField from "../RestaurantDashboard/Composants-Dashboard-Restaurant/InputField";
import axios from "axios";

export default function AjouterCategorie() {
  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const [photo, setphoto] = useState("");
  const [nom, setnom] = useState("");
  const [refresh,setrefresh]=useState(false)


  //add categorie
  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('nom', nom)
    formData.append('photo',photo)

    await axios.post('http://127.0.0.1:8000/api/categories', formData)
      .then(({ data }) => {
        console.log(data)
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
      <div className="mb-2  d-flex justify-content-between align-items-center">
        <div className="fs-3 fw-bold black-color py-1 mb-3 "><h1>Ajouter Catégorie</h1></div>
      </div>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div class="row mt-3">
          <div class="col">
            <InputField id="Nom" label="Nom" type="text" val={nom} newval={setnom}/>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <input type="file"  id="photo" onChange={(event) => setphoto(event.target.files[0])}/>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col d-flex justify-content-end">
            <button className="me-3 px-5 py-2 Cancel-button fw-bold">
              Cancel
            </button>
            <button type="submit" className="me-3 px-5 py-2 save-button fw-bold" onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
