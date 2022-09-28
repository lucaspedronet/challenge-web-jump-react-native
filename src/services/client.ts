import { IFilms } from '../types/films';
import { client } from './api';


export async function getFilms(): Promise<IFilms[]> {
  const response = await client.get('movies/popular');

  return response.data;
}
