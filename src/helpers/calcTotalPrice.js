const calcTotalPrice = (array) => {
  let number = 0;

  array.forEach(({ quantity, instance }) => {
    number += instance.currentPrice * quantity;
  });

  return number;
};

export default calcTotalPrice;
