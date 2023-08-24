import './Header.css'


const Header = () =>{

    

    return (
    <div className="navbar">
        <div className="logo">
             <h2>MIMI Travels.</h2>
        </div>

        <div className="navbar_contents">
            <div className="navbar_box">
                Home
            </div>
            <div className="navbar_box">
                Packages
            </div>
            <div className="navbar_box">
                Shop
            </div>
            <div className="navbar_box">
                About
            </div>
            <div className="navbar_box">
                Pages
            </div>
            <div className="navbar_box">
                News
            </div>
            <div className="book_now">
                Book Now
            </div>
        </div>

    </div>
    
    );
    
}

export default Header;