'use client'
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-bootstrap";
import styles from './Footer.module.css';
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={`ftco-footer ftco-section ${styles.ftcoFooter}`}>
            <div className="container">
                <div className="row">
                    <div className="mouse">
                        <a href="#" className="mouse-icon">
                            <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
                        </a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className={styles.ftcoHeading2}>Minishop</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia.</p>
                        </div>
                        <div className={styles.social}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon}/>
                            <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon}/>
                            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className={styles.ftcoHeading2}>Menu</h2>
                            <div className="">
                                <NavLink href="/" className={`py-2 d-block ${styles.navLink}`}>Shop </NavLink>
                                <NavLink href="/about" className={`py-2 d-block ${styles.navLink}`}>About</NavLink>
                                <NavLink href="/journal" className={`py-2 d-block ${styles.navLink}`}>Journal</NavLink>
                                <NavLink href="/contact" className={`py-2 d-block ${styles.navLink}`}>Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className={styles.ftcoHeading2}>Help</h2>
                            <div className="d-flex">
                                <div className="list-unstyled">
                                    <NavLink href="#" className={`py-2 d-block ${styles.navLink}`}>Shipping Information</NavLink>
                                    <NavLink href="#" className={`py-2 d-block ${styles.navLink}`}>Returns &amp; Exchange</NavLink>
                                    <NavLink href="#" className={`py-2 d-block ${styles.navLink}`}>Terms &amp; Conditions </NavLink>
                                    <NavLink href="#" className={`py-2 d-block ${styles.navLink}`}>Privacy Policy</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className={styles.ftcoHeading2}>Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <div className="container">
                                    <div className={styles.contactItem}>
                                        <FontAwesomeIcon icon={faMap} className={styles.icon}/>
                                        <span>Hoc Mon, Ho Chi Minh City</span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                                        <span>+84 332 711 069</span>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                                        <span>qlv2810@gmai.com</span>
                                    </div>
                                </div>
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