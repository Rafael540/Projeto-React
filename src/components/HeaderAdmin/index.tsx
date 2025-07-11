import './styles.css';
import home from '../../assets/home.svg';
import produto from '../../assets/produto.svg'


export default function HeadClient() {

    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DsAdmin</h1>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={home} alt="Home" />
                            <p>Inicio</p>

                        </div>
                        <div className="dsc-menu-item">
                            <img src={produto} alt="Carrinho de compras" />
                            <p className= "dsc-menu-item-active">Produto</p>
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