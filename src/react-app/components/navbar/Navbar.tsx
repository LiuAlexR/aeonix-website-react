import { useEffect, useState } from "react";
import logo from "../../assets/logos/aeonix_energy_dark.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const scrollDirection = useScrollDirection();
    return (
        <div id="navbar" className={ scrollDirection === "down" ? "hide" : "show"}>
            <GetLogo />
            <GetMobileMenu />
            <NavBarWrapper />
        </div>
    );
}

function GetLogo() {
    return (
        <div id="logo">
            <img src={logo} id="logo_img" alt="Aeonix Exclusive Logo" />
        </div>
    );
}

function GetMobileMenu() {
    return (
        <>
            <input type="checkbox" id="menu_toggle" className="menu_toggle" />
            <label htmlFor="menu_toggle" className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>
        </>
    );
}
interface Product {
    product_name: string;
    product_id: string;
}
function NavBarWrapper() {
    const [theProducts, setProduct] = useState<Product[]>([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [productsError, setProductsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('/api/products/names');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                if (Array.isArray(result)) {
                    const parsed: Product[] = result.map((item: any) => ({
                        product_id: item.product_id,
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
            return [{ product_id: "loading", product_name: "Loading..." }];
        }
        if (productsError) {
            return [{ product_id: "error", product_name: `Error: ${productsError}` }];
        }
        return theProducts;
    })();

    return (
        <ul id="bar_as_list">
            <NavBarItemNoDropdown title="Home" link="/" />
            <NavBarItemWithDropdown title="Products" link="/Products" options={productsToDisplay} />
            <NavBarItemNoDropdown title="About Us" link="/about" />
            <NavBarItemNoDropdown title="News" link="/news" />
            <NavBarItemNoDropdown title="Contact Us" link="/contact" />
        </ul>
    );
}

function NavBarItemNoDropdown({ title, link }: { title: string; link: string }) {
    return (
        <li className="nav_bar_item">
            <Link className="nav_bar_item_link" to={link}>
                {title}
            </Link>
        </li>
    );
}

function NavBarItemWithDropdown({ title, link, options }: { title: string; link: string; options: Product[] }) {
    return (
        <li className="nav_bar_item">
            <div className="drop_down">
                <a className="nav_bar_item_link drop_down_link" href={link}>
                    {title + " "}
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="drop_down_wrapper">
                    {options.map((name, index) => (
                        <Link key={index} className="drop_down_content" to={'/' + title.toLowerCase() + '/' + name.product_id}>
                            {name.product_name}
                        </Link>
                    ))}
                </div>
            </div>
        </li>
    );
}
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);
  return scrollDirection;
};