import Dexie from 'dexie';

export const db = new Dexie('myPokemonsDB');
db.version(1).stores({
  myPokemons: '++id, pokeId, name, nickname',
});