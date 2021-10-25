import React from "react";
import Collection from "./collection/Collection.component";

function FeaturedCollection() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <Collection
                routeTo="/"
                image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/COMPLETES-SKATEBOARD-BANNER_b0b66840-e4dc-4f9d-b4af-014149382cd4_x1200.jpg?v=1634824310"
                displayText="Completes"
            />
        </div>
    );
}

export default FeaturedCollection;
