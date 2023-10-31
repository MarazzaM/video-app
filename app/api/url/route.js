// pages/api/saveUrl.js

import prisma from "@/prisma/prisma";

import { NextResponse } from "next/server";

export async function POST(req) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({ message: 'URL is required' }, { status: 400 });
  }

  try {

    // Check if a URL already exists in the database
    const existingWeb = await prisma.webs.findFirst();

    if (existingWeb) {
      // Update the existing URL
      await prisma.webs.update({
        where: { id: existingWeb.id },
        data: { URL: url },
      });
    } else {
      // Create a new URL entry
      await prisma.webs.create({
        data: { URL: url },
      });
    }

    await prisma.$disconnect();
    return NextResponse.json({ message: 'URL saved successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error saving URL' }, { status: 500 });
  }
}
