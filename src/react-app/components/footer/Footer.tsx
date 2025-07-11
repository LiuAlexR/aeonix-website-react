import logo from "../../assets/logos/aeonix.png";
import "./Footer.css";
export default function Footer() {
    return (
        <footer id="main-footer">
            <div className="footer-container">
                <div className="footer-section footer-about">
                    <img
                        src={logo}
                        alt="Aeonix Logo"
                        className="footer-logo"
                    />
                </div>
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="/" className="footer-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/products" className="footer-link">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="footer-link">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/news" className="footer-link">
                                News
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="footer-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section footer-contact">
                    <h3>Get in Touch</h3>
                    <p>
                        <i className="fas fa-map-marker-alt" /> 1990 Milestone Drive, Salt Lake City, UT
                    </p>
                    <p>
                        <i className="fas fa-phone" /> PHONE
                    </p>
                    <p>
                        <i className="fas fa-envelope" />{" "}
                        <a href="mailto:EMAIL" className="footer-link">
                            EMAIL
                        </a>
                    </p>
                </div>
                <div className="footer-section footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="#" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Aeonix Energy. All rights reserved.</p>
                <div className="footer-legal-links">
                    <a href="/privacy-policy" className="footer-link">
                        Privacy Policy
                    </a>
                    <span className="separator">|</span>
                    <a href="/terms-of-service" className="footer-link">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>

    )
}