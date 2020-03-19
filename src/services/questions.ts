import { api, config } from '../config';

const { params } = config;

export const questions = {
  get: () =>
    api.get<ApiResponseDTO>('', {
      params,
    }),
};
