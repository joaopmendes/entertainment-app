'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Video } from '@/interfaces/Video';
import { useBookmarks } from '@/hooks';
import { getVideos } from '@/lib/services/getVideos';
import { VideoCategory } from '@/constants/VideoCategory';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { ThumbnailContainer } from '@/components/Thumbnail/ThumbnailContainer';

type PageProps = {
    searchParams: { search: string }
}

export default function Bookmarks({ searchParams: { search } }: PageProps) {
    const [videos, setVideos] = useState<Video[]>([]);
    const { bookmarks } = useBookmarks();

    const fetchVideos = async () => {
        const fetchedVideos: Video[] = await getVideos(search ?? '');
        setVideos(fetchedVideos);
    };


    useEffect(
        () => {
            fetchVideos();
        }, []);

    const tvSeriesVideos = useMemo(() => {
        return videos
            .filter(video => bookmarks.find(bookmark => bookmark.title.toLowerCase() == video.title.toLowerCase())?.isBookmarked ?? false)
            .filter(video => video.category == VideoCategory.TV_SERIES);

    }, [videos, bookmarks]);
    const moviesVideos = useMemo(() => {
        return videos
            .filter(video => bookmarks.find(bookmark => bookmark.title.toLowerCase() == video.title.toLowerCase())?.isBookmarked ?? false)
            .filter(video => video.category == VideoCategory.MOVIE);
    }, [videos, bookmarks]);


    return (
        <React.Fragment>

            <SearchBar placeholder={'Search for movies or TV Series'} initialValue={search ?? ''} />


            {
                moviesVideos?.length > 0 ? <React.Fragment>
                        <h2 className={'text-heading-l text-white mt-6'}>
                            Bookmarked Movies
                        </h2>
                        <div className='flex flex-wrap gap-4 mt-8'>
                            {
                                moviesVideos
                                    .map(video => (
                                        <ThumbnailContainer key={video.title} video={video} noExtend={true} />
                                    ))
                            }
                        </div>
                    </React.Fragment>
                    : null
            }


            {
                tvSeriesVideos?.length > 0 ? <React.Fragment>
                    <h2 className={'text-heading-l text-white mt-6'}>
                        Bookmarked Tv Series
                    </h2>

                    <div className='flex flex-wrap gap-4 mt-8'>
                        {
                            tvSeriesVideos
                                .map(video => (
                                    <ThumbnailContainer key={video.title} video={video} noExtend={true} />
                                ))
                        }
                    </div>
                </React.Fragment> : null
            }

        </React.Fragment>
    );
}



