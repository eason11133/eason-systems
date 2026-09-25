import { Route, Routes } from "react-router";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import LtaPage from "./pages/LtaPage";
import EotPage from "./pages/EotPage";
import StoryPage from "./pages/StoryPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

export default function App() {
  return <Routes><Route element={<SiteLayout />}><Route index element={<HomePage />} /><Route path="products" element={<ProductsPage />} /><Route path="products/lta" element={<LtaPage />} /><Route path="products/eot" element={<EotPage />} /><Route path="story" element={<StoryPage />} /><Route path="about" element={<AboutPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes>;
}
