import { $authHost, $host } from './index';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createDifficulty = async (difficulty) => {
  const { data } = await $authHost.post('api/difficulty', difficulty);
  return data;
};

export const fetchDifficulties = async () => {
  const { data } = await $host.get('api/difficulty');
  return data;
};

export const createChallenge = async (challenge) => {
  const { data } = await $authHost.post('api/challenge', challenge);
  return data;
};

export const fetchChallenges = async (typeId, difficultyId, page, limit = 5) => {
  const { data } = await $host.get('api/challenge', {
    params: {
      typeId,
      difficultyId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneChallenge = async (id) => {
  const { data } = await $host.get('api/challenge/' + id);
  return data;
};
