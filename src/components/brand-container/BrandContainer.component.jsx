import React from "react";
import { connect } from "react-redux";
import Button from "../button/Button.component.jsx";
import Brand from "./brand/Brand.component.jsx";

function BrandContainer({ brands }) {
    return (
        <section className="brands">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                    {/* BRAND COMPONENT */}
                    {brands.map((props) => (
                        <Brand key={props.id} {...props} />
                    ))}
                </div>
                <div className="brands__btn">
                    {/* BUTTON COMPONENT */}
                    <Button text="explore brands" />
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    brands: state.brandReducer.brands,
});

export default connect(mapStateToProps)(BrandContainer);
