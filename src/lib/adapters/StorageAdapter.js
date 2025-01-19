const memoryStorage = new Map();
// memoryStorage will not persist after refresh but is only applied in non-browser environments
const isBrowser = typeof window !== 'undefined' && window.localStorage;

export const StorageAdapter = {
  getEntries() {
    if (isBrowser) {
      return JSON.parse(localStorage.getItem('journalEntries') || '[]');
    } else {
      return memoryStorage.get('journalEntries') || [];
    }
  },
  saveEntry(entry) {
    if (isBrowser) {
      const entries = StorageAdapter.getEntries();
      entries.push(entry);
      localStorage.setItem('journalEntries', JSON.stringify(entries));
    } else {
      let entries = memoryStorage.get('journalEntries') || [];
      entries.push(entry);
      memoryStorage.set('journalEntries', entries);
    }
  },
};