import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartSaga } from '../store/Cart/cart.action';
import Metapage from '../components/Layout/Metapage';

const ProductDetailsCard = (props) => {
    const { productData } = props;
    const dispatch = useDispatch();

    const renderStars = (rating) => {
                const stars = [];
                for (let i = 0; i < 5; i++) {
                    if (i < Math.floor(rating)) {
                        stars.push(<i key={i} className="fas fa-star text-warning"></i>);
                    } else {
                        stars.push(<i key={i} className="far fa-star text-warning"></i>);
                    }
                }
                return stars;
            };

    return (
        <>
            <Metapage title={"product-details"}>
                <div className="container my-5">
                 <div className="row no-gutters align-items-stretch"  style={{ margin: 0 }}>
                     <div className="col-lg-6 col-md-12 d-flex justify-content-end align-items-center" style={{ padding: 0, margin:0 }}>
                         <img src={productData?.images} 
                         alt={productData?.title}
                          className="img-fluid h-100 border-0 shadow-sm"
                          style={{ objectFit: 'contain', maxHeight: '500px' }} />
                     </div>

                     <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-start" style={{ padding: 0 }}>
                         <div className="card h-100 border-0 shadow-sm">
                             <div className="card-body">
                                 <h5 className="card-title font-weight-bold text-dark">{productData?.title}</h5>

                                 <p className="text-muted">Category: {productData?.category?.name}</p>

                                 <h4 className="text-success">${productData?.price}</h4>

                                    <p className="card-text">{productData?.description}</p>

                                   <div className="d-flex align-items-center">
                                       {renderStars(productData?.rating?.rate)}
                                       <span className="ml-2">({productData?.rating?.count} reviews)</span>
                                   </div>

                                   <button 
                                    className="btn btn-primary mt-3"
                                    onClick={() => dispatch(addToCartSaga(productData))}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </Metapage>
        </>
    );
}


export default ProductDetailsCard;
