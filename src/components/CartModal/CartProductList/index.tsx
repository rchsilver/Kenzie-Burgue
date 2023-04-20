import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../context/CartContext';

const CartProductList = () => {
  const { cartList, setCartList } = useContext(CartContext);
  const totalPrice = cartList
    .reduce((total, newValue) => total + newValue.price, 0)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return (
    <StyledCartProductList>
      <ul>
        {cartList.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{totalPrice}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => setCartList([])}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
