function getDietDateFormatted(date: string) {
  const titleReversed = date.split('-').reverse().join('.');
  const shortYear = titleReversed.split('.')[2].slice(2, 4);
  const titleFormatted = `${titleReversed.slice(0, 6)}${shortYear}`;

  return titleFormatted;
}

export { getDietDateFormatted };
