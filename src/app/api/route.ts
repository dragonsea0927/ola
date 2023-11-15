import { NextRequest, NextResponse } from 'next/server'

export function GET(
  req: NextRequest,
) {
  return NextResponse.json(
    { data: 'Hello, world!', message: 'fetch successful' },
    { status: 200 })
}

export const responseReturn =
  (status: number, message: string, statusText: string, data?: any, error?: any) => {
    return NextResponse.json({
      status: statusText,
      message: message,
      data: data,
      error: error
    }, {
      status: status,
      headers: { "Content-Type": "application/json" },
    })
  }