import { ReactNode, useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import Login from '../Login/Login';

interface ILayoutProps {
  children: ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [isLModalLogin, setModalLogin] = useState(false);

  const handleLogin = () => {
    setModalLogin(true);
  };

  return (
    <div>
      <Header onSign={handleLogin} />
      <div>{children}</div>
      <Footer />

      <Login isOpen={isLModalLogin} onClose={() => {
        setModalLogin(false)
      }} />
    </div>
  );
};

export default Layout;
