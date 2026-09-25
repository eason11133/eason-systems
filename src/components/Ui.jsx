import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
export function Eyebrow({ children }) { return <p className="eyebrow">{children}</p>; }
export function Status({ children, live = false }) { return <span className={`status ${live ? "live" : ""}`}>{live && <i/>}{children}</span>; }
export function InternalLink({ to, children, className = "text-link" }) { return <Link className={className} to={to}>{children}<ArrowRight size={16}/></Link>; }
export function ExternalLink({ href, children, className = "text-link" }) { return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={16}/></a>; }
export function PageIntro({ eyebrow, title, lede }) { return <section className="page-intro wrap"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="page-lede">{lede}</p></section>; }
