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
        speed: 1,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1115,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],

    };
    return (
        <Carousel {...settings} className={'w-full h-40'}>
            {videos.filter(video => video.isTrending).map(video => (
                <div key={video.title}>
                    <ThumbnailContainer key={video.title} video={video} noExtend={false} />
                </div>
            ))}
        </Carousel>
    );
};