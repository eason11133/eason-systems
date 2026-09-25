import { useEffect } from "react";
import { useLocation } from "react-router";
export default function PageMeta({ title, description }) {
  const { pathname } = useLocation();
  useEffect(() => { document.title = `${title} — Eason Systems`; document.querySelector('meta[name="description"]')?.setAttribute("content", description); window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [pathname, title, description]);
  return null;
}
