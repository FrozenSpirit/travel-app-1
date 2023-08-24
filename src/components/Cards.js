import './Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Cards = (props) =>{




    return (
        <div className="card">
        
        <div className="image">
         </div>
        <div className="over">
        
        <div className="one">
            <p>Italy</p>
            <div>
                <span>Milan</span>
                <FontAwesomeIcon icon={faLocationDot} className='i'/>
            </div>
            
        </div>
        <div className="two">
            <span>Cultural Relax</span>
            <p>$800</p>
        </div>
        <div className="three">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, itaque. Illum quasi, autem minus sint maiores sit, quam architecto tempora cum impedit enim!</p>
        </div>
        <Link to='/destination' className='for_link'>
        <div className="four">
            <div>
                <span>Details</span>

                <FontAwesomeIcon icon={faBook} />
            </div>
            
        </div>
        </Link>
        </div>
    </div>
    
    );
}

export default Cards;