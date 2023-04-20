import { createContext, useState } from 'react';
import { IDefaultProviderProps } from './@types';

interface ICartContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productsList: IProduct[];
  setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  seachProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
  productFiltred: IProduct[];
  cartList: IProduct[];
  setCartList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addProductCart: (id: string | number) => void;
  removeProductCart: (id: string | number) => void;
}

export interface IProductList {
  product: IProduct;
}

export interface IProduct {
  id: string | number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CartContext = createContext({} as ICartContext);
export const ShopProvider = ({ children }: IDefaultProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [seachProduct, setSearchProduct] = useState('');
  const [cartList, setCartList] = useState<IProduct[]>([]);

  const productFiltred = productsList.filter((product) =>
    seachProduct === ''
      ? true
      : product.name
          .trim()
          .toLowerCase()
          .includes(seachProduct.trim().toLowerCase()) ||
        product.category
          .trim()
          .toLowerCase()
          .includes(seachProduct.trim().toLowerCase())
  );

  const addProductCart = (id: string | number) => {
    productFiltred.map((productCart) => {
      if (productCart.id === id && !cartList.includes(productCart)) {
        return setCartList([...cartList, productCart]);
      }
    });
  };

  const removeProductCart = (id: string | number) => {
    const cartFiltred = cartList.filter((itemCart) => itemCart.id !== id);
    setCartList(cartFiltred);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        productsList,
        setProductsList,
        seachProduct,
        setSearchProduct,
        productFiltred,
        cartList,
        setCartList,
        addProductCart,
        removeProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
