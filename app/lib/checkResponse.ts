import { Log } from './logger';

export const checkResponse = async (res: Response) => {
  Log(
    `Response Status for ${res.url} code : ${res.status}`,
    await res.clone().json(),
  );
};
