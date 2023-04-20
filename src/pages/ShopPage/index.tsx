import { useContext, useEffect } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../context/CartContext';
import { api } from '../../service/api';

const ShopPage = () => {
  const { isOpen, setProductsList } = useContext(CartContext);

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    const getProductsList = async () => {
      try {
        const response = await api.get(`/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductsList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductsList();
  }, []);

  return (
    <StyledShopPage>
      {isOpen ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
