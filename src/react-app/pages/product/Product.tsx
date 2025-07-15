import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
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
  }, [id]);

  // This computed value is good for centralizing the state interpretation
  const productToDisplay = (() => {
    if (loadingProducts) {
      // Return a "loading" product object
      return {
        page_layout: "",
        product_description_1: "Loading product details...",
        product_description_2: "",
        product_id: "loading",
        product_image_link: "",
        product_name: "Loading..."
      };
    }
    if (productsError) {
      // Return an "error" product object
      return {
        page_layout: "",
        product_description_1: `Error: ${productsError}`,
        product_description_2: "",
        product_id: "error",
        product_image_link: "",
        product_name: "Error loading product"
      };
    }
    // If loaded and no error, return the first product from the fetched array
    // Assuming you always expect a single product for a given ID
    return theProducts.length > 0 ? theProducts[0] : null;
  })();

  // Handle loading, error, and no-product-found states
  if (loadingProducts) {
    return (
      <>
        <Navbar />
        <div className="product-loading">Loading product details...</div>
        <Footer />
      </>
    );
  }

  if (productsError) {
    return (
      <>
        <Navbar />
        <div className="product-error">Error loading product: {productsError}</div>
        <Footer />
      </>
    );
  }
  /*No Product*/
  if (!productToDisplay) {
    return (
      <>
        <Navbar />
        <div className="product-not-found">Product not found.</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <title>{productToDisplay.product_name + ' | Aeonix Energy'}</title>
      <Navbar />

      <main className="product-page-content">
        {productToDisplay.product_image_link && (
          <img
            src={productToDisplay.product_image_link}
            id="product-hero-image"
            alt={productToDisplay.product_name || "Product Image"}
          />
        )}
        <div id="product-hero-image-spacer"></div>

        <section className="product-details-container">
          <h1 className="product-name">{productToDisplay.product_name}</h1>

          {productToDisplay.page_layout === "layout-1" && (
            <div className="product-description-layout-1">
              <p>{productToDisplay.product_description_1}</p>
              {productToDisplay.product_description_2 && (
                <p>{productToDisplay.product_description_2}</p>
              )}
            </div>
          )}

          {productToDisplay.page_layout === "layout-2" && (
            <div className="product-description-layout-2">
              <p className="description-section-1">{productToDisplay.product_description_1}</p>
              {productToDisplay.product_description_2 && (
                <p className="description-section-2">{productToDisplay.product_description_2}</p>
              )}
            </div>
          )}

          {(!productToDisplay.page_layout || (productToDisplay.page_layout !== "layout-1" && productToDisplay.page_layout !== "layout-2")) && (
            <div className="product-description-default">
              <p>{productToDisplay.product_description_1}</p>
              {productToDisplay.product_description_2 && (
                <p>{productToDisplay.product_description_2}</p>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Product;