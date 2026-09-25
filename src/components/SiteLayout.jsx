import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import { links } from "../data/site";
const navItems = [["Products", "/products"], ["Story", "/story"], ["About", "/about"]];
export default function SiteLayout() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return <div className="site-shell"><header className="site-header"><nav className="nav" aria-label="Main navigation"><Link className="brand" to="/" aria-label="Eason Systems home" onClick={closeMenu}><span className="brand-mark" aria-hidden="true">E</span><span>Eason Systems</span></Link><button className="menu-button" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(v => !v)}><span className="sr-only">Toggle menu</span>{open ? <X size={21}/> : <Menu size={21}/>}</button><div className={`nav-links ${open ? "is-open" : ""}`} id="site-menu">{navItems.map(([label, href]) => <NavLink key={href} to={href} onClick={closeMenu} className={({isActive}) => isActive ? "active" : undefined}>{label}</NavLink>)}<a className="nav-external" href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></div></nav></header><main><Outlet/></main><footer className="footer wrap"><div><Link className="footer-brand" to="/">Eason Systems</Link><span>Independent product studio.</span></div><div className="footer-links"><Link to="/products">Products</Link><Link to="/story">Story</Link><Link to="/about">About</Link><a href={links.legacy} target="_blank" rel="noreferrer">Legacy <ArrowUpRight size={12}/></a></div><p>© 2026 Eason Systems</p></footer></div>;
}
