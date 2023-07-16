export const VideoCategory = Object.freeze({
    MOVIE: 'Movie',
    TV_SERIES: 'TV Series',
}) as const;


export const ThumbnailIconMapper = {
    [VideoCategory.MOVIE]: '/icons/icon-category-movie.svg',
    [VideoCategory.TV_SERIES]: '/icons/icon-category-tv.svg',
} as const;
