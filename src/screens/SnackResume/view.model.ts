import { useNavigation, useRoute } from '@react-navigation/native';
import SnackModel from '~/common/model/snack.model';

export default function useSnackResume() {
  const navigation = useNavigation();
  const route = useRoute();

  const { snackPercent, snacks } = route.params as { snackPercent: number; snacks: SnackModel[] };

  const snacksAmount = snacks.length;
  const snakcsOnDiet = snacks.filter((snack) => snack.isOnDiet).length;
  const snacksOutOfDiet = snacksAmount - snakcsOnDiet;

  function handleGoBack() {
    navigation.navigate('Home');
  }

  function findBestSnackSequence() {
    let bestSnackSequence = 0;
    let currentSnackSequence = 0;

    snacks.forEach((snack) => {
      if (snack.isOnDiet) {
        currentSnackSequence++;
      } else {
        if (currentSnackSequence > bestSnackSequence) {
          bestSnackSequence = currentSnackSequence;
        }
        currentSnackSequence = 0;
      }
    });

    if (currentSnackSequence > bestSnackSequence) {
      bestSnackSequence = currentSnackSequence;
    }

    return bestSnackSequence;
  }

  return {
    snackPercent,
    snacks,
    snacksAmount,
    snakcsOnDiet,
    snacksOutOfDiet,
    handleGoBack,
    findBestSnackSequence
  };
}
