import { Video } from '@/interfaces/Video';

export const runtime = 'edge';

export const getVideos = async (): Promise<Video[]> => {
    const response = await fetch(process.env.URL + '/api/videos', { method: 'GET', cache: 'no-store' });
    const data: Video[] = await response.json();


    return data?.length ? data : [];
};