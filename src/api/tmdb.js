const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';
export const imageBaseUrl = 'http://image.tmdb.org/t/p';

export const imageSize = {
  thumbnail: "/w300",
  backdrop: "/w1280"
}

export const getTopRatedUrl = (mediaType) => {
  checkMedia(mediaType);
  return `${baseUrl}/${mediaType}/top_rated?api_key=${apiKey}&language=en-US`;
}

export const getVideosUrl = (mediaType, mediaId) => {
  checkMedia(mediaType);
  return `${baseUrl}/${mediaType}/${mediaId}/videos?api_key=${apiKey}&language=en-US`;
}

export const getGenresUrl = (mediaType) => {
  checkMedia(mediaType);
  return `${baseUrl}/genre/${mediaType}/list?api_key=${apiKey}`;
};

export const getTrendingUrl = (mediaType) => {
  checkMedia(mediaType)
  return `${baseUrl}/trending/${mediaType}/week?api_key=${apiKey}&language=en-US`;
}

export const getGenreUrl = (mediaType, genreId) => {
  checkMedia(mediaType);
  return `${baseUrl}/discover/${mediaType}?api_key=${apiKey}&with_genres=${genreId}`;
};

export const getMovieExternalUrl = (mediaType, mediaId) => {
  checkMedia(mediaType);
  return `${baseUrl}/${mediaType}/${mediaId}/external_ids?api_key=${apiKey}`
}

const checkMedia = (mediaType) => {
  if (mediaType !== "movie" && mediaType !== "tv") {
    throw Object.assign(
      new Error("[ tmdb.js ] media type should be \"movie\" or \"tv\""),
      {code: 402}
    );
  }
}
