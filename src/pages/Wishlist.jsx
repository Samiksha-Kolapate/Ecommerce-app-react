import React from 'react'
import Metapage from "../Components/common/Metapage";
import { connect } from "react-redux";
import WishlistItem from '../Container/WishlistItem';


const Wishlist = (props) => {
    return (
        <>
            <Metapage title={"My Wishlist"}>

                <div className="container">
                    {props.wishlist.length === 0 ? (
                        <h2 className="text-center text-muted">Your Wishlist is Empty!! 😞</h2>
                    ) : (
                        <div className="row d-flex flex-wrap">
                            <div className="col-lg-8 col-md-6 col-sm-12">
                                <WishlistItem />
                            </div>
                        </div>
                    )}
                </div>
            </Metapage>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlistProduct.wishlist
    };
};


export default connect(mapStateToProps)(Wishlist);