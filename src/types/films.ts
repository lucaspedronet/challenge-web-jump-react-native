export type FilmsData = {
  films: IFilms;
  loading: boolean;
}

export type IFilms = {
  title :  string,
  ano :  number,
  ids :  {
    trak :  number,
    slug :  string,
    imdb :  string,
    tmdb :  number
  }
}
