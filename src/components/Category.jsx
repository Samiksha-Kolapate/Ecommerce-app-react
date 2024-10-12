import React from 'react'
import { useDispatch } from 'react-redux';
import { categoryListActionSaga, sagaProductList } from '../store/Products/ProductAction.js';

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
            <div className='position-fixed'>
                <h4 className="text-center">Filter By Category</h4>
                <div className="d-flex flex-column mb-2 p-2 g-1">
                    <ul className='list-unstyled'>
                        <li
                            key="All"
                            className="p-3 border-bottom bg-gray text-center  cursor-pointer"
                            onClick={() => dispatch(sagaProductList(10))}
                        >
                            <h6 className="m-2"> All </h6>
                        </li>
                        {categories?.map((c) => (
                            <li
                                className='p-3 border-bottom bg-gray text-center cursor-pointer'
                                key={c.id}
                                onClick={() => dispatch(categoryListActionSaga(c.id))}
                            >
                                <h6 className="m-2"> {c.name} </h6>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
