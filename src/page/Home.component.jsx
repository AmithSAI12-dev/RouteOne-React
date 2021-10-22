import React from "react";
import Banner from "../components/banner/Banner.component";
import BrandContainer from "../components/brand-container/BrandContainer.component";

function Home() {
    return (
        <main>
            <Banner
                height="65vh"
                image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Half-Term-Sale-22-10.21-Banner-Desktop.jpg?v=1634888193"
                subTitle='Over 3000 Lines Reduced'
                title='Up To 65% Off'
                button='shop now'
            />
            <BrandContainer />
        </main>
    );
}

export default Home;
