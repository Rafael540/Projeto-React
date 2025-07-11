
import ButtonInverse from '../../components/ButtonInverse';
import ButtonPrimary from '../../components/ButtonPrimary'
import CardItemList from '../../components/CardItemList';
import HeadClient from '../../components/HeaderClient'
import './styles.css'


export default function Cart() {
    return (
        <>
            <HeadClient />
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

                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>

                </section >

            </main>

        </>

    );
}