import React, { useEffect, useState } from 'react'
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { AiTwotoneDelete } from "react-icons/ai";
import { useParams } from 'react-router-dom';
export default function PlatCart({ cart, refresh, setrefresh, quantite, setQtt }) {
    const { id } = useParams()
    const [plat, setPlat] = useState([]);

    useEffect(() => {
        //button suppr panier
        const handleClick = () => {
            const buttons = document.getElementsByClassName("button-supp-cart");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.display = "block";
            }
        };
        const cartPlatElements = document.getElementsByClassName("content-cart-plat");
        for (let i = 0; i < cartPlatElements.length; i++) {
            cartPlatElements[i].addEventListener("click", handleClick);
        }
        //get plat
        fetch(`http://127.0.0.1:8000/api/afficherplat/${id}`)
            .then(res => res.json())
            .then(response => setPlat(response));
    }, [refresh]);
    //deelete
    const handleDelete = () => {
        fetch(`http://127.0.0.1:8000/api/supprimerPlat/${id}`,
            { method: 'delete' })

        setrefresh(!refresh)
    }

    return (
        <div className="row  my-1 ">
            <div className="col d-flex justify-content-center  content-cart-plat mt-3">
                <div className='d-flex flex-column flex-lg-row  justify-content-between  p-1 px-3 mb-4 categorie-platss ' >
                    <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                        <div className="position-relative d-flex rounded-circle m-2 mt-0 ms-0 image-plats">
                            <img
                                src={`http://127.0.0.1:8000/storage/plat/image/${cart.photo}`}
                                alt="image-plat"
                                className="mx-auto w-100 rounded-circle img-fluid"
                            />
                            <div className="position-absolute top-50 start-50 translate-middle"></div>
                        </div>
                        <div className="d-flex flex-column justify-content-between ms-2">
                            <div className="fw-bold fs-5 mb-5 name-plat"><h4>{cart.nom_plat}</h4></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <div className=" mt-4 prix mx-4 d-flex justify-content-center">
                            <h4>{cart.prix} DH</h4>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className='btn button-plat' onClick={() => setQtt(quantite + 1)}> <MdAddCircle /></button>
                            <p className='mt-4 fs-3 quantité fw-bold'>{quantite}</p>
                            {quantite ? <button className=' btn button-plat' onClick={() => setQtt(quantite - 1)}><MdRemoveCircle /></button> : <button className=' btn button-plat' onClick={() => setQtt(quantite - 1)} disabled><MdRemoveCircle /></button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col button-supp-cart text-center my-5">
                <button className='btn' onClick={handleDelete}><AiTwotoneDelete /></button>
            </div>
        </div>

    )
}
