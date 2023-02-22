export interface Thing {
  id: string;
  thing: string;
}

const things: Thing[] = [];

export const findAll = () => things;

export const findById = (id: string) => things.find(thing => thing.id === id);

export const createThing = (newThing: Thing) => {
  if (things.some(thing => thing.id === newThing.id)) {
    throw new Error('The student exits');
  }

  things.push(newThing);
};
