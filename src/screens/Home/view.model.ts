import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import SnackModel from '~/common/model/snack.model';
import { getPercentageOfSnacksOnDiet } from '~/utils/array';

import { getSnacks } from '~/storage/snack';
import { cardVariant } from './components/DietProgressCard';

function useHomeViewModel() {
  const navigation = useNavigation();

  const [snacks, setSnacks] = useState<SnackModel[]>([]);

  const snacksOnDietPercentage = getPercentageOfSnacksOnDiet(snacks);

  const snackCardVariant: cardVariant = snacksOnDietPercentage >= 50 ? 'green' : 'red';

  useFocusEffect(
    useCallback(() => {
      fetchSnacks();
    }, [])
  );

  function handleNewSnack() {
    navigation.navigate('NewSnack');
  }

  function handleDetailSnack(id: string) {
    navigation.navigate('SnackDetail', {
      snackId: id,
    });
  }

  function handleSnackResume() {
    navigation.navigate('SnackResume', {
      snackPercent: snacksOnDietPercentage,
      snacks: snacks,
    });
  }

  function fetchSnacks() {
    getSnacks().then(setSnacks);
  }

  return {
    snacks,
    snacksOnDietPercentage,
    handleNewSnack,
    handleSnackResume,
    snackCardVariant,
    handleDetailSnack,
  };
}

export default useHomeViewModel;
