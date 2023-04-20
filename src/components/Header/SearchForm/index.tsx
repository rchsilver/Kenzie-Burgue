import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../context/CartContext';

const SearchForm = () => {
  const { setSearchProduct } = useContext(CartContext);
  return (
    <StyledSearchForm>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        onChange={(event) => {
          setSearchProduct(event.target.value);
        }}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
