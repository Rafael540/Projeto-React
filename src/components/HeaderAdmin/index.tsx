import './styles.css';
import home from "../../assets/home.svg"
import product from "../../assets/produto.svg"
import LoggedUser from '../LoggedUser';

export default function HeadClient() {

    return (
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DSC Admin</h1>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={home} alt="Início" />
                            <p>Início</p>
                        </div>
                        <div className="dsc-menu-item">
                            <img src={product} alt="Cadastro de produtos" />
                            <p className="dsc-menu-item-active">Produtos</p>
                        </div>
                    </div>
                  <LoggedUser/>
                </div>
            </nav>
        </header>

    );


}