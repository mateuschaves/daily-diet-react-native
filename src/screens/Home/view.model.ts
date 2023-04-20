import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import SnackModel from '~/common/model/snack.model';
import { getPercentageOfSnacksOnDiet } from '~/utils/array';

import { getSnacks } from '~/storage/snack';

function useHomeViewModel() {
  const navigation = useNavigation();

  const [snacks, setSnacks] = useState<SnackModel[]>([]);

  const snacksOnDietPercentage = getPercentageOfSnacksOnDiet(snacks);

  useFocusEffect(
    useCallback(() => {
      fetchSnacks();
    }, [])
  );

  function handleNewSnack() {
    navigation.navigate('NewSnack');
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
  };
}

export default useHomeViewModel;
