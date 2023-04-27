import { renderHook, waitFor, act } from '@testing-library/react-native';
import SnackModel from '~/common/model/snack.model';
import useNewSnackViewModel from '../screens/NewSnack/view.model';

import * as storageSnack from '~/storage/snack';

const snack: SnackModel = {
  id: '1',
  date: '20/04/2023',
  time: '10:00',
  snack: 'Bolo de cenoura',
  description: 'Bolo de cenoura com cobertura de chocolate',
  isOnDiet: false,
};

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

const mockedStore = jest.fn();
const mockedGet = jest.fn();

mockedStore.mockReturnValue(snack);
mockedGet.mockReturnValue(snack);

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    setItem: mockedStore,
    getItem: mockedGet,
  };
});

const createSnackSpy = jest.spyOn(storageSnack, 'createSnack');

describe('New snack', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })

  it('should add a new snack to the list', async () => {
    const { result } = renderHook(() => useNewSnackViewModel());

    act(() => {
      result.current.formik.setFieldValue('snack', snack.snack);
      result.current.formik.setFieldValue('description', snack.description);
      result.current.formik.setFieldValue('date', snack.date);
      result.current.formik.setFieldValue('time', snack.time);
      result.current.formik.setFieldValue('isOnDiet', snack.isOnDiet);
    });

    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    expect(mockedStore).toHaveBeenCalledTimes(0);

    act(() => {
      result.current.formik.handleSubmit();
    });

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalled());

    expect(createSnackSpy).toHaveBeenCalledTimes(1);
    expect(createSnackSpy).toHaveBeenCalledWith({ ...snack, id: result.current.formik.values.id });
  });

  it('should not add a new snack if snack name is missing', async () => {
    const { result } = renderHook(() => useNewSnackViewModel());

    act(() => {
      result.current.formik.setFieldValue('snack', '');
      result.current.formik.setFieldValue('description', snack.description);
      result.current.formik.setFieldValue('date', snack.date);
      result.current.formik.setFieldValue('time', snack.time);
      result.current.formik.setFieldValue('isOnDiet', snack.isOnDiet);
    });

    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    expect(mockedStore).toHaveBeenCalledTimes(0);

    act(() => {
      result.current.formik.handleSubmit();
    });

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledTimes(0));
    expect(createSnackSpy).toHaveBeenCalledTimes(0);
  });

  it('should not add a new snack if snack description is missing', async () => {
    const { result } = renderHook(() => useNewSnackViewModel());

    act(() => {
      result.current.formik.setFieldValue('snack', snack.snack);
      result.current.formik.setFieldValue('description', '');
      result.current.formik.setFieldValue('date', snack.date);
      result.current.formik.setFieldValue('time', snack.time);
      result.current.formik.setFieldValue('isOnDiet', snack.isOnDiet);
    });

    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    expect(mockedStore).toHaveBeenCalledTimes(0);

    act(() => {
      result.current.formik.handleSubmit();
    });

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledTimes(0));
    expect(createSnackSpy).toHaveBeenCalledTimes(0);
  })

  it('should not add a new snack if snack date is missing', async () => {
    const { result } = renderHook(() => useNewSnackViewModel());

    act(() => {
      result.current.formik.setFieldValue('snack', snack.snack);
      result.current.formik.setFieldValue('description', snack.description);
      result.current.formik.setFieldValue('date', '');
      result.current.formik.setFieldValue('time', snack.time);
      result.current.formik.setFieldValue('isOnDiet', snack.isOnDiet);
    });

    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    expect(mockedStore).toHaveBeenCalledTimes(0);

    act(() => {
      result.current.formik.handleSubmit();
    });

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledTimes(0));
    expect(createSnackSpy).toHaveBeenCalledTimes(0);
  })

  it('should not add a new snack if snack time is missing', async () => {
    const { result } = renderHook(() => useNewSnackViewModel());

    act(() => {
      result.current.formik.setFieldValue('snack', snack.snack);
      result.current.formik.setFieldValue('description', snack.description);
      result.current.formik.setFieldValue('date', snack.date);
      result.current.formik.setFieldValue('time', '');
      result.current.formik.setFieldValue('isOnDiet', snack.isOnDiet);
    });

    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    expect(mockedStore).toHaveBeenCalledTimes(0);

    act(() => {
      result.current.formik.handleSubmit();
    });

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledTimes(0));
    expect(createSnackSpy).toHaveBeenCalledTimes(0);
  });

  it('should not add a new snack if snack isOnDiet is missing', async () => {
    const { result } = renderHook(() => useNewSnackViewModel());

    act(() => {
      result.current.formik.setFieldValue('snack', snack.snack);
      result.current.formik.setFieldValue('description', snack.description);
      result.current.formik.setFieldValue('date', snack.date);
      result.current.formik.setFieldValue('time', snack.time);
      result.current.formik.setFieldValue('isOnDiet', '');
    });

    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    expect(mockedStore).toHaveBeenCalledTimes(0);

    act(() => {
      result.current.formik.handleSubmit();
    });

    await waitFor(() => expect(mockedNavigate).toHaveBeenCalledTimes(0));
    expect(createSnackSpy).toHaveBeenCalledTimes(0);
  });
});
