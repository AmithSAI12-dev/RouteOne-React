import React from "react";
import Button from "../button/Button.component.jsx";
import { brands } from "./brand.js";

function BrandContainer() {
    return (
        <section className="brands">
            <div className="container d-flex align-items-center justify-content-between">
                {brands.map(({ id, name, image }) => (
                    <a href="/" key={id}>
                        <img src={image} alt={name} />
                    </a>
                ))}
                <div className="brands__btn">
                    <Button text='explore brands'/>
                </div>
            </div>
        </section>
    );
}

export default BrandContainer;
