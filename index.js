// Є массив[1, 2, 3, 1, 5, 6, 1, 2, 5], треба використовуючи
//  цей масив створити новий, в якому будуть присутні
//  тільки ті значення які повторюються.
// Результат буде [1,2,5]
// Якщо в джерельному масиві усі значення унікальні,
// то створюєте новий пустий масив.

const array = [1, 2, 3, 1, 5, 6, 1, 2, 5];

const newArrSimmilarElem = function (array) {
  const countItem = {};
  for (const item of array) {
    countItem[item] = countItem[item] ? countItem[item] + 1 : 1;
  }
  const result = [];
  for (const key in countItem) {
    if (countItem[key] > 1) {
      result.push(key);
    }
  }
  return result;
};
