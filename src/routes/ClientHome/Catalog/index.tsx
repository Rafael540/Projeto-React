import './styles.css'
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import type { ProductDTO } from '../../../models/product';



const product: ProductDTO = {
    id: 2,
    name: "Smart Tv",
    description: "Está tv é muito bonita",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
    price: 2550.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importado"
        }
    ]
}


export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="dsc-container">
                <SearchBar />
                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                </div>

                <ButtonNextPage />


            </section>

        </main>

    );
}