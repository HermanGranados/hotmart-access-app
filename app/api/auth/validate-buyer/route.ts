export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email?.trim();
  const document = body.document?.trim();

  if (email && document) {
    return Response.json({ ok: true });
  }

  return Response.json({ ok: false });
}