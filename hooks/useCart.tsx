import { useState } from 'react';

import { getUsersCart } from '../api';

const useCart = () => {
  const [userCart, setUserCart] = useState<any>();

  const getUserCart = async () => {
    const response = await getUsersCart();

    const userCart = [...response[0].id_produtos.trim().split(',')];

    console.log(response, 'response');

    const userCartFormat = userCart.map((id) => Number(id));

    setUserCart(userCartFormat);
  };

  if (!userCart) {
    getUserCart();
  }

  return userCart;
};

export default useCart;
