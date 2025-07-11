
import ButtonConfirmation from '../../components/ButtonConfirmation';
import ButtonShopping from '../../components/ButtonShopping';
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

                    <div className="dsc-btn-page-container">
                        <ButtonConfirmation />
                        <ButtonShopping />
                    </div>

                </section >

            </main>

        </>

    );
}