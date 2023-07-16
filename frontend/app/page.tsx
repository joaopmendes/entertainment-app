import { Video } from '@/interfaces/Video';
import { getVideos } from '@/lib/services/getVideos';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { FeaturedCarousel } from '@/components/FeaturedCarousel/FeaturedCarousel';
import { ThumbnailContainer } from '@/components/Thumbnail/ThumbnailContainer';

export default async function Home() {
    const videos: Video[] = await getVideos();

    return (
        <PageContainer className={'p-4'}>

            <h1 className={'text-heading-l text-white my-2'}>Trending</h1>

            <FeaturedCarousel videos={videos} />

            <h2 className={'text-heading-l text-white'}>Recommended for you</h2>

            <div className='flex flex-wrap gap-4 mt-12'>
                {
                    videos.map(video => (
                        <ThumbnailContainer key={video.title} video={video} noExtend={true} />
                    ))
                }
            </div>
        </PageContainer>
    );
}



