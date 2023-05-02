
import { act, renderHook } from '@testing-library/react-native';
import useHomeViewModel from '~/screens/Home/view.model';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    const { useEffect } = require('react');

    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
        useRoute: () => ({
            params: {},
        }),
        useFocusEffect: useEffect,
    };
});

const mockedStore = jest.fn();
const mockedGet = jest.fn();


jest.mock('@react-native-async-storage/async-storage', () => {
    return {
        setItem: mockedStore,
        getItem: mockedGet,
    };
});

describe('useHomeViewModel', () => {
    it('should return the correct values', () => {
        const { result } = renderHook(() => useHomeViewModel());
        expect(result.current.snacks).toEqual([]);
        expect(result.current.snacksOnDietPercentage).toEqual(0);
        expect(result.current.snackCardVariant).toEqual('red');
    })

    it('should navigate to NewSnack screen', () => {
        const { result } = renderHook(() => useHomeViewModel());
        act(() => {
            result.current.handleNewSnack();
        });
        expect(mockedNavigate).toHaveBeenCalledWith('NewSnack');
    })

    it('should navigate to SnackResume screen', () => {
        const { result } = renderHook(() => useHomeViewModel());
        act(() => {
            result.current.handleSnackResume();
        });
        expect(mockedNavigate).toHaveBeenCalledWith('SnackResume', {
            snackPercent: 0,
            snacks: [],
        });
    });

    it('should navigate to SnackDetail screen', () => {
        const { result } = renderHook(() => useHomeViewModel());
        act(() => {
            result.current.handleDetailSnack('1');
        });
        expect(mockedNavigate).toHaveBeenCalledWith('SnackDetail', {
            snackId: '1',
        });
    })
});