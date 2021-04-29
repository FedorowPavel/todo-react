export function generateId(array) {
  // console.log(array)
  // получаем массив значений свойства id всех объектов task
  const ids = array.map((item) => item.id);

  // если у нас пустой массив, значит начианем нумерацию с единицы
  if (!ids.length) {
    return 1;
  }
  // нвходим макс айди
  const maxId = Math.max(...ids);
  // возращаем новый больше макс на 1
  return maxId + 1;
}
