import React from "react";
import { Link } from "react-router-dom";

import instasvg from './insta.svg';
import xsvg from './x.svg';
import fbsvg from './fb.svg';

export default function Footer() {
  return (


    <div div className="container" >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
          </Link>
          <span className="text-muted">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><Link className="text-muted" to="www.instagram.com"><img src={instasvg} alt="insta Icon" /> </Link></li>
          <li className="ms-3"><Link className="text-muted" to="www.x.com"> <img src={xsvg} alt="x Icon" /></Link></li>
          <li className="ms-3">
            <Link className="text-muted " to="www.facebook.com">
              <img src={fbsvg} alt="fb Icon" />
            </Link>
          </li>
        </ul>
      </footer>

    </div>



  );
}



