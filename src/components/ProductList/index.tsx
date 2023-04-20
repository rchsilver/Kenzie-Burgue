import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../context/CartContext';

const ProductList = () => {
  const { productFiltred } = useContext(CartContext);
  return (
    <StyledProductList>
      {productFiltred.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
