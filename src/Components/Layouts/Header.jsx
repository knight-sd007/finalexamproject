import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/react.png";

function MainHeader() {
  return (
    <div
      className='py-2 pl-2'
      style={{ backgroundColor: "Black", borderBottom: "1px solid #777" }}>
      <NavLink className='nav-link' aria-current='page' to='/'>
        <img
          src={logo}
          alt='Header'
          style={{ height: "35px", verticalAlign: "top" }}
        />
        <span className='h2 pt-4 m-2 text-white-50'>React Final Project</span>
      </NavLink>
    </div>
  );
}

function NavHeader() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
      <div className='container-fluid'>
        <NavLink className='nav-link' aria-current='page' to='/'>
          <img
            src={logo}
            style={{ height: "40px" }}
            className='m-1'
            alt='Header'
          />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 w-100'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                Section - 1
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <Link className='dropdown-item' to='/section1'>
                    Question - I
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/section1/question2'>
                    Question - II
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/section1/question3'>
                    Question - III
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/section1/question4'>
                    Question - IV
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/section1/question5'>
                    Question - V
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/section2'>
                Section - 2
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader />
      <NavHeader />
    </div>
  );
};

export default Header;
