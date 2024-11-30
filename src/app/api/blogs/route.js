import { Blog } from "@/models/models";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const { search } = Object.fromEntries(new URL(req.url).searchParams);
    console.log(search);
    const blogs = await Blog.find({ status: "published" });

    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "failed to fetch the blog posts",
      },
      { status: 500 }
    );
  }
}
