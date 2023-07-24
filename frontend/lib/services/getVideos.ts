import { Video } from '@/interfaces/Video';

export const runtime = 'edge';


const getProtocol = () => {

    const isHttp = process.env.USE_HTTP == 'true' || process.env.NEXT_PUBLIC_USE_HTTP == 'true';
    return isHttp ? 'http://' : 'https://';
};

const getWebsiteUrl = (endpoint: string) => {
    const url = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

    if (!url) throw new Error('No URL defined');

    return `${getProtocol()}${url}${endpoint}`;

};

export const getVideos = async (search: string, category = ''): Promise<Video[]> => {

    const params = new URLSearchParams();
    params.append('search', search);
    params.append('category', category);


    const response = await fetch(getWebsiteUrl('/api/videos?' + params.toString()), {
        method: 'GET',
        cache: 'no-store',
    });
    const data: Video[] = await response.json();


    return data?.length ? data : [];
};