import './styles.css'
import computer from '../../assets/computer.png'

export default function CardItemList() {
    return (
        <>
            <div className="dsc-cart-item-left">
                <img src={computer} alt="" />
                <div className="dsc-cart-item-description">
                    <h3>Computer Gamer xT</h3>
                    <div className="dsc-cart-item-quantity-container">
                        <div className="dsc-cart-item-quantity-button">-</div>
                        <p>1</p>
                        <div className="dsc-cart-item-quantity-button">+</div>
                    </div>
                </div>
            </div>
            <div className="dsc-cart-item-right">
                R$ 5000,00
            </div>
        </>
    );
}