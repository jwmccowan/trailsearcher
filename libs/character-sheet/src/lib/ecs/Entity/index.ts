import { Component } from '../Component';

export type Entity = {
  id: number;
  components: Component[];
};

let nextId = 1;
export const createEntity = (...components: Component[]): Entity => ({
  id: nextId++,
  components,
});
