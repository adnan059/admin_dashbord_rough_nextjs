import { Blog } from "@/models/models";
import connectDB from "@/utils/connectDB";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const reqBody = await request.json();

    const newBlog = await Blog.create(reqBody);

    revalidatePath("/blogs");
    revalidatePath("/draft");

    return NextResponse.json(
      { success: true, message: "new blog created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "failed to create blog" },
      { status: 500 }
    );
  }
}
