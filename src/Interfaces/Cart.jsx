import React, { useEffect, useState } from 'react'
import PlatCart from '../Interfaces/Composants-Interfaces/PlatCart'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
export default function Cart() {
    const [plats, setPlats] = useState([]);
    const [cart, setCart] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const { qtt } = useParams()
    const [quantite, setQtt] = useState(parseInt(qtt));
    const { id } = useParams()
    const { idC } = useParams()
    const [Stotal, setStotal] = useState();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        //get plat 
        fetch(`http://127.0.0.1:8000/api/afficherplat/${id}`)
            .then(res => res.json())
            .then(response => setPlats(response));
        //get cart
        fetch(`http://127.0.0.1:8000/api/detailcommandeClient/${idC}`)
            .then(res => res.json())
            .then(response => setCart(response));
    }, [refresh])

    //calcul total
    useEffect(() => {
        const calculatedTotal = cart.reduce((acc, plat) => acc + (plat.prix * quantite), 0);
        setStotal(calculatedTotal);
    }, [plats, quantite,total]);

    //get update detailCmnd
    const update = async () => {
        const formData = new FormData();
        formData.append('_method', 'PATCH')
        formData.append('quantité_commander', quantite)
        formData.append('total', Stotal+parseInt(15))
        await axios.post('http://127.0.0.1:8000/api/updatePlat/' + id, formData)
            .then(({ data }) => {
                console.log(data)
            }).catch(({ response }) => {
                console.log(response.data.errors)
            })
    }
    return (
        <section>
            <div className="container-fluid m-auto container-color py-3 pb-5">
                <div className="row gap-3">
                    <div className="col pt-3 d-flex content-adresse position-relative">
                        <div className='div-border-left'></div>
                        <h1 className='px-2'>Cart</h1>
                        <div className="position-absolute top-100 end-0 translate-middle image-livrer2">
                            <img src="/images/icons/cart-1.svg" alt="image-livrer" className="w-50 img-fluid" />
                        </div>
                    </div>
                </div>
                {cart.length === 0 ? (<div className='d-flex justify-content-center py-3'>
                    <img src="/images/icons/cart-empty.svg" alt="Panier vide" style={{ opacity: '0.5' }} /></div>
                ) : (
                    <div>
                        {
                            cart.map((cart, index) => {
                                return <PlatCart cart={cart} key={index} refresh={refresh} setrefresh={setrefresh} quantite={quantite} setQtt={setQtt} />
                            })
                        }
                        <div className="content-cart-pay mx-5 my-5 ">
                            <div className="row gap-3 mt-5  ">
                                <div className='d-flex justify-content-around '>
                                    <div className=" d-flex ">
                                        <div className='fs-5 mt-3'>Sous-Total</div>
                                    </div>
                                    <div className='sous-total fs-5'>{Stotal} DH</div>
                                </div>
                            </div>
                            <div className="row gap-3 mt-3  ">
                                <div className='d-flex justify-content-around'>
                                    <div className=" d-flex ">
                                        <div className='fs-5'>Livraison</div>
                                    </div>
                                    <div className='sous-total2 fs-5'>15 DH</div>
                                </div>
                            </div>
                            <div className="row gap-3 mt-3  ">
                                <div className='d-flex justify-content-around'>
                                    <div className=" d-flex ">
                                        <div className='fs-5'><h3>Total</h3></div>
                                    </div>
                                    <div className='sous-total2'><h3>{Stotal + parseInt(15)} DH</h3></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <Link className='Link' to={`/order/${id}/${quantite}`}><button className='btn button-addCart px-3 my-3' onClick={update}>Pay {Stotal + parseInt(15)} DH</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
