export interface Thing {
  id: string;
  thing: string;
}

const things: Thing[] = [
  { id: '01', thing: 'Que hay sequía' },
  { id: '02', thing: 'Que nunca acabaré un challenge' },
  { id: '03', thing: 'Que Lorena está cucú' },
];

export const findAll = () => things;

export const findById = (id: string) => things.find(thing => thing.id === id);

export const createThing = (newThing: Thing) => {
  if (things.some(thing => thing.id === newThing.id)) {
    throw new Error('You already know that thing');
  }

  things.push(newThing);
};

export const deleteById = (id: string) => {
  const index = things.findIndex(thing => thing.id === id);
  things.splice(index, 1);
};
