import { ShopProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <ShopProvider>
    <UserProvider>
      <GlobalStyles />
      <Router />
    </UserProvider>
  </ShopProvider>
);

export default App;
