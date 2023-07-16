import { PageContainer, ThumbnailContainer } from '@/components';
import { Video } from '@/interfaces/Video';
import { getVideos } from '@/lib/services/getVideos';

export default async function Home() {
    const videos: Video[] = await getVideos();

    return (
        <PageContainer className={'p-4'}>

            <div className='flex gap-4'>
                {
                    videos.filter(video => video.isTrending).map(video => (
                        <ThumbnailContainer video={video} noExtend={false} />
                    ))

                }

            </div>


            <div className='flex flex-wrap gap-4 mt-12'>
                {
                    videos.map(video => (
                        <ThumbnailContainer video={video} noExtend={true} />

                    ))

                }

            </div>
        </PageContainer>
    );
}



