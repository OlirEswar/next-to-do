import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const todos = await sql`SELECT text FROM todos;`;
  return NextResponse.json({ todos }, { status: 200 });
}
