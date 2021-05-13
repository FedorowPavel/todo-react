export function getLastOrder(array) {
  // console.log(array)
  // получаем массив значений свойства id всех объектов task
  const orders = array.map((item) => item.order);

  // если у нас пустой массив, значит начианем нумерацию с единицы
  if (!orders.length) {
    return 1;
  }
  // нвходим макс orders
  const maxOrder = Math.max(...orders);
  // возращаем новый больше макс на 1
  return maxOrder + 1;
}
