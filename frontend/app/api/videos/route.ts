import { NextRequest, NextResponse } from 'next/server';
import data from '@/data/data.json';

export async function GET(req: NextRequest) {

    const search = req.nextUrl.searchParams.get('search');
    const category = req.nextUrl.searchParams.get('category');
    let tempData = [...data];

    if (search) {
        tempData = tempData.filter(video => video.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (category) {
        tempData = tempData.filter(video => video.category == category);
    }

    return NextResponse.json(tempData);
}