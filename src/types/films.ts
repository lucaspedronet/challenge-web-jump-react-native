export type FilmsData = {
  films: Films[];
  loading: boolean;
}

export type Films = {
  title :  string,
  ano :  number,
  ids :  {
    trak :  number,
    slug :  string,
    imdb :  string,
    tmdb :  number
  }
}
