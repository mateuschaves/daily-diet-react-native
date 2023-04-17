import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@daily_diet:';

function store<T>(key: string, value: T) {
  return AsyncStorage.setItem(`${STORAGE_KEY}${key}`, JSON.stringify(value));
}

async function get<T>(key: string): Promise<T | null> {
  const stringResponse = await AsyncStorage.getItem(`${STORAGE_KEY}${key}`);
  if (!stringResponse) return null;

  return JSON.parse(stringResponse);
}

export default { store, get };
