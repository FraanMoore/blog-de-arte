import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Francisca Moore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Cuadros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dibujos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cuenta
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Favoritos</a></li>
            <li><a className="dropdown-item" href="#">Carrito</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;

