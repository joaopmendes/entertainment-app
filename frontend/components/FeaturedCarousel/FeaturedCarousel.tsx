'use client';
import { Video } from '@/interfaces/Video';
import Carousel from 'react-slick';
import { ThumbnailContainer } from '@/components/Thumbnail/ThumbnailContainer';

type IFeaturedCarouseProps = {
    videos: Video[];
}

export const FeaturedCarousel = ({ videos }: IFeaturedCarouseProps) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <Carousel {...settings} className={'w-full h-40'}>
            {videos.filter(video => video.isTrending).map(video => (
                <div key={video.title} className={'my-4'}>
                    <ThumbnailContainer key={video.title} video={video} noExtend={false} />
                </div>
            ))}
        </Carousel>
    );
};