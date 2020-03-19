import { questions } from '../services';

export interface Injections {
  questionsService: typeof questions;
}

export const injections: Injections = {
  questionsService: questions,
};
