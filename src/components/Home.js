import './Home.css'
import Footer from './Footer';
import Header from './Header';
import video from '../content/vid2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import Card from './Cards'



const Home = () =>{

    return (
        <div>
            <div className='holder'>
                        
            <Header/>
                
            <div className="panel1">


                {/* <video autoplay muted loop className="video">
                    <source src={video} type="video/mp4"/>
                </video> */}

                 <video src={video} muted autoPlay loop type="video/mp4" className='video'></video> 

                <div className="panel1_box">
                    <div className="panel1_box1">
                        <span>
                            OUR PACKAGES
                        </span>
                        
                        <p>Search Your Holiday</p>
                    </div>
                    <div className="panel1_box2">
                        <div className="panel1_sub">
                            <span>Search Your Destination</span> 
                            <div>
                            <input type="text" placeholder="    Enter name here..."/>
                            <FontAwesomeIcon icon={faLocationDot} className='icon'/>
                            </div>
                        </div>

                        <div className="panel1_sub">
                            <span>Pick Date</span> 
                            <div>
                            <input type="text" placeholder="    Select Your Date"/>
                            <FontAwesomeIcon icon={faCalendarDays} className='icon'/>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>

                <div className='panel2'> Our Top Picks </div>

                    <div className='panel3'>

                    <Card src="https://images.unsplash.com/photo-1641927676953-f12cc1b1a59a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"/>
                    <Card src="src/content/Italy/2.jpeg"/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    </div>
                </div>
                
                <div className='whitespace'></div>

                <Footer/>
                

                
        </div>
    );
}

export default Home;