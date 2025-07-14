

import ButtonInverse from '../../components/ButtonInverse';
import CardItemList from '../../components/CardItemList';
import HeadClientName from '../../components/HeaderClientName'
import './styles.css'


export default function Cart() {
    return (
        <>
            <HeadClientName />
            <main>
                <section id="cart-container-section" className="dsc-container">
                    <div className="dsc-cart">
                        <div className="dsc-cart-item-container line-bottom">
                            <CardItemList />


                        </div>
                        <div className="dsc-cart-item-container line-bottom">
                            <CardItemList />

                        </div>
                        <div className="dsc-cart-total-container">
                            <h3> R$ 15000,00</h3>
                        </div>
                    </div>
                    <h3 className="dsc-color dsc-mb20">Pedido realizado! Número 35</h3>
                    <div className="dsc-btn-page-container">
                        <ButtonInverse text="Inicio"/>
                    </div>

                </section >

            </main>

        </>

    );
}