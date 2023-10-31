// app/fetchUrl.js

import prisma from '@/prisma/prisma';

export async function GET() {

  try {
    const webData = await prisma.webs.findFirst();
    return Response.json(webData, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Error fetching URL' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
