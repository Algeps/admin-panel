export const getRuDateTimeFormat = (date) => {
  return new Date(date).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const RUB = '\u{20BD}';

export const getCorrectDisplayRuSum = (number) => {
  return `${number.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}  ${RUB}`;
};

export const createHandleChangeAndReset = (setter) => [
  ({ target: { value } }) => setter(value),
  () => setter(''),
];
