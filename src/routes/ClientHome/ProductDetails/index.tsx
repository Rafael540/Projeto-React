import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import CardDetails from "../../../components/CardDetails";
import * as productService from '../../../services/product-service'
import "./styles.css"


export default function ProductDetails() {

    const params = useParams();
    const product = productService.findById(Number(params.productID));

    return (
        <>

            <main>
                <section id="product-details-section" className="dsc-container">
                    {
                        product &&
                        <CardDetails product={product} />
                    }

                    <div className='dsc-btn-page-container'>
                        <ButtonPrimary text="Comprar" />
                        <ButtonInverse text="Inicio" />
                    </div>
                </section>
            </main>
        </>);
}