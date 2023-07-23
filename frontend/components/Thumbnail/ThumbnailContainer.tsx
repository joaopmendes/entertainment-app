'use client';
import { Video } from '@/interfaces/Video';
import { Thumbnail } from '@/components/Thumbnail/Thumbnail';
import { useBookmarks } from '@/hooks';


type IThumbnailContainer = {
    video: Video;
    noExtend: boolean;
}

export const ThumbnailContainer = ({ video, noExtend }: IThumbnailContainer) => {
    const { toggleBookmark, checkBookmark } = useBookmarks();
    const shouldBeExtended = !noExtend && video.isTrending;


    return (
        <Thumbnail extended={shouldBeExtended}>

            <Thumbnail.Image extended={shouldBeExtended} imageUrl={video.thumbnail.regular.large}>
                <Thumbnail.Bookmark active={checkBookmark(video.title)} onClick={() => {
                    toggleBookmark(video.title);
                }} />
                <Thumbnail.Overlay />
            </Thumbnail.Image>

            <Thumbnail.AdditionalInformation relative={shouldBeExtended} year={video.year} type={video.category}
                                             icon={<Thumbnail.ThumbnailIcon type={video.category} />}
                                             rating={video.rating} />
            <Thumbnail.Title relative={shouldBeExtended} title={video.title} />
        </Thumbnail>
    );
};