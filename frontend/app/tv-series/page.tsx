﻿import React from 'react';
import { Video } from '@/interfaces/Video';
import { getVideos } from '@/lib/services/getVideos';
import { ThumbnailContainer } from '@/components/Thumbnail/ThumbnailContainer';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { VideoCategory } from '@/constants/VideoCategory';

type PageProps = {
    searchParams: { search: string }
}

export default async function TvSeries({ searchParams: { search } }: PageProps) {
    const videos: Video[] = await getVideos(search ?? '', VideoCategory.TV_SERIES);

    return (
        <React.Fragment>

            <SearchBar placeholder={'Search for TV Series'} initialValue={search ?? ''} />


            <h2 className={'text-heading-l text-white mt-6'}>
                {search?.length ? `Found ${videos.length} for '${search}'` : `TV Series`}
            </h2>

            <div className='flex flex-wrap gap-4 mt-8'>
                {
                    videos.map(video => (
                        <ThumbnailContainer key={video.title} video={video} noExtend={true} />
                    ))
                }
            </div>
        </React.Fragment>
    );
}



