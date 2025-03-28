'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './General.module.css'
import { faHeadset, faMoneyCheckDollar, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const General = () => {
    return (
        <div className="container">
            <div className="row no-gutters ftco-services">
                <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                    <div className="media block-6 services p-4 py-md-5">
                        <div className={styles.icons}>
                            <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                        <div className="media-body">
                            <h3 className={styles.heading}>Free Shipping</h3>
                            <p className={styles.content}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                    <div className="media block-6 services p-4 py-md-5">
                        <div className={styles.icons}>
                            <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <div className="media-body">
                            <h3 className={styles.heading}>Support Customer</h3>
                            <p className={styles.content}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                    <div className="media block-6 services p-4 py-md-5">
                        <div className={styles.icons}>
                            <FontAwesomeIcon icon={faMoneyCheckDollar} />
                        </div>
                        <div className="media-body">
                            <h3 className={styles.heading}>Secure Payments</h3>
                            <p className={styles.content}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default General;