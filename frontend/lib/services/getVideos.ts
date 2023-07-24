import { Video } from '@/interfaces/Video';

export const runtime = 'edge';

export const getVideos = async (isClientSide: boolean, search: string, category = ''): Promise<Video[]> => {

    const params = new URLSearchParams();
    params.append('search', search);
    params.append('category', category);

    const response = await fetch(`${isClientSide ? process.env.NEXT_PUBLIC_VERCEL_URL : process.env.VERCEL_URL}/api/videos?` + params.toString(), {
        method: 'GET',
        cache: 'no-store',
    });
    const data: Video[] = await response.json();


    return data?.length ? data : [];
};