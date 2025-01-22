import { Route, Routes } from 'react-router';
import CategoryFlower from '@/pages/Category/Category';
import HomePage from '@/pages/Home/HomePage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:slug" element={<CategoryFlower />} />
    </Routes>
  );
};

export default Router;
