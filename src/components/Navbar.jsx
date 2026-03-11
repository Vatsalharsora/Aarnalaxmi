import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Aarnalaxmi Cotton</h1>
        <ul className="nav-menu">
          <li onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</li>
          <li onClick={() => setActiveSection('products')} className={activeSection === 'products' ? 'active' : ''}>Products</li>
          <li onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</li>
          <li onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
