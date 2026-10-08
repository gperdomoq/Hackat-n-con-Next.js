export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>

        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
        </ul>

        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-info" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}