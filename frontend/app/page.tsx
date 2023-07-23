import { Video } from '@/interfaces/Video';
import { getVideos } from '@/lib/services/getVideos';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { ThumbnailContainer } from '@/components/Thumbnail/ThumbnailContainer';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { FeaturedCarousel } from '@/components/FeaturedCarousel/FeaturedCarousel';

type PageProps = {
    searchParams: { search: string }
}

export default async function Home({ searchParams: { search } }: PageProps) {
    const videos: Video[] = await getVideos(search ?? '');

    return (
        <PageContainer className={'p-4'}>

            <SearchBar placeholder={'Search for movies or TV Series'} initialValue={search ?? ''} />

            {!search?.length && (
                <>
                    <h1 className={'text-heading-l text-white my-2'}>Trending</h1>
                    <FeaturedCarousel videos={videos} />
                </>
            )}


            <h2 className={'text-heading-l text-white mt-6'}>
                {search?.length ? `Found ${videos.length} for '${search}'` : `Recommended for you`}
            </h2>

            <div className='flex flex-wrap gap-4 mt-8'>
                {
                    videos.map(video => (
                        <ThumbnailContainer key={video.title} video={video} noExtend={true} />
                    ))
                }
            </div>
        </PageContainer>
    );
}



