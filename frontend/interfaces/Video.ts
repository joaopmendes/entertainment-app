export type VideoThumbnailRegular = {
    small: '/thumbnails/beyond-earth/regular/small.jpg',
    medium: '/thumbnails/beyond-earth/regular/medium.jpg',
    large: '/thumbnails/beyond-earth/regular/large.jpg'
};
export type VideoThumbnailTrending = {
    small: '/thumbnails/beyond-earth/trending/small.jpg',
    large: '/thumbnails/beyond-earth/trending/large.jpg'
};
export type Thumbnail = {
    trending: VideoThumbnailTrending,
    regular: VideoThumbnailRegular
}


export type Video = {
    title: string,
    thumbnail: Thumbnail,
    year: number,
    category: 'Movie' | 'TV Series',
    rating: string,
    isBookmarked: false,
    isTrending: true
}
