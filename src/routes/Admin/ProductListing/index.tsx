/* eslint-disable @typescript-eslint/no-unused-vars */
import pen from "../../../assets/Pen.svg"
import trash from "../../../assets/trash.svg"
import * as productService from '../../../services/product-service'

import "./styles.css"
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product"
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";
import ButtonInverse from "../../../components/ButtonInverse";
import { useNavigate } from "react-router-dom";


type QueryParams = {
    page: number,
    name: string,
}

export default function ProductListing() {

    const navigate = useNavigate();

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso!"
    })


    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?"
    })


    const [isLastPage, setLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParam] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {


        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setProducts(products.concat(nextPage));
                setLastPage(response.data.last)
                    ;
            });
    }, [queryParams]);


    function handleSearch(searchText: string) {
        setProducts([]);
        setQueryParam({ ...queryParams, page: 0, name: searchText });
    }

    function handleNextPageClick() {
        setQueryParam({ ...queryParams, page: queryParams.page + 1 });
    }

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visible: false });
    }
    function handleDeleteClick(productId: number) {
        setDialogConfirmationData({ ...dialogInfoData, id: productId, visible: true });
    }

    function handleUpdateClick(productId: number){
        navigate(`/admin/products/${productId}`)
    }

    function handleDialogConfirmationAnswer(answer: boolean, productId: number) {

        if (answer) {
            productService.deleteById(productId)
                .then(() => {
                    setProducts([]);
                    setQueryParam({ ...queryParams, page: 0 });

                })
                .catch(error => {
                    setDialogInfoData({
                        visible: true,
                        message: error.response.data.error
                    });
                })
        }
        setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
    }

    function handleNewProductClick(){
        navigate("/admin/products/create");
    }

    return (
        <main>
            <section id="product-listing-section" className="dsc-container">
                <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

                <div className="dsc-btn-page-container dsc-mb20">
                    <div onClick={handleNewProductClick}>
                        <ButtonInverse text="Novo" />
                    </div>
                </div>

                <SearchBar onSearch={handleSearch} />

                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                        <tr>
                            <th className="dsc-tb576">ID</th>
                            <th></th>
                            <th className="dsc-tb768">Preço</th>
                            <th className="dsc-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td className="dsc-tb576">{product.id}</td>
                                    <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name} /></td>
                                    <td className="dsc-tb768">{product.price.toFixed(2)}</td>
                                    <td className="dsc-txt-left">{product.name}</td>
                                    <td><img onClick={() => handleUpdateClick(product.id)} className="dsc-product-listing-btn" src={pen} alt="Editar" /></td>
                                    <td><img onClick={() => handleDeleteClick(product.id)} className="dsc-product-listing-btn" src={trash} alt="Deletar" /></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
                {
                    !isLastPage &&
                    <ButtonNextPage onNextPage={handleNextPageClick} />
                }
            </section>

            {
                dialogInfoData.visible &&
                <DialogInfo
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose} />
            }
            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    id={dialogConfirmationData.id}
                    message={dialogConfirmationData.message}
                    onDialogAnswer={handleDialogConfirmationAnswer} />
            }


        </main>
    );
}