import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import EarthImg from "../../assets/media/about/Earth.jpeg";
import "./Product.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
interface theProduct {
  page_layout: string;
  product_description_1: string;
  product_description_2: string;
  product_id: string;
  product_image_link: string;
  product_name: string;

}
function Product() {
  let params = useParams();
  let id = params.product_id;
  const [theProducts, setProduct] = useState<theProduct[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productsError, setProductsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/api/product/' + id);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (Array.isArray(result)) {
          const parsed: theProduct[] = result.map((item: any) => ({
            page_layout: item.page_layout,
            product_description_1: item.product_description_1,
            product_description_2: item.product_description_2,
            product_id: item.product_id,
            product_image_link: item.product_image_link,
            product_name: item.product_name
          }));
          setProduct(parsed);
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

  const productsToDisplay = (() => {
    if (loadingProducts) {
      // Provide default/empty values for all fields to satisfy theProduct interface
      return [{
        page_layout: "",
        product_description_1: "Loading product details...",
        product_description_2: "",
        product_id: "loading",
        product_image_link: "",
        product_name: "Loading..."
      }];
    }
    if (productsError) {
      // Provide default/empty values for all fields to satisfy theProduct interface
      return [{
        page_layout: "",
        product_description_1: `Error: ${productsError}`,
        product_description_2: "",
        product_id: "error",
        product_image_link: "",
        product_name: "Error loading product"
      }];
    }
    return theProducts;
  })();

  let productObj = productsToDisplay[0];
  console.log(productObj)
  return (
    <>
      <title>{productObj.product_name + ' | Aeonix Energy'}</title>
      <Navbar />
      <img src={productObj.product_image_link} id="about_center_image"></img>
      <div id="about_center_image_spacer"></div>
      <Footer />
    </>
  );
}
export default Product;