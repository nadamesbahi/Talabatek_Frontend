import React, { useEffect, useState } from 'react'
import OrderTo from '../Interfaces/Composants-Interfaces/OrderTo'
import { Link, useParams } from 'react-router-dom'
import InputField from '../RestaurantDashboard/Composants-Dashboard-Restaurant/InputField'

export default function Paiement() {
  const [plats, setPlats] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/afficherplat/${id}`)
      .then(res => res.json())
      .then(response => setPlats(response));
  }, [])
  console.log(plats);

  return (
    <section>
      <div className="container-fluid m-auto container-color">
        <div className="row gap-3">
          <div className="col pt-3 d-flex content-adresse">
            <div className='div-border-left'></div>
            <h1 className='px-2'>Paiement</h1>
          </div>
        </div>
        <div className="content-pay">

          <OrderTo plat={plats} />
          <div className="row mt-3">
            <div className="col d-flex align-items-center">
              <div className='fs-4 mt-3 px-5 ml-5 row-deliver' id='carte-info'><h3>Votre Adresse</h3></div>
            </div>
            <div className='hr-livrer mb-3' ></div>
          </div>
          <form className="px-5 form-paiement">
            <div class="row mt-4 ">
              <div class="col ">
                <InputField id="Adresse" label="Adresse" type="text" />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col d-flex align-items-center">
              <div className='fs-4 px-5 ml-5 row-deliver' id='carte-info'><h3>Informations Carte</h3></div>
            </div>
            <div className='hr-livrer mb-3' ></div>
          </div>
          <form className='px-5 form-paiement'>
            <div class="row mt-4">
              <div class="col">
                <InputField id="Nombre de Carte" label="Nombre de Carte" type="text" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <InputField id="CVV" label="CVV" type="text" />
              </div>
              <div class="col">
                <InputField id="Date Expirer" label="Date Expirer" type="text" />
              </div>
            </div>
            <div class="row  py-4">
              <div class="col d-flex justify-content-center">
                <Link className='Link' to={'/succes'}><button className="me-3 px-5 py-2 confirm-button fw-bold">
                  Confirmer
                </button></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
