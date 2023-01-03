import React from 'react';

type tp = {
  id: number;
  name: string;
};

type ITempProps = {
  value: tp[];
  title: string;
};

export const Temp = (props: ITempProps): JSX.Element => {
  //  console.log(props.value);
  const { value } = props;
  // const { key } = props;
  const { title } = props;
  console.log(value);
  // console.log(key);
  console.log(title);
  // productList = props.productList;
  return (
    <section className="product">
      {` &{props.title} `}
      <div className="product__sort"> Sort </div>
      <div className="product__list">
        {/* {
          renderedItems.map((item: ICartItem): JSX.Element => (
  <CartItemRow item={item} state={props.state} key={item.id}/>
))

          <ProductItem />
          } */}
        Product
      </div>
      <div>No element</div>
    </section>
  );
};

export default Temp;
