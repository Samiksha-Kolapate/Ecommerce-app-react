import React from 'react'
import { useDispatch } from 'react-redux';
import { categoryListActionSaga } from '../store/Products/product.action';


export const Category = () => {
    const dispatch = useDispatch();

    const categories = [
        { id: 1, name: "Clothes" },
        { id: 2, name: "Electronics" },
        { id: 3, name: "Furniture" },
        { id: 4, name: "Footware" },
        { id: 5, name: "Others" },
    ];

    return (
        <>
            <h4 className="text-center mb-2">Filter By Category</h4>
            <div className="d-flex flex-column mb-3 p-3 g-1">
                {categories?.map((c) => (
                    <li
                        className='p-3 border-bottom bg-gray'
                        key={c.id}
                        onClick={() => dispatch(categoryListActionSaga(c.id))}
                        style={{cursor:"pointer", listStyle:"none"}}
                    >
                        <h6 className="m-2"> {c.name} </h6>
                    </li>
                ))}
            </div>
        </>
    )
}
