import {React} from 'react'

export default function OrderTo({plat}) {
  return (
    <div>
      <div className="row mt-2">
            <div className="col d-flex align-items-center">
              <img src="/images/icons/deliver.svg" alt="image-deliver" className='img-livrer img-fluid' />
              <div className='fs-4 mt-4 row-deliver'><h3>Livrer A</h3></div>
            </div>
            <div className='hr-livrer mb-3'></div>
          </div>
          <div className="row mt-1">
            <div className="col mx-5 d-flex align-items-center">
              <img src={'/images/'+plat.photo_client} alt="image-client" className='image-client rounded-circle img-fluid' />
              <div className='mx-2'><h5>{plat.nom_client} {plat.prenom_client}</h5></div>
            </div>
          </div>
    </div>
  )
}
