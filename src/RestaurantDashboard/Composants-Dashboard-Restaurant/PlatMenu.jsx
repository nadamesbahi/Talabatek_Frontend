import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function PlatMenu({plats,refresh,setrefresh}) {

    //delete plat 
    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/api/plats/${id}`,
          { method: 'delete' });
          setrefresh(!refresh)
      }
    return (
        <div className="col-12 col-lg-6 col-xl-4 col-xxl-3 card-plat py-3 mx-auto">
            <div class="multi-button">
           <button onClick={() => handleDelete(plats.id)}><AiTwotoneDelete /></button>
               <Link className='Link' to={'/modifier_plat/'+plats.id}> <button><MdModeEdit /></button></Link>
            </div>
            <div class="content-plat">
                <div class="image-plat d-flex justify-content-center py-2 px-4">
                    <img src={`http://127.0.0.1:8000/storage/plat/image/${plats.photo}`} alt="image-plat" className="img-fluid" />
                </div>
                <div className="description-plat my-3 py-4 " >
                    <p className="fw-light">{plats.nom}</p>
                    <h2>{plats.prix} DH</h2>
                </div>
            </div>
        </div>
    )
}
