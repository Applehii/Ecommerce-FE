'use client'
import styles from './NewArrival.module.css'

const NewArrival = (props: Object) => {
    interface items{
        shoes: object
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h2 className={styles.heading}>New Shoes Arrival</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row'></div>
            </div>
        </div>
    );
}
export default NewArrival