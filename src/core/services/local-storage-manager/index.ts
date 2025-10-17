import { LOCAL_STORAGE_KEYS } from '../../constants/local-storage';

// Infer the key type from the constant
type LocalStorageKey = keyof typeof LOCAL_STORAGE_KEYS;

export class LocalStorageManager {
  /**
   * Get a value from local storage
   * @param key - The storage key (must match LOCAL_STORAGE_KEYS)
   * @returns The stored value or null if not found
   */
  get<T = string>(key: LocalStorageKey): T | null {
    try {
      const item = localStorage.getItem(LOCAL_STORAGE_KEYS[key]);
      if (!item) {
        return null;
      }
      
      // Try to parse as JSON, fallback to string
      try {
        return JSON.parse(item) as T;
      } catch {
        return item as unknown as T;
      }
    } catch (error) {
      console.error(`Error getting localStorage item "${key}":`, error);
      return null;
    }
  }

  /**
   * Set a value in local storage
   * @param key - The storage key (must match LOCAL_STORAGE_KEYS)
   * @param value - The value to store
   */
  set(key: LocalStorageKey, value: unknown): void {
    try {
      const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(LOCAL_STORAGE_KEYS[key], serializedValue);
    } catch (error) {
      console.error(`Error setting localStorage item "${key}":`, error);
    }
  }

  /**
   * Remove a value from local storage
   * @param key - The storage key (must match LOCAL_STORAGE_KEYS)
   */
  remove(key: LocalStorageKey): void {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEYS[key]);
    } catch (error) {
      console.error(`Error removing localStorage item "${key}":`, error);
    }
  }

  /**
   * Clear all local storage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }

  /**
   * Check if a key exists in local storage
   * @param key - The storage key (must match LOCAL_STORAGE_KEYS)
   * @returns True if the key exists, false otherwise
   */
  has(key: LocalStorageKey): boolean {
    try {
      return Boolean(localStorage.getItem(LOCAL_STORAGE_KEYS[key]));
    } catch (error) {
      console.error(`Error checking localStorage item "${key}":`, error);
      return false;
    }
  }

  /**
   * Get the number of items in local storage
   * @returns The number of items stored
   */
  size(): number {
    try {
      return localStorage.length;
    } catch (error) {
      console.error('Error getting localStorage size:', error);
      return 0;
    }
  }
}

export default LocalStorageManager;
