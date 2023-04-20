import { useNavigation, useRoute } from '@react-navigation/native';
import SnackModel from '~/common/model/snack.model';

export default function useSnackResume() {
  const navigation = useNavigation();
  const route = useRoute();

  const { snackPercent, snacks } = route.params as { snackPercent: number; snacks: SnackModel[] };

  const bestSequenceInDiet = snacks.reduce((sequence, snack, currentSnackIndex) => {
    if (!snack.isOnDiet) {
      const hasSnackOnDietAfter = snacks.slice(currentSnackIndex).some((snack) => snack.isOnDiet);

      if (!hasSnackOnDietAfter) {
        return sequence;
      }
    }
    return snack.isOnDiet ? sequence + 1 : 0;
  }, 0);

  const snacksAmount = snacks.length;
  const snakcsOnDiet = snacks.filter((snack) => snack.isOnDiet).length;
  const snacksOutOfDiet = snacksAmount - snakcsOnDiet;

  function handleGoBack() {
    navigation.navigate('Home');
  }

  return {
    snackPercent,
    snacks,
    bestSequenceInDiet,
    snacksAmount,
    snakcsOnDiet,
    snacksOutOfDiet,
    handleGoBack,
  };
}
