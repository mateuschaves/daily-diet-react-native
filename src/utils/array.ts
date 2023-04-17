import SnakModel from '~/common/model/snack.model';
import { getDietDateFormatted } from './string';

function groupSnacksByDate(snacks: SnakModel[]) {
  const groupedSnacks = snacks.reduce((acc, snack) => {
    const date = snack.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(snack);
    return acc;
  }, {} as { [key: string]: typeof snacks });
  return Object.keys(groupedSnacks).map((date) => {
    return {
      title: getDietDateFormatted(date),
      data: groupedSnacks[date],
    };
  });
}

function getPercentageOfSnacksOnDiet(snacks: SnakModel[]) {
  if (snacks.length === 0) return '0,00';

  const snacksOnDiet = snacks.filter((snack) => snack.isOnDiet);
  const percentage = ((snacksOnDiet.length / snacks.length) * 100).toFixed(2).replace('.', ',');
  return percentage;
}

export { groupSnacksByDate, getPercentageOfSnacksOnDiet };
