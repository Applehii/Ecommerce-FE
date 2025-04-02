    'use client'

    import { faServicestack } from "@fortawesome/free-brands-svg-icons";
    import { faBagShopping, faGift } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import {faUser,faCreditCard} from "@fortawesome/free-regular-svg-icons";
    import styles from './Review.module.css'

    const Review = () =>{
        return(
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="services-flow">
                        <div className={styles.service}>
                            <div className={styles.icon_container}>
                                <FontAwesomeIcon icon={faBagShopping}/>
                            </div>
                            <div className={styles.text}>
                                <h3>Free Shipping</h3>
                                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                            </div>
                        </div>
                        <div className={styles.service}>
                            <div className={styles.icon_container}>
                            <FontAwesomeIcon icon={faGift}/>
                            </div>
                            <div className={styles.text}>
                                <h3>Valuable Gifts</h3>
                                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                            </div>
                        </div>
                        <div className={styles.service}>
                            <div className={styles.icon_container}>
                            <FontAwesomeIcon icon={faUser}/>
                            </div>
                            <div className={styles.text}>
                                <h3>All Day Support</h3>
                                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                            </div>
                        </div>
                        <div className={styles.service}>
                            <div className={styles.icon_container}>
                            <FontAwesomeIcon icon={faCreditCard} />
                            </div>
                            <div className={styles.text}>
                                <h3>Safety Payment</h3>
                                <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-lg-7">
                <div className="heading-section ftco-animate mb-5 fadeInUp ftco-animated">
                    <h2 className="mb-4">Our satisfied customer says</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                </div>
                <div className="carousel-testimony owl-carousel owl-loaded owl-drag">
                
                
                
                
                
                <div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item cloned" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">UI Designer</span>
                    </div>
                    </div>
                </div></div><div className="owl-item cloned"><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Web Developer</span>
                    </div>
                    </div>
                </div></div><div className="owl-item cloned" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">System Analyst</span>
                    </div>
                    </div>
                </div></div><div className="owl-item active center" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Marketing Manager</span>
                    </div>
                    </div>
                </div></div><div className="owl-item" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Interface Designer</span>
                    </div>
                    </div>
                </div></div><div className="owl-item" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">UI Designer</span>
                    </div>
                    </div>
                </div></div><div className="owl-item" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Web Developer</span>
                    </div>
                    </div>
                </div></div><div className="owl-item" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">System Analyst</span>
                    </div>
                    </div>
                </div></div><div className="owl-item cloned" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Marketing Manager</span>
                    </div>
                    </div>
                </div></div><div className="owl-item cloned" ><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4" >
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">Interface Designer</span>
                    </div>
                    </div>
                </div></div><div className="owl-item cloned"><div className="item">
                    <div className="testimony-wrap">
                    <div className="user-img mb-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                        </span>
                    </div>
                    <div className="text">
                        <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">UI Designer</span>
                    </div>
                    </div>
                </div></div></div></div><div className="owl-nav disabled"><button role="presentation" className="owl-prev"><span className="ion-ios-arrow-back"></span></button><button role="presentation" className="owl-next"><span className="ion-ios-arrow-forward"></span></button></div><div className="owl-dots"><button className="owl-dot active"><span></span></button><button className="owl-dot"><span></span></button><button className="owl-dot"><span></span></button><button className="owl-dot"><span></span></button><button className="owl-dot"><span></span></button></div></div>
            </div>
            </div>
        </div>    
        );
    }
    export default Review