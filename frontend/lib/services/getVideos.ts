import { Video } from '@/interfaces/Video';


export const getVideos = async (): Promise<Video[]> => {
    const response = await fetch<Video[]>(process.env.URL + '/api/videos', { cache: 'no-cache' });
    if (!response.ok) {
        return [];
    }
    return await response.json();
};