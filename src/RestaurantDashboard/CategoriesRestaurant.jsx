import React, { useState, useEffect } from 'react'
import DashbordCards from './Composants-Dashboard-Restaurant/DashboardCards'
import CardCategorie from './Composants-Dashboard-Restaurant/CardCategorie'
import AjouterCategorie from './AjouterCategorie'

export default function CategoriesRestaurant() {
    const [isAdded, setIsAdded] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        //get all categories
        fetch(`http://127.0.0.1:8000/api/categories`)
            .then(res => res.json())
            .then(response => setCategories(response));
    }, []);
    const filterUniqueByProperty = (arr, property) => {
        const uniqueItems = [];
        const encountered = new Set();

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            const itemProperty = item[property];

            if (!encountered.has(itemProperty)) {
                uniqueItems.push(item);
                encountered.add(itemProperty);
            }
        }
        return uniqueItems;
    }
    const uniqueCategories = filterUniqueByProperty(categories, 'nom');
    return (
        <section>
            <div className="container content-categories-restaut">
                <div className="fs-3 fw-bold black-color bg-light d-flex align-items-center py-1 ps-3 rounded-pill">
                    <img src="images/icons/categorie.svg" alt="icon-categorie" className='image-icon2' />
                    <span className='mx-2'>/</span>
                    Catégories
                </div>
                <DashbordCards />
                <div className="row my-4">
                    <div className="col-8">
                        <h1>Catégories</h1>
                    </div>

                    <div className="col-4 d-flex align-items-center content-ad">
                        <h6 onClick={() => setIsAdded(true)} className='fw-bold'>Tu veux ajouter nouveau catégorie? </h6>
                    </div>
                </div>
                <div className="row mt-5 justify-content-around" >
                    {
                        uniqueCategories.map((categorie, index) => {
                            return <CardCategorie categories={categorie} key={index} />
                        })
                    }
                </div>
                {isAdded ? <AjouterCategorie /> : null}

            </div>
        </section>
    )
}
