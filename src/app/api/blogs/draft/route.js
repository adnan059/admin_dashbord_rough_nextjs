import { Blog } from "@/models/models";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const draftBlogs = await Blog.find({ status: "draft" });
    return NextResponse.json(
      { success: true, data: draftBlogs },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: error.message || "failed to fetch the draft blogs",
      },
      { status: 500 }
    );
  }
}
