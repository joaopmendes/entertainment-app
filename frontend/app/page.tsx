import { PageContainer, Thumbnail } from '@/components';
import { Video } from '@/interfaces/Video';
import { getVideos } from '@/lib/services/getVideos';

export default async function Home() {
    const videos: Video[] = await getVideos();

    console.log(videos);
    return (
        <PageContainer className={'p-4 '}>

            <div className='flex flex-wrap gap-4'>
                {
                    videos.map(video => (
                        <Thumbnail>

                            <Thumbnail.Image imageUrl={video.thumbnail.regular.large}>
                                <Thumbnail.Bookmark active={false} />
                                <Thumbnail.Overlay />
                            </Thumbnail.Image>


                            <Thumbnail.AdditionalInformation year={video.year} type={video.category}
                                                             icon={<Thumbnail.ThumbnailIcon type={video.category} />}
                                                             rating={video.rating} />
                            <Thumbnail.Title title={video.title} />
                        </Thumbnail>
                    ))
                }
            </div>
        </PageContainer>
    );
}



