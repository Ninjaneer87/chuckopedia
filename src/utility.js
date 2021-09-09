function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const threeRandomItems = (arr) => {
  const items = [];
  const indexes = [];

  while (items.length < 3) {
    const randomIndex = randomize(0, arr.length - 1);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex)
      items.push(arr[randomIndex])
    };
  }
  
  return items;
};

export const createJokesUrl = category => `https://api.chucknorris.io/jokes/random?category=${category}`;

export const getUniqueElementsFromArray = array => {
  const uniqueItems = array.filter(
    (item, index, arr) =>
      index === arr.findIndex((it) => it.id === item.id)
  );
  return uniqueItems;
}

export const formatDate = (date) => {
  const formattedDate = new Date(date);
  // const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentYear = new Date().getFullYear();

  const day = formattedDate.getDate();
  const month = formattedDate.getMonth();
  const year = formattedDate.getFullYear();
  return `${mS[month]} ${day}${year === currentYear ? '' : `, ${year}`}`;
}