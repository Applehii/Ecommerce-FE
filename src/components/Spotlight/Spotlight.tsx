'use client'
import styles from './Spotlightlight.module.css'
import { Button, NavLink } from 'react-bootstrap';

const Spotlight = () =>{
    return(
    	<div className="container">
				<div className="row no-gutters">
					<div className="col-lg-4 p-0">
					 <div className={styles.backgroundMen}>
    					<div className="text text-center text-white px-2 align-items-end pb-5">
								<span className="subheading">Men's Shoes</span>
    						<h2>Men's Collection</h2>
    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    						<Button className={styles.button}><NavLink href="#">Shop now</NavLink></Button>
    					</div>
    				</div>
					</div>
					<div className="col-lg-8 p-0">
    					<div className="col-md-12 ">
	    					<div className={styles.backgroundWomen}>
	    						<div className="col-md-7 d-flex align-items-center">
	    							<div className="text text-white px-5">
	    								<span className="subheading">Women's Shoes</span>
			    						<h2>Women's Collection</h2>
			    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
			    						<Button className={styles.button}><NavLink href="#">Shop now</NavLink></Button>
			    					</div>
	    						</div>
	    					</div>
	    				</div>
    					<div className="col-md-12 d-flex justify-content-center">
    						<div className="row w-100">
    							<div className="col-md-6 d-flex align-items-center  p-0">
		    						<div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
		    							<div className="text text-center">
		    								<span className="subheading">Summer Sale</span>
				    						<h2>Extra 50% Off</h2>
				    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				    						<Button className={styles.button}><NavLink href="#" >Shop now</NavLink></Button>
				    					</div>
		    						</div>
	    						</div>
	    						<div className="col-md-6 d-flex align-items-center p-0">
		    						<div className={styles.backgroundBestSeller}>
		    							<div className="text text-center text-white px-5">
		    								<span className="subheading">Shoes</span>
				    						<h2>Best Sellers</h2>
				    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				    						<Button className={styles.button}><NavLink href="#">Shop now</NavLink></Button>
				    					</div>
		    						</div>
	    						</div>
	    					</div>
    					</div>
    			</div>
  			</div>
    	</div>
    )
}
export default Spotlight;