import React, { useState, useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import '../styles/Product.css'
import Metapage from "../components/Layout/Metapage";
import ProductCard from "../container/ProductCard";
import { sagaProductList } from "../store/Products/product.action.js"
import { Category } from "../components/Category.jsx";



const Productlist = (props) => {
    // const [checked, setChecked] = useState([]);
    const dispatch = useDispatch();





    
    useEffect(() => {
        props.productApiAction();
    }, []);

    /* const handleFilter = (c_id) => {
        const checkedList = checked.includes(c_id) ? checked.filter((id) => id !== c_id) : [...checked, c_id];
        setChecked(checkedList);

        if (checkedList.length > 0) {
            dispatch(categoryListActionSaga(checkedList));
        }
        else {
            dispatch(props.productApiAction());
        }
    };
 */
    return (
        <>
            <Metapage title="Home - eShopping">
                <div className="container-fluid row mt-3 home-page">
                    <div className="col-md-2 mx-3 filters">
                        <Category />

                        {/* <div className="d-flex flex-column">
                            {categories?.map((c) => (
                                <Checkbox
                                    key={c.id}
                                    onChange={() => handleFilter(c.id)}
                                    checked={checked.includes(c.id)}
                                >
                                    {c.name}
                                </Checkbox>
                            ))}
                        </div> */}
                        
                        {/* <div className="d-flex flex-column">
                            <button
                                className="btn btn-danger"
                                onClick={() => window.location.reload()}
                            >
                                Reset Filters
                            </button>
                        </div> */}
                    </div>

                    <div className="col-md-9 mx-4 justify-content-center">
                        <h1 className="text-center">All Products</h1>
                        <div className="d-flex flex-wrap justify-content-center">
                            {
                                props.productListData?.map((product, index) => {
                                    return (
                                        <ProductCard
                                            key={`${product.id}-${index}`}
                                            product={product}
                                            isAuthenticated={props.isAuthenticated}
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

            </ Metapage>

        </>
    )
}



const mapStateToProps = (state) => {
    return {
        productListData: state.products.ListOfItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            productApiAction: sagaProductList,
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Productlist);

