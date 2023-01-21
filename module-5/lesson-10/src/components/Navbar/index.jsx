import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../../hooks/useAuth";
const index = () => {
  const navigate = useNavigate();
  const user=localStorage.getItem('user');
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div class="container">
          {/* <!-- Navbar brand --> */}
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>

          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}

            <div class="d-flex align-items-center">
              {/* <button type="button" class="btn btn-link px-3 me-2">
                Login
              </button> */}
              <button
                type="button"
                class="btn btn-primary me-3"
                onClick={() => {
                  LogOut(navigate);
                }}
              >
                Log out
              </button>
              <a
                class="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
               {user} <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar -->   */}
    </>
  );
};

export default index;
