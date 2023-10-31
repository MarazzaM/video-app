import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    // Check if a URL exists in the database
    const existingWeb = await prisma.webs.findFirst();

    if (!existingWeb) {
      return NextResponse.json({ message: 'No URL found to delete' }, { status: 404 });
    }

    // Delete the existing URL
    await prisma.webs.delete({
      where: { id: existingWeb.id },
    });

    await prisma.$disconnect();
    return NextResponse.json({ message: 'URL deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting URL' }, { status: 500 });
  }
}