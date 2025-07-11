import './styles.css';
import cart from '../../assets/cart.svg';


export default function HeadClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <h1>DsCommerce</h1>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                        </div>
                        <div className="dsc-menu-item">
                            <img src={cart} alt="Carrinho de compras" />
                        </div>
                    </div>
                    <div className="dsc-logged-user">
                       <div className="dsc-logged-user">
                        <p>Maria Silva</p>
                        <a href="#">Sair</a>
                    </div>
                    </div>
                </div>
            </nav>
        </header>

    );


}