import React, { useEffect, useState } from 'react'
import { MdRemoveCircle, MdAddCircle } from "react-icons/md";
import PlatsComposant from '../Interfaces/Composants-Interfaces/PlatsComposant';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
export default function Plat() {
    const [plats, setPlats] = useState([])
    const [platCategorie, setPlatC] = useState([])
    const [client, setClient] = useState([])
    const [qtt, setQtt] = useState(1);
    const [total, setTotal] = useState(0);

    const { id } = useParams()

    useEffect(() => {
        //get plat
        fetch(`http://127.0.0.1:8000/api/plats/${id}`)
            .then(res => res.json())
            .then(response => setPlats(response));

        //get plat meme categorie
        fetch(`http://127.0.0.1:8000/api/categorie/${id}`)
            .then(res => res.json())
            .then(response => setPlatC(response));

        //get client
        fetch(`http://127.0.0.1:8000/api/clients/1`)
            .then(res => res.json())
            .then(response => setClient(response));

    }, [])

    //getTotal
    useEffect(() => {
        let newtotal = 0;
        newtotal += plats.prix * qtt;
        setTotal(newtotal)
    }, [total, qtt, plats.prix])
    const addCart = async () => {
        const formData = new FormData();
        formData.append('idPlat', id)
        formData.append('idClient', client.id)
        formData.append('quantité_commander', qtt)
        formData.append('total', total)

        await axios.post(`http://127.0.0.1:8000/api/ajouterPlat`, formData)
            .then(({ data }) => {
                console.log(data.message)
            }).catch(({ response }) => {
                console.log(response.data.errors)
            })
    };



    return (
        <section>
            <div className="container-fluid m-auto container-color content-plat-page pb-5">
                <div className="row d-flex justify-content-between pb-4">
                    <div className="col-10 pt-3 d-flex content-categorie ">
                        <div className='div-border-left'></div>
                        <h1 className='px-2'>Plat</h1>
                    </div>
                    <div className="col-2 image-food">
                        <img src="/images/icons/food.svg" alt="image-food" className='img-fluid' />
                    </div>
                </div>
                <div className="detail-plat  mx-5 px-5 py-2">
                    <div className="row  justify-content-center">
                        <div className="col-4 mt-5 position-relative detail" >
                            <div className='d-flex justify-content-between fs-4 fw-bold mt-5'>
                                <div className='mt-3'>{plats.nom}</div>
                                <div className='mt-3'>{plats.prix} DH</div>

                            </div>
                            <div className='position-relative'>
                                <div className='text-center mt-3'>{plats.description}</div>
                                <div className='position-absolute top-5  translate-middle image-livrer end-0'>
                                    <img src="/images/icons/platLivrer.svg" alt="icons-deliver" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className='btn button-plat' onClick={() => setQtt(parseInt(qtt + 1))}> <MdAddCircle /></button>
                                <p className='mt-4 fs-3 quantité fw-bold'>{parseInt(qtt)}</p>
                                {qtt?<button className=' btn button-plat' onClick={() => setQtt(qtt - 1)}><MdRemoveCircle /></button>:<button className=' btn button-plat' onClick={() => setQtt(qtt - 1)} disabled><MdRemoveCircle /></button>}
                            </div>
                            <div className="p-3 position-absolute top-0 start-50 translate-middle image-detail-plat">
                                <img src={`http://127.0.0.1:8000/storage/plat/image/${plats.photo}`} alt="image-plat" className="img-fluid rounded-circle" />
                            </div>

                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col d-flex justify-content-center">
                            <Link className='Link' to={`/cart/${id}/${qtt}/${client.id}`}><button className='btn button-add' type='submit' onClick={addCart}>Add to cart</button></Link>
                        </div>
                    </div>
                    <div className="row mt-4 mx-5 mb-4">
                        <div className="col">
                            <div className='fw-bold fs-2'>Meme Catégorie</div>
                        </div>
                    </div>
                    <div className="row mt-5  mx-5">
                        {
                            platCategorie.map((platt, index) => {
                                return <PlatsComposant key={index} plats={platt} />
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
