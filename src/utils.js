export const Repeat = (props) => {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i + 1));
  }

  return items;
}

export const divideNumberToSpace = (num) => {
  const str = String(num);
  
  if (str.length <= 3) return str;

  let space = 0;
  let result = ``;

  for (let i = str.length - 1; i >= 0; i--) {
    if (space === 3) {
      result = ` ` + result;
      space = 0;
    }

    result = str.charAt(i) + result;
    space++;
  }

  return result;
}
