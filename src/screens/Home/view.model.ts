import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import SnackModel from '~/common/model/snack.model';
import { getPercentageOfSnacksOnDiet } from '~/utils/array';

import { getSnacks } from '~/storage/snack';

function useHomeViewModel() {
  const navigation = useNavigation();

  const [snacks, setSnacks] = useState<SnackModel[]>([]);

  useFocusEffect(
    useCallback(() => {
      fetchSnacks();
    }, [])
  );

  function handleNewSnack() {
    navigation.navigate('NewSnack');
  }

  function fetchSnacks() {
    getSnacks().then(setSnacks);
  }

  const snacksOnDietPercentage = getPercentageOfSnacksOnDiet(snacks);

  return {
    snacks,
    snacksOnDietPercentage,
    handleNewSnack,
  };
}

export default useHomeViewModel;
