import { SearchParams } from "@/typings";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { searchTerm, pages, ...params } = await request.json();
    const searchParams: SearchParams = params;

}