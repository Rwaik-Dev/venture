import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { SobreNos } from "@/pages/SobreNos";
import { Noticias } from "@/pages/Noticias";
import { Reclamacoes } from "@/pages/Reclamacoes";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<SobreNos />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="reclamacoes" element={<Reclamacoes />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
