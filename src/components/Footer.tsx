'use client'
import {NavLink} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row">
                    <div className="mouse">
                        <a href="#" className="mouse-icon">
                            <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
                        </a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Minishop</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia.</p>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Menu</h2>
                            <div className="">
                                <NavLink href="/" className="py-2 d-block">Shop </NavLink>
                                <NavLink href="/about" className="py-2 d-block">About</NavLink>
                                <NavLink href="/journal" className="py-2 d-block">Journal</NavLink>
                                <NavLink href="/contact" className="py-2 d-block">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Help</h2>
                            <div className="d-flex">
                                <div className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <NavLink href="#" className="py-2 d-block">Shipping Information</NavLink>
                                    <NavLink href="#" className="py-2 d-block">Returns &amp; Exchange</NavLink>
                                    <NavLink href="#" className="py-2 d-block">Terms &amp; Conditions </NavLink>
                                    <NavLink href="#" className="py-2 d-block">Privacy Policy</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                    </li>
                                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a>
                                    </li>
                                    <li><a href="#"><span className="icon icon-envelope"></span><span
                                        className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;