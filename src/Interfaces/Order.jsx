import React, { useEffect, useState } from 'react'
import OrderTo from '../Interfaces/Composants-Interfaces/OrderTo';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function Order() {
  const [plats, setPlats] = useState([])
  const [detailCmnd, setCmnd] = useState([])
  const [refresh, setrefresh] = useState(false)
  const [isAdd, setIsAdd] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { id } = useParams()
  const { quantite } = useParams()
  const navigate = useNavigate()

  // const [isEditing, setIsEditing] = useState(false);
  // const handleEditClick = () => {
  //   setIsEditing(true);
  // };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/afficherplat/${id}`)
      .then(res => res.json())
      .then(response => setPlats(response));

    //get commandes client
    fetch(`http://127.0.0.1:8000/api/detailcommandeClient/1`)
      .then(res => res.json())
      .then(response => setCmnd(response));
  }, [refresh])

  //delete plat
  const handleDelete = (idPlat) => {
    fetch(`http://127.0.0.1:8000/api/supprimerPlat/${idPlat}`,
      { method: 'delete' });
    setrefresh(!refresh)
  }
  const myObject = { mode_paiement: selectedOption, total: detailCmnd.total, client: detailCmnd.idClient, plat: detailCmnd.idPlat, qtt: detailCmnd.quantité_commander };
  const totals = detailCmnd.map(p => p.total)
  const sommeTotal = totals.reduce((acc, total) => acc + total, 0);

  return (
    <section>
      <div className="container-fluid m-auto container-color ">

        <div className="row gap-3">
          <div className="col pt-3 d-flex content-adresse">
            <div className='div-border-left'></div>
            <h1 className='px-2'>Order</h1>
          </div>
        </div>
        <div className="content-order">
          <OrderTo plat={plats} />
          <div className="row mt-3">
            <div className="col d-flex align-items-center">
              <img src="/images/icons/order.svg" alt="image-deliver" className='mt-1 img-livrer img-fluid' />
              <div className='fs-4 mt-3 row-deliver'><h3>Votre Commande</h3></div>
            </div>
            <div className='hr-livrer mb-3'></div>
          </div>
          {
            detailCmnd.map((detail, index) => {
              return (
                <div className="row mt-1" key={index}>
                  <div className="col mx-5 d-flex cart-commande">
                    <span className='rounded-circle px-1 d-flex align-self-center'>x {quantite}</span>
                    <div className='mx-2 fs-5'>{detail.nom_plat}</div>
                  </div>
                  {/* <div className="col d-flex button-cart "> */}
                  {/* {isEditing ? (
                      <div className="d-flex justify-content-center">
                        <button className='btn button-plat' > <MdAddCircle /></button>
                        <p className='mt-4 fs-3 quantité fw-bold'>3</p>
                        <button className=' btn button-plat'><MdRemoveCircle /></button>
                      </div>
                    ) : (
                      <button className='mx-2 edit' onClick={handleEditClick}><MdModeEdit /></button>

                    )} */}
                  {/* <button className='mx-2 delete' onClick={() => handleDelete(detail.idPlat)}><AiTwotoneDelete /></button>
                  </div> */}
                </div>
              )
            })
          }
          <div className="row mt-1">
            <div className="col mx-5">
              <h5 className='mx-5 fw-bold mt-2 total'>Total</h5>
            </div>
            <div className="col">
              <h5 className='mx-3 fw-bold mt-2' style={{ color: '#F57138' }}>{sommeTotal} DH</h5>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col d-flex align-items-center">
              <img src="/images/icons/method-pay.svg" alt="image-deliver" className='img-livrer img-fluid' />
              <div className='fs-4 mt-4 row-deliver'><h3>Methode de paiement</h3></div>
            </div>
            <div className='hr-livrer mb-3'></div>
          </div>
          <div className="row mt-2 mx-5">
            <form className='form-order d-flex '>
              <div className="col-10 radiobtn ">
                <input type="radio" id="cash"
                  name="paiement" value="Cash" onChange={(e) => setSelectedOption(e.target.value)} />
                <label htmlFor="cash" >Cash </label>
              </div>
              {
                isAdd ? (navigate('/paiement'),
                  <div className="col-10 radiobtn mx-3" >
                    <input type="radio" id="masterCard"
                      name="paiement" value="Carte" onChange={(e) => setSelectedOption(e.target.value)} />
                    <label htmlFor="masterCard">Carte bancaire</label>
                  </div>) : (
                  <div className="col-10 radiobtn mx-3" onClick={() => setIsAdd(true)}>
                    <input type="radio" id="carte"
                      name="paiement" value="Carte" onChange={(e) => setSelectedOption(e.target.value)} />
                    <label htmlFor="carte">Carte bancaire</label>
                  </div>
                )
              }
            </form>
          </div>
          <div className="row py-4">
            <div className="col d-flex justify-content-center">
              <Link className='Link' to={`/adresse/${encodeURIComponent(JSON.stringify(myObject))}`}> <button className='btn button-addCart px-3'>Commander</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
