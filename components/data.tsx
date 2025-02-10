import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeData (key: string, value: any) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error(e);
    }
}

export async function getData (key: string)  {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
    } catch (e) {
        console.error(e);
        return null;
    }
}