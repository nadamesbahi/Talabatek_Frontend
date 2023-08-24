import React from 'react'

export default function CardCategorie({categories}) {
// const image='/images/categorie/'+categories.photo
    return (
        <div className="col-4 categorie-dashboard mb-5 position-relative ">
            <div className="image-cat py-2 px-1 position-absolute top-0 start-50 translate-middle">
                <img src={`http://127.0.0.1:8000/storage/categorie/image/${categories.photo }`} alt="image-plat" className="img-fluid rounded-circle w-100" />
            </div>
            <div className="text-center mt-5">
                <p className="py-2">{categories.nom}</p>
            </div>
        </div>
    )
}
