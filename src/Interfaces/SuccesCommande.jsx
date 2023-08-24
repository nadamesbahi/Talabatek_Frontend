import axios from 'axios';
import React, { useState } from 'react'

export default function SuccesCommande() {
    const [commentr,setcommentr]=useState()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('texte', commentr)
       
        await axios.post('http://127.0.0.1:8000/api/commentaires', formData)
          .then(({ data }) => {
            console.log(data.message)
          }).catch(({ response }) => {
            if (response.status == 422) {
              console.log(response.data.errors)
            } else {
              console.log(response.data.message)
            }
          })
          setcommentr('')
      };
    return (
        <section>
            <div className="container-fluid m-auto container-color">
                <div className="row gap-3">
                    <div className="col content-succes">
                        <div className="pt-3 image-successfully text-center" >
                            <img src="/images/icons/successfully.svg" alt="image-successfully" className='img-fluid'/>
                        </div>
                        <h4 className='text-center pb-3'>Commande avec succes !</h4>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit} className='commentaire-form d-flex justify-content-center text-center form-commentaire'>
                            <div className='d-inline-block'>
                                <div class="wrap-text-area">
                                    <textarea class="text-area" value={commentr} onChange={(e)=>setcommentr(e.target.value)} name="commentaire" placeholder="Commentaire..."></textarea>
                                </div>
                                <div class="commentaire-form-btn d-flex justify-content-center py-4">
                                    <button className='btn btn-envoyer-commentaire' type='submit'>
                                        <div className="icon-reply">
                                            <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <span>Envoyer</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </section>
    )
}
