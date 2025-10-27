import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <Link to="/">Dela</Link>
        <nav style={{ display: "inline-flex", gap: 12, marginLeft: 16 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
      <footer style={{ padding: 12, borderTop: "1px solid #eee", fontSize: 12 }}>
        © {new Date().getFullYear()} Dela Hashem
      </footer>
    </div>
  );
}
