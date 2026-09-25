import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Status } from "./Ui";
export default function ProductCard({ product, featured = false }) { return <Link className={`product-card ${featured ? "featured" : ""}`} to={product.href}><div className="product-card-meta"><strong>{product.name}</strong><Status live={product.status === "Live"}>{product.status}</Status></div><div className="card-copy"><h2>{product.tagline}</h2><p>{product.description}</p></div><p className="product-capabilities">{product.meta.join(" · ")}</p><span className="card-action">View product <ArrowRight size={17} aria-hidden="true"/></span></Link>; }
