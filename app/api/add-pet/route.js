import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  try {
    if (!text) throw new Error("text required");
    await sql`INSERT INTO todos (text) VALUES (${text});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const todos = await sql`SELECT * FROM todos;`;
  return NextResponse.json({ todos }, { status: 200 });
}
