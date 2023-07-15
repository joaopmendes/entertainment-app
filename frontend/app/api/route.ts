import { NextResponse } from 'next/server';
import data from '@/data/data.json';

export async function GET() {
    setTimeout(() => {
        return NextResponse.json(data);
    }, 3000);
}