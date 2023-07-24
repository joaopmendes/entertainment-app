// Container
import { Title } from '@/components/Thumbnail/compounds/Title/Title';
import { Bookmark } from '@/components/Thumbnail/compounds/Bookmark/Bookmark';
import { AdditionalInformation } from '@/components/Thumbnail/compounds/AdditionalInformation/AdditionalInformation';
import { IThumbnailProps } from '@/components/Thumbnail/types';
import { PropsWithChildren } from 'react';
import { ThumbnailIcon } from '@/components/Thumbnail/compounds/ThumbnailIcon';
import { Overlay } from '@/components/Thumbnail/compounds/Overlay/Overlay';
import { VideoImage } from '@/components/Thumbnail/compounds/Image';

const Thumbnail = ({ children, extended }: PropsWithChildren<IThumbnailProps>) => {

    const widthStyle = extended
        ? `w-60 tablet:w-[470px] desktop:w-[470px] min-w-[240px] tablet:min-w-[470px] desktop:min-w-[470px]`
        : `w-42 tablet:w-56 desktop:w-72  min-w-[164px] tablet:min-w-[220px] desktop:min-w-[280px]`;
    return (
        <div id={'thumbnail-container'} className={`relative ${widthStyle}`}>
            {children}
        </div>
    );
};

Thumbnail.Title = Title;
Thumbnail.Bookmark = Bookmark;
Thumbnail.AdditionalInformation = AdditionalInformation;
Thumbnail.ThumbnailIcon = ThumbnailIcon;
Thumbnail.Overlay = Overlay;
Thumbnail.Image = VideoImage;


export {
    Thumbnail,
};