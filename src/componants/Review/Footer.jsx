import logo from '../../../public/images/ainan.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-950 text-white mt-10">
            <aside>
                <img className='lg:w-[100px] ' src={logo} alt="ACME Industries Ltd." />
                <p>Ainan's Coffee<br/>Providing Coffee since 2024</p>
            </aside> 
            <nav>
                <h6 className="footer-title">Food</h6> 
                <a className="link link-hover">Coffee</a>
                <a className="link link-hover">Pizza</a>
                <a className="link link-hover">Burger</a>
                <a className="link link-hover">Drinks</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
