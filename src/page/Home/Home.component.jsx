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
                image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Black-Friday-Footwear-20.11.21-Banner-Desktop.jpg?v=1637340641"
                button="shop now"
            />
            <BrandContainer />
            <section id="routeone-section-3" className="pt-100 container ">
                <div className="grid gridcol--2 gridrow--1">
                    <Banner
                        height="65vh"
                        image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/WOMENS_CTA_x1200.jpg?v=1636728568"
                        title="shop women"
                        button="shop now"
                        nocontainer={true}
                        color="white"
                    />
                    <Banner
                        height="65vh"
                        image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/MENS_CTA_x1200.jpg?v=1636728648"
                        title="shop Men"
                        button="shop now"
                        nocontainer={true}
                        color="white"
                    />
                </div>
            </section>
            <section id="routeone-section-4" className="pt-100">
                <Banner
                    height="70vh"
                    image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/christmas-main-banner.jpg?v=1636642082"
                    title="Christmas at
                    Route One"
                    button="discover"
                    color="white"
                />
            </section>
            <section id="routeone-section-5" className="pt-100">
                <div className="container">
                    <FeaturedCollection />
                </div>
            </section>
            <section id="routeone-section-6" className="pt-100">
                <Banner
                    height="70vh"
                    image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/lakai-main-banner_1.jpg?v=1637333021"
                    subTitle="new in"
                    title="Lakai"
                    button="shop now"
                    color="white"
                />
            </section>
            <section id="routeone-section-7" className="pt-100 container ">
                <div className="grid gridcol--2 gridrow--1">
                    <Banner
                        height="65vh"
                        image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/lovenskate-banner_1_x1200.jpg?v=1637333181"
                        subTitle="just landed"
                        title="Lovenskate 20 year collection"
                        button="shop now"
                        nocontainer={true}
                        color="white"
                    />
                    <Banner
                        height="65vh"
                        image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/enjoi-small-banner-with-text_1_x1200.jpg?v=1637333190"
                        subTitle="new in"
                        title="Enjoi x WWE"
                        button="shop now"
                        nocontainer={true}
                        color="white"
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;
