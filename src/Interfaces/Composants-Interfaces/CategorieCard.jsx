import React from 'react'
import { Link } from 'react-router-dom'

export default function CategorieCard({categories}) {
    return (
        <div className="col-3 py-5 mt-5 position-relative categorie">
            <Link className='Link' to={`/plats/${categories.id}`}>
                <div className='text-center'><p>{categories.nom}</p></div>
                <div className="p-3 position-absolute top-0 start-50 translate-middle div-image-categorie ">
                    <img src={'/images/categorie/'+categories.photo} alt="image-categorie" className=" img-fluid rounded-circle" />
                </div>
            </Link>

        </div>

    )
}
