'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import styles from './TopHeader.module.css';

const TopHeader = () =>{
    return (
        <div className={styles.header}>
            <div className="container">
                <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                    <div className="col-lg-12 d-block">
                        <div className="row d-flex">
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="me-2 mr-2 d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faPhone} className={styles.icon}/></div>
                                <span className="d-flex text-uppercase">+84 332711069</span>
                            </div>
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="me-2 mr-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /></div>
                                <span className="text-uppercase">qlv2810@email.com</span>
                            </div>
                            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                <span className="text-uppercase">3-5 Business days delivery &amp; Free Returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default TopHeader;