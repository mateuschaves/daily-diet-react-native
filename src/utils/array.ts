import SnackModel from '~/common/model/snack.model';
import { getDietDateFormatted } from './string';

function groupSnacksByDate(snacks: SnackModel[]) {
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

function getPercentageOfSnacksOnDiet(snacks: SnackModel[]) {
  if (snacks.length === 0) return 0;

  const snacksOnDiet = snacks.filter((snack) => snack.isOnDiet);
  const percentage = ((snacksOnDiet.length / snacks.length) * 100).toFixed(2);
  return Number(percentage);
}

export { groupSnacksByDate, getPercentageOfSnacksOnDiet };
