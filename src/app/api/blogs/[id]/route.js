import { Blog } from "@/models/models";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const blog = await Blog.findById(id);

    return NextResponse.json({ success: true, data: blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "failed to fetch the post" },
      { status: 500 }
    );
  }
}
