import { useEffect, useState } from "react";
import logo from "../../assets/logos/aeonix_exclusive.png";
import "./Navbar.css";
export default function Navbar() {
    GetProducts().then((value) => {
        console.log(value);
    })
    return (
        <div id="navbar">
            <GetLogo />
            <GetMobileMenu />
        </div>
    )
}/*
interface navbarLinks {

}*/
async function GetProducts(){
    const [data, setData] = useState<string[]>([]); // Assuming your column contains strings
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products/names'); // Hono API endpoint
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                if (Array.isArray(result)) {
                    let parsed = result.map(function(nameObj) {
                        return nameObj.product_name;
                      }); 
                    setData(parsed);
                } else {
                    setError("Invalid data format received.");
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return ["Loading"];
    }

    if (error) {
        return ['Error', error];
    }
    return data;
}
function GetLogo(){
    return (
        <div id="logo">
            <img src={logo} id="logo_img" />
        </div>
    )
}
function GetMobileMenu(){
    return (
        <div id="mobile_menu">
            <input type="checkbox" id="menu_toggle" className="menu_toggle" />
            <label htmlFor="menu_toggle" className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>
        </div>
    )
}