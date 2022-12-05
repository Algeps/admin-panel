export const RUB = '\u{20BD}';

export const getRuDateTimeFormat = (date) => {
  return new Date(date).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getCorrectDisplayRuSum = (number) => {
  return `${number
    .split('')
    .reverse()
    .map((number, index) => (index % 3 === 0 ? number + ' ' : number))
    .reverse()
    .join('')
    .trim()}  ${RUB}`;
};
