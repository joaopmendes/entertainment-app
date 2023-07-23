import { NextRequest, NextResponse } from 'next/server';
import data from '@/data/data.json';

export async function GET(req: NextRequest) {

    var search = req.nextUrl.searchParams.get('search');

    var tempData = [...data];

    if (search && search.length) {
        tempData = tempData.filter(video => video.title.toLowerCase().includes(search.toLowerCase()));
    }

    return NextResponse.json(tempData);
}