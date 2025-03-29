import styles from './Deal.module.css'

const Deal = () => {
    return(
        <div className={styles.deal}>
    	<div className="container">
    		<div className="row">
    			<div className="col-md-6">
    			  <img src="assets/" alt="" />
    			</div>
    			<div className="col-md-6">
    				<div className="heading-section heading-section-white">
    					<span className="subheading">Deal of the month</span>
	            <h2 className="mb-3">Deal of the month</h2>
	          </div>
    				<div id="timer" className="d-flex mb-4">
						  <div className="time" id="days">-1925<span>Days</span></div>
						  <div className="time pl-4" id="hours">05<span>Hours</span></div>
						  <div className="time pl-4" id="minutes">09<span>Minutes</span></div>
						  <div className="time pl-4" id="seconds">27<span>Seconds</span></div>
						</div>
						<div className="text-deal">
							<h2><a href="#">Nike Free RN 2019 iD</a></h2>
							<p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
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