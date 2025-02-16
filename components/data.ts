import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
}

export async function storeNumbers(key: string, value: number) {
  try {
    await AsyncStorage.setItem(key, String(value));
  } catch(e) {
    console.error(e);
  }
}

export async function getData(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
    return null;
  }
}
