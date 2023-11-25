import { NextResponse } from 'next/server'
import axios from "axios";

export async function POST(req,res) {
    const JSONBody = await req.json();
    try {
        const rawResponse = await axios.post('http://localhost:5000/api/v1/createFunc',{
            firstName:JSONBody.firstName,
            lastName: JSONBody.lastName,
            email: JSONBody.email
        });
        console.log(rawResponse)
        return NextResponse.json({status:"success"})
    }catch(e) {
        return NextResponse.json(e)
    }

}