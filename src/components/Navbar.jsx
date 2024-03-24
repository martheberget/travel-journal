import img from "../assets/globe.png";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={img} alt="globe" className="navbar__logo" />
        <h1 className="navbar__title">my travel journal.</h1>
      </nav>
    </>
  );
}
