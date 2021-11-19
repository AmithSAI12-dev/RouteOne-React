import React from "react";
import { connect } from "react-redux";
import Collection from "./collection/Collection.component";

function FeaturedCollection({ collections }) {
    return (
        <div className="d-flex align-items-center justify-content-center">
            {/* COLLECTION COMPONENT */}
            {collections.map((props) => (
                <Collection key={props.id} {...props}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    collections: state.featuredCollectionReducer.featured_collection,
});

export default connect(mapStateToProps)(FeaturedCollection);
