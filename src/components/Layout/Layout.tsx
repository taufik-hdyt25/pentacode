import { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface ILayoutProps {
  children: ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div >
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
