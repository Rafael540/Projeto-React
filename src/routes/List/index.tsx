import HeaderAdmin from "../../components/HeaderAdmin";
import SearchBar from "../../components/SearchBar";
import computer from "../../assets/computer.png"
import edite from "../../assets/edite.svg"
import trash from "../../assets/trash.svg"
import './styles.css'
import ButtonNextPage from "../../components/ButtonNextPage";

export default function List() {

    return (
        <>
        <HeaderAdmin/>
            <main>
                <section id="product-listing-section" className="dsc-container">
                    <div className="dsc-section-title dsc-mb20">
                        <h2>Cadastro de produtos</h2>
                    </div>
                    <div className="dsc-btn-page-container">

                        <div className="dsc-btn dsc-btn-white dsc-mb20">
                            Novo
                        </div>
                    </div>

                   <SearchBar/>
                    <table className="dsc-table dsc-mb20 dsc-mt20">
                        <thead>
                            <th className="dsc-tb576">ID</th>
                            <th></th>
                            <th className="dsc-tb768">Preço</th>
                            <th className="dsc-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>
                             <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>
                             <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>
                             <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>
                             <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>

                             <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>
                             <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>
                             <tr>
                                <td className="dsc-tb576">341</td>
                                <td><img className="dsc-product-listing-image " src={computer} alt="Computer"/></td>
                                <td className="dsc-tb768">R$ 5000,00</td>
                                <td className="dsc-txt-left">Computador Gamer XT</td>
                                <td><img className="dsc-product-listing-btn" src={edite} alt="Editar"/></td>
                                <td><img className="dsc-product-listing-btn" src={trash} alt="Remove"/></td>
                            </tr>
                            
                              
                        </tbody> 
                    </table>

                <ButtonNextPage/>



                </section>

            </main>
        </>
    );
}