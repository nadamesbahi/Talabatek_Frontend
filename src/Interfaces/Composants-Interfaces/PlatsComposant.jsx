import React from 'react'
import { Link } from 'react-router-dom'

export default function PlatsComposant({ plats }) {

    return (
        <Link className='Link' to={`/plat/${plats.id}`}>
            <div className=" d-flex justify-content-center content-categorie-plats">
                <div className="col-1 div-left-style-plat mx-3 mb-4"></div>
                <div className='col-8 d-flex flex-column flex-lg-row  justify-content-between  p-2 px-3 mb-4 categorie-platss'>
                    <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start ">
                        <div className="position-relative d-flex rounded-circle m-2 mt-1 ms-0 image-plats">
                            <img
                                src={`http://127.0.0.1:8000/storage/plat/image/${plats.photo}`}
                                alt="image-plat"
                                className="mx-auto w-100 rounded-circle img-fluid"
                            />
                            <div className="position-absolute top-50 start-50 translate-middle"></div>
                        </div>
                        <div className="d-flex flex-column justify-content-between ms-2">
                            <div className="fw-bold fs-5 mb-3 name-plat"><h4>{plats.nom}</h4></div>
                            <div className=" mb-2 plat-description">{plats.description}</div>
                        </div>
                    </div>
                    <div className="py-1 px-3 d-flex justify-content-center prix">
                        <h4>{plats.prix} DH</h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}
