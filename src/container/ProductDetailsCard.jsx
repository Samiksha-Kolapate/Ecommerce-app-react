import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartSaga } from '../store/Cart/cart.action';
import Metapage from '../components/Layout/Metapage';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star icons

const ProductDetailsCard = (props) => {
    const { productData } = props;
    const dispatch = useDispatch();

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < Math.floor(rating)) {
            stars.push(<FaStar key={i} className="text-warning" />);
          } else if (i < rating) {
            stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
          } else {
            stars.push(<FaStar key={i} className="text-muted" />); // Empty star
          }
        }
        return stars;
      };

    return (
        <>
            <Metapage title={"product-details"}>
                <div className="container my-5 mx-0">
                    <div className="row no-gutters align-items-stretch" style={{ margin: 0 }}>
                        <div className="col-lg-6 col-md-12 d-flex justify-content-end align-items-center" style={{ padding: 0, margin: 0 }}>
                            <img src={productData?.image}
                                alt={productData?.title}
                                className="img-fluid h-100 border-0 shadow-sm p-3 rounded-0 bg-light"
                                style={{ objectFit: 'contain', maxHeight: '500px' }} />
                        </div>

                        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-start" style={{ padding: 0 }}>
                            <div className="card h-100 border-0 shadow-sm rounded-0 bg-light">
                                <div className="card-body">
                                    <h5 className="card-title text-success mb-3 fs-3" style={{ fontWeight: '400' }}>{productData?.title}</h5>

                                    <div className="d-flex align-items-center mb-2">
                                        {renderStars(productData?.rating?.rate)}
                                        <span className="ml-2">({productData?.rating?.count} reviews)</span>
                                    </div>

                                    <p className="text-muted mb-2 fs-5">Category: {productData?.category?.name}</p>

                                    <h4 className="text-success  mb-2 fs-5">${productData?.price}</h4>

                                    <p className="card-text mb-2 fs-6">{productData?.description}</p>

                                    

                                    <button
                                        className="btn btn-primary mt-3"
                                        onClick={() => dispatch(addToCartSaga(productData))}>
                                        Move to Cart
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
