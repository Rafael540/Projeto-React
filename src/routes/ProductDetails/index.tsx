import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import CardDetails from "../../components/CardDetails";
import HeadClient from "../../components/HeaderClient";
import type { ProductDTO } from "../../models/product";

const product: ProductDTO = {
    id:2,
    name: "Smart Tv",
    description: "Está tv é muito bonita",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
    price: 2550.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },

         {
            id: 3,
            name: "Computadores"
        }
    ]
}

import './styles.css'

export default function ProductDetails() {
    return (<>
        <HeadClient />
        <main>
            <section id="product-details-section" className="dsc-container">
                <CardDetails product ={product}/>
                <div className='dsc-btn-page-container'>
                    <ButtonPrimary />
                    <ButtonInverse />
                </div>
            </section>
        </main>
    </>);
}