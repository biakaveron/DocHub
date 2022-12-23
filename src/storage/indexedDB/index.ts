import * as cache from './cache';
import env from '../../helpers/env';

export type TCache = typeof cache;

export type TIdbState = {
  cache: TCache
} | null;

export default (async(): Promise<TIdbState> => {
  if (!self.indexedDB) {
    console.warn('[indexedDB]: Браузер не поддерживает indexedDB!');
  } else if (!env.isCached) {
    console.warn('[indexedDB]: Кэширование отключено.');
  } else {
    /**
     * Таблицы инициализировать здесь
     * Пример: await exampleTable.init();
     */
    await cache.init();

    /**
     * Вернуть инициализированные таблицы(добавить в объект)
     * Пример: return { cache, ...,  exampleTable, ..., }
     */
    return {
      cache
    };
  }

  return null;
})();
