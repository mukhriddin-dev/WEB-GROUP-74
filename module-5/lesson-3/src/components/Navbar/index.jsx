import "./style.scss";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="nav">
            <h2 className="nav__logo">LOGO</h2>
            <ul className="nav__ul">
              <li className="nav__ul--list">
                <a href="#" className="nav__ul--list-item">
                  link
                </a>
              </li>
              <li className="nav__ul--list">
                <a href="#" className="nav__ul--list-item">
                  link
                </a>
              </li>
              <li className="nav__ul--list">
                <a href="#" className="nav__ul--list-item">
                  link
                </a>
              </li>
              <li className="nav__ul--list">
                <a href="#" className="nav__ul--list-item">
                  link
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
