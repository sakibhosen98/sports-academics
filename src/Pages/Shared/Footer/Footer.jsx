import logo from '../../../assets/logo.jpg'
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="footer p-10 ">
        <div>
          <img className='w-[40px] rounded' src={logo} alt="" />
          <p>
            Sports Academies
            <br />
            Providing reliable tech since 2008
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>Mawna-27</p>
          <p>Mawna, Sripur, Gazipur</p>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p><a className="link link-hover"></a>+8801700-000000</p>
          <p><a className="link link-hover"></a>sakib@hasn.com</p>
          <p><a className="link link-hover"></a>Facebook</p>
        </div>
      </div>
      <div className="footer footer-center p-4 ">
          <div>
            <p>Copyright © 2023 - All right reserved by Sports Academies</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
