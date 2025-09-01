/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css"
import * as productService from "../../../services/product-service"
import { useContext, useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import * as cartService from "../../../services/cart-service"
import { ContextCartCount } from "../../../utils/context-carts";
import CardDetails from "../../../components/CardDetails";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";


export default function ProductDetails() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const params = useParams();

    const navigate = useNavigate();

    const {setcontextCartCount} = useContext(ContextCartCount);


    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
            })

            .catch(() => {
                navigate("/")
            });

    }, [])

    function handleByClick() {
        if (product) {
            cartService.addProduct(product);
            setcontextCartCount(cartService.getCart().items.length);
            navigate("/cart")
        }


    }

    return (
        <>

            <main>
                <section id="product-details-section" className="dsc-container">
                    {
                        product &&
                        <CardDetails product={product} />
                    }

                    <div className='dsc-btn-page-container'>
                        <div onClick={handleByClick}>
                            <ButtonPrimary text="Comprar" /></div>

                        <Link to="/">
                            <ButtonInverse text="Inicio" />
                        </Link>

                    </div>
                </section>
            </main>
        </>);
}
