import { NextResponse } from "next/server"

export const GET=async()=>{
    return NextResponse.json({message:'hello from nextJs'})
}
export const POST=async(request:Request)=>{
    return NextResponse.json({message:'hello from nextJs'})
}
export const PATCH=async()=>{
    return NextResponse.json({message:'hello from nextJs'})
}
export const PUT=async()=>{
    return NextResponse.json({message:'hello from nextJs'})
}
export const DELETE=async()=>{
    return NextResponse.json({message:'hello from nextJs'})
}