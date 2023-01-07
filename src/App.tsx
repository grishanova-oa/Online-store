import React, { useState } from 'react';
import './styles.css';
import { CartPage } from './components/CartPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Pages/Main/Main';
import { IProducts } from './modules/types';
import { catalog } from './modules/catalog';

interface ICartItemCount {
  [key: string]: number;
}
const getTotalItemCount = (arrItemCount: number[]) => {
  return arrItemCount.reduce((a, b): number => a + b, 0);
};
export const App: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartData, setCartData] = useState<IProducts[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState<ICartItemCount>({});
  const [discountList, setCountAppliedDiscount] = useState<string[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const changeShowCart = (value: boolean) => {
    setShowCart(value);
  };

  const deleteDiscount = (name: string) => {
    const newDiscountLIst = discountList.filter((item) => name !== item);
    setCountAppliedDiscount(newDiscountLIst);
  };
  const addDiscount = (value: string) => {
    const newDiscountLIst = [...discountList];
    if (!newDiscountLIst.includes(value)) {
      newDiscountLIst.push(value);
    }
    setCountAppliedDiscount(newDiscountLIst);
  };
  const addCountAndAmount = (id: number, price: number) => {
    let newTotalAmount = totalAmount;
    const newCartItemsCount = { ...cartItemsCount };
    const itemCount = newCartItemsCount[id];
    const currentItem = catalog.products.find((elem: IProducts) => elem.id === id);

    if (itemCount === currentItem?.stock) {
      return;
    }
    newTotalAmount += price;
    if (itemCount) {
      newCartItemsCount[id] += 1;
    }
    if (!itemCount) {
      newCartItemsCount[id] = 1;
    }

    setCartItemsCount(newCartItemsCount);
    setTotalAmount(newTotalAmount);
  };

  const removeCountAndAmount = (id: number, price: number) => {
    let newTotalAmount = totalAmount;
    const newCartItemsCount = { ...cartItemsCount };
    const itemCount = newCartItemsCount[id];

    newTotalAmount -= price;
    if (!itemCount) {
      return;
    }
    if (itemCount) {
      newCartItemsCount[id] -= 1;
    }
    if (itemCount === 1) {
      delete newCartItemsCount[id];
      const filteredCartData = cartData.filter((item: IProducts) => item.id !== id);
      setCartData(filteredCartData);
    }

    setCartItemsCount(newCartItemsCount);
    setTotalAmount(newTotalAmount);
  };

  const addToCart = (propsProductItem: IProducts, isAdd: boolean) => {
    const newCArtData = [...cartData];
    newCArtData.push(propsProductItem);

    setCartData(newCArtData);
    if (isAdd) {
      addCountAndAmount(propsProductItem.id, propsProductItem.price);
    } else {
      removeCountAndAmount(propsProductItem.id, propsProductItem.price);
    }
  };
  const onChangeCartCount = (id: number, price: number, isAdd: boolean) => {
    if (isAdd) {
      addCountAndAmount(id, price);
    } else {
      removeCountAndAmount(id, price);
    }
  };
  return (
    <div className="App">
      <Header
        totalItemCount={getTotalItemCount(Object.values(cartItemsCount))}
        totalAmount={totalAmount}
        changeShowCart={changeShowCart}
      />
      {showCart && (
        <CartPage
          deleteDiscount={deleteDiscount}
          discountList={discountList}
          totalItemCount={getTotalItemCount(Object.values(cartItemsCount))}
          totalAmount={totalAmount}
          cartData={cartData}
          cartItemsCount={cartItemsCount}
          onChangeCartCount={onChangeCartCount}
          addDiscount={addDiscount}
        />
      )}
      {!showCart && <Main cartData={cartData} addToCart={addToCart} />}
      <Footer />
    </div>
  );
};
