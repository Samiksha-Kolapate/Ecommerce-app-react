import React from 'react'
import Metapage from '../components/Layout/Metapage'
import { connect } from "react-redux";
import WishlistItem from '../container/WishlistItem';


const Wishlist = (props) => {
    return (
        <>
            {/* <Metapage title={"My Wishlist"}> */}

                <div className="container m-5 p-5">
                    <div className="row">
                        <div className="col-lg-12">
                            {props.wishlist.length === 0 ? (
                                <h2 className="text-center text-muted">Your Wishlist is Empty!! 😞</h2>
                            ) : (
                                <WishlistItem />
                            )}
                        </div>

                        
                    </div>
                </div>
            {/* </Metapage> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlistProduct.wishlist
    };
};


export default connect(mapStateToProps)(Wishlist);