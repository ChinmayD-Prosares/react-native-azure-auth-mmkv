import { MMKV } from 'react-native-mmkv'

export const MMKVStorage = new MMKV()

const setItem = (key, value) => {
    MMKVStorage.set(key, value)
}

const setJSONItem = (key, value) => {
    const jsonString = JSON.stringify(value)
    MMKVStorage.set(key, jsonString)
}

const getItem = (key) => {
    return MMKVStorage.getString(key)
}

const getJSONItem = (key) => {
    const jsonString = MMKVStorage.getString(key)
    return jsonString ? JSON.parse(jsonString) : null
}

const removeItem = (key) => {
    MMKVStorage.delete(key)
}

const clear = () => {
    MMKVStorage.clearAll()
}

const storageKeys = MMKVStorage.getAllKeys()

const storage = {
    setItem,
    setJSONItem,
    getItem,
    getJSONItem,
    removeItem,
    clear,
    storageKeys,
}

export { storage }
