import React, { useEffect, useState } from 'react'
import CategorieCard from '../Interfaces/Composants-Interfaces/CategorieCard'
export default function Catégorie() {
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
            <div className="container-fluid m-auto container-color pb-5">
                <div className="row d-flex justify-content-between">
                    <div className="col-10 pt-3 d-flex content-categorie ">
                        <div className='div-border-left'></div>
                        <h1 className='px-2'>Catégories</h1>
                    </div>
                    <div className="col-2">
                        <img src="/images/icons/shopping.svg" alt="image-shopping" className='' />
                    </div>
                </div>
                <div className="row gap-3 mt-3 justify-content-evenly py-3">
                    {
                        uniqueCategories.map((categorie, index) => {
                            return <CategorieCard categories={categorie} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
