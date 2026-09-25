import PageMeta from "../components/PageMeta"; import { InternalLink } from "../components/Ui";
export default function NotFoundPage(){return <section className="not-found wrap"><PageMeta title="Page not found" description="This page does not exist."/><p>404</p><h1>This page is not part of the system.</h1><InternalLink to="/">Return home</InternalLink></section>;}
