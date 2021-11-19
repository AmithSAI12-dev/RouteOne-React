import React from "react";

function Product() {
    return (
        <div className={`product text--center`}>
            {/* PRODUCT IMAGE */}
            <div className="product__container">
                {/* PRODUCT VARIANTS */}
                <div className="product__variants">
                    <p className="text--uppercase">quick add</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="d-flex align-items-center justify-content-center">
                            one size
                        </span>
                    </div>
                </div>
            </div>
            {/* PRODUCT INFO */}
            <div className="product__info">
                <a href="/">
                    <h2 className="title--xs">
                        Route One Tonal Dad Cap - Black
                    </h2>
                </a>
                <p className="product__price">$24.99</p>
            </div>
        </div>
    );
}

export default Product;
