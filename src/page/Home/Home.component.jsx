import React from "react";
import Banner from "../../components/banner/Banner.component";
import BrandContainer from "../../components/brand-container/BrandContainer.component";
import FeaturedCollection from "../../components/featured-collection/FeaturedCollection.component";
import IntroText from "../../components/intro-text/IntroText.component";

function Home() {
    return (
        <main>
            <Banner
                height="65vh"
                image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Half-Term-Sale-22-10.21-Banner-Desktop.jpg?v=1634888193"
                subTitle="Over 3000 Lines Reduced"
                title="Up To 65% Off"
                button="shop now"
            />
            <BrandContainer />
            <section id="category" className="pt-45">
                <div className="container">
                    <IntroText title="Latest Skateboard" subTitle="Discover" />
                    <FeaturedCollection />
                </div>
            </section>
        </main>
    );
}

export default Home;
