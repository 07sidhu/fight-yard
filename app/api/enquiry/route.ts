import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI as string

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db('fightyard')
    await db.collection('enquiries').insertOne({
      ...body,
      createdAt: new Date(),
    })
    await client.close()
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 })
  }
}