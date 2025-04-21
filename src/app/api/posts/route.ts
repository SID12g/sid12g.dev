import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://post.sid12g.dev/api/posts/latest");

    if (!response.ok) {
      throw new Error(`포스트를 불러오는데 실패했습니다. ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `포스트를 불러오는데 실패했습니다. ${error}` },
      { status: 500 }
    );
  }
}
