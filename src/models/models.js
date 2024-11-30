import mongoose from "mongoose";

// --- user schema and model ----
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user's name is required"],
    },
    email: {
      type: String,
      required: [true, "user's email is required"],
    },
    image: {
      type: String,
      required: [true, "user's image is required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);

// ---- blog schema and model ----
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "blog title is required"],
    },
    slug: {
      type: String,
      required: [true, "blog slug is required"],
    },
    desc: {
      type: String,
      required: [true, "blog description is required"],
    },

    blogCategory: {
      type: [String],
    },
    tags: {
      type: [String],
    },
    status: {
      type: String,
      required: [true, "blog status is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
