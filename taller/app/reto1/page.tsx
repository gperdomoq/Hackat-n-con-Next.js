import Navbar from "../../components/Navbar";
import "./reto1.css";

export default function Reto1() {
  return (
    <main className="p-3">
      <Navbar />
      <div className="my-2" />
      <div className="navbar-invertido">
        <Navbar />
      </div>
    </main>
  );
}