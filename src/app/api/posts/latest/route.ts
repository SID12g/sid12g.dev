export const revalidate = 3600;

async function getLatestPosts() {
  const response = await fetch("https://blog.sid12g.dev/api/posts/latest");

  if (!response.ok) {
    throw new Error(`포스트를 불러오는데 실패했습니다. ${response.status}`);
  }

  return response.json();
}

export async function GET() {
  try {
    const data = await getLatestPosts();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: `포스트를 불러오는데 실패했습니다. ${error}` },
      { status: 500 },
    );
  }
}
