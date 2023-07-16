import { Video } from '@/interfaces/Video';
import { Thumbnail } from '@/components';


type IThumbnailContainer = {
    video: Video;
    noExtend: boolean;
}

export const ThumbnailContainer = ({ video, noExtend }: IThumbnailContainer) => {


    const shouldBeExtended = !noExtend && video.isTrending;

    return (
        <Thumbnail extended={shouldBeExtended}>

            <Thumbnail.Image extended={shouldBeExtended} imageUrl={video.thumbnail.regular.large}>
                <Thumbnail.Bookmark active={false} />
                <Thumbnail.Overlay />
                <Thumbnail.AdditionalInformation relative year={video.year} type={video.category}
                                                 icon={<Thumbnail.ThumbnailIcon
                                                     type={video.category} />}
                                                 rating={video.rating} />
                <Thumbnail.Title relative title={video.title} />
            </Thumbnail.Image>
        </Thumbnail>
    );
};