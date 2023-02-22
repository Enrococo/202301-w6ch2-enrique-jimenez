import crypto from 'node:crypto';
import { RequestHandler } from 'express';
import { createThing, findAll, findById, Thing } from './things-model.js';

export const getThingsController: RequestHandler = (_req, res) => {
  res.json(findAll());
};

export const createThingController: RequestHandler = (req, res) => {
  const id = crypto.randomUUID();
  const thing: Thing = {
    id,
    ...req.body,
  };
  createThing(thing);
  res.status(201).json(thing);
};

export const getThingsByIdController: RequestHandler = (req, res) => {
  const { id } = req.params;
  const thing = findById(id);
  if (thing === undefined) {
    res.sendStatus(404);
  } else {
    res.json(thing);
  }
};

export const updateThingsByIdController: RequestHandler = (req, res) => {
  res.sendStatus(405);
};

export const deleteThingsByIdController: RequestHandler = (req, res) => {
  res.sendStatus(405);
};
