import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Products.css";
interface ProductsItem {
    product_name: string; //was news date
    product_img_url: string;
    product_description_1: string;
    product_description_2: string;
    page_layout: string;
    product_id: string;
}
export default function Products() {
    const [theProducts, setProducts] = useState<ProductsItem[]>([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [productsError, setProductsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                if (Array.isArray(result)) {
                    const parsed: ProductsItem[] = result.map((item: any) => ({
                        product_name: item.product_name,
                        product_img_url: item.product_image_link,
                        product_description_1: item.product_description_1,
                        product_description_2: item.product_description_2,
                        page_layout: item.page_layout,
                        product_id: item.product_id
                    }));
                    setProducts(parsed);
                } else {
                    setProductsError("Invalid data format received: Expected an array of product objects.");
                }
            } catch (err: any) {
                console.error("Error fetching product data:", err);
                setProductsError(err.message);
            } finally {
                setLoadingProducts(false);
            }
        };

        fetchProductData();
    }, []);

    const ProductsCollection = (() => {
        if (loadingProducts) {
            return [{ product_name: "Loading", product_img_url: "Loading", product_description_1: "Loading", product_description_2: "Loading" , page_layout: "Loading", product_id: "Loading"}];
        }
        if (productsError) {
            return [{ product_name: "Error", product_img_url: "Error", product_description_1: "Error", product_description_2: "Error" , page_layout: "Error", product_id: "Error"}];
        }
        return theProducts;
    })();

    return (
        <>
            <Navbar />
            <div className="card-news-wrapper">
            {ProductsCollection.map((name, index) => (
                <ProductCard content={name} key={index} />
            ))}
            </div>
            <Footer />
        </>

    );
}
function ProductCard({ content }: { content: ProductsItem }) {
    return (
        <a className="card-news" href={"products/" + content.product_id}>
            <img src={content.product_img_url} className="card-news-image"></img>
            <div className="card-news-text">{content.product_description_1}</div>
            <div className="card-news-text">{content.product_description_2}</div>
        </a>
    );

}