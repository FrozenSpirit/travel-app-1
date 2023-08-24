import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

import './Footer.css'
import video from '../content/vid11.mp4'

const Footer = () =>{
    return (
        <div>

            <div className="footer">

                    {/* <video autoplay muted loop className="video">
                        <source src='1.mp4' type="video/mp4"/>
                    </video> */}
                    <video src={video} muted autoPlay loop type="video/mp4" className='video'></video>

                    <div className="panel_box">
                        <div className="panel_box1">
                            
                            <div className="panel_box1_sub1">
                                <div>
                                <span>
                                    KEEP IN TOUCH
                                </span>
                                
                                    <h2>Travel With us</h2>
                
                                </div>
                            </div>

                            <div className="panel_box1_sub2">
                                <input type="email" placeholder="   Enter Email Address"/>
                                
                                <div>
                                    <button>SEND</button>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                            </div>
                            
                        </div>


                            <div className="panel_box2">
                            
                                <div className="panel_box2_sub1">
                                    <h2>Travels.</h2>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis nisi dicta vero vitae porro corporis animi, deleniti possimus magni odit debitis quam veniam illum, sunt a, commodi aliquid nostrum.</p>

                                    <div>
                                    <FontAwesomeIcon icon={faFaceSmile} />
                                    <FontAwesomeIcon icon={faFaceSmile} />
                                    <FontAwesomeIcon icon={faFaceSmile} />
                                    </div>
                                </div>


                                <div className="panel_box2_sub2">

                                    <h3>OUR AGENCY</h3>
                                    <ul>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                    </ul>
                                </div>

                                <div className="panel_box2_sub2">

                                    <h3>OUR AGENCY</h3>
                                    <ul>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                    </ul>
                                </div>
                                <div className="panel_box2_sub2">

                                    <h3>OUR AGENCY</h3>
                                    <ul>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                        <li>Service</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


        </div>
    );
}

export default Footer;