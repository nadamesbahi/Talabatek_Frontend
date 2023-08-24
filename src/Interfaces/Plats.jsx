import React, { useEffect, useState } from 'react'
import CategorieCard from '../Interfaces/Composants-Interfaces/CategorieCard'
import PlatsComposant from '../Interfaces/Composants-Interfaces/PlatsComposant'
import { Link, useParams } from 'react-router-dom'

export default function Plats() {
  const [categories, setCategories] = useState([])
  const [restau, setRestau] = useState([])
  const [plats, setPlats] = useState([])
  const [restauFltr, setRestauFltr] = useState('')

  const { id } = useParams()
    

  useEffect(() => {
    //get SPECIF plats
    fetch(`http://127.0.0.1:8000/api/plat/${id}`)
    .then(res => res.json())
    .then(response => setPlats(response));

    //get all categories
    fetch(`http://127.0.0.1:8000/api/categories`)
    .then(res => res.json())
    .then(response => setCategories(response));    
  }, []);

  return (
    <section>
      <div className="container-fluid m-auto container-color">
        <div className="row">
          <div className="col pt-3 d-flex content-plats">
            <div className='div-border-left'></div>
            <h1 className='px-2'>Plats</h1>
          </div>
        </div>
        <div className="row gap-3 mt-3 justify-content-center">
          {
            categories.filter(c=>c.id==id).map((categorie, index) => {
              return <CategorieCard categories={categorie} key={index}/>
            })
          }
          
        </div>

        {/* <div className="row gap-5 mt-3 mb-4 mx-5 ">
          <div className="col mx-5">
            <div className='filter-restaurant mx-2'>
              <select name="restaurant" id="restaurant" className='border-0 p-2' value={restauFltr} onChange={(e) => setRestauFltr(e.target.value)}>
                {
                  restau.map((rest, index) => {
                    return <option value={rest.id} key={index}>{rest.nom}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div> */}
        <div className="row mt-5  mx-5">
          {
            plats.map((plat,index)=>{
              return <PlatsComposant key={index} plats={plat}/>
            })
          }
        </div>
      </div>
    </section>
  )
}
