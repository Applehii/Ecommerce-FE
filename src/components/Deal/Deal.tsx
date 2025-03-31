'use client'
import styles from './Deal.module.css'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';

const Deal = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set the target date (30 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds
            });

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className={styles.deal}>
    	<div className="container">
    		<div className="row">
    			<div className={styles.image}>
    			</div>
    			<div className="col-md-6">
    				<div className="heading-section heading-section-white">
    					<span className={styles.heading}>Deal of the month</span>
	            <h2 className={styles.subheading}>Time Left</h2>
	          </div>
    				<div id="timer" className={styles.time}>
						  <div className={styles.child} id="days">{timeLeft.days}<div className={styles.unit}>Days</div></div>
						  <div  className={styles.child} id="hours">{timeLeft.hours}<div className={styles.unit}>Hours</div></div>
						  <div  className={styles.child} id="minutes">{timeLeft.minutes}<div className={styles.unit}>Minutes</div></div>
						  <div  className={styles.child} id="seconds">{timeLeft.seconds}<div className={styles.unit}>Seconds</div></div>
						</div>
						<div className="text-deal">
							<h2 className={styles.product}><NavLink href="#">Nike Free RN 2019 iD</NavLink></h2>
							<p><span className={styles.price}>$120.00</span><span className={styles.saleprice}>$80.00</span></p>
							<ul className="thumb-deal d-flex mt-4">
								<li className="img"></li>
								<li className="img"></li>
								<li className="img"></li>
							</ul>
						</div>
    			</div>
    		</div>
    	</div>
    </div>
    );
}
export default Deal;