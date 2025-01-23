import { Route, Routes } from 'react-router';
import CategoryFlower from '@/pages/Category/Category';
import HomePage from '@/pages/Home/HomePage';
import { AboutPage } from '@/pages/About';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/:slug" element={<CategoryFlower />} />
    </Routes>
  );
};

export default Router;
