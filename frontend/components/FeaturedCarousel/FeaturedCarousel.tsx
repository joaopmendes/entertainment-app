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
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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