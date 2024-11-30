import BlogSearch from "@/components/BlogSearch";
import { deleteBlog } from "@/server-actions/serverActions";
import { baseUrl } from "@/utils/data";
import Link from "next/link";
import { BsPostcard } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default async function Draft() {
  const response = await fetch(`${baseUrl}/api/blogs/draft`, {
    next: { revalidate: 3000 },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "failed to fetch the draft blogs");
  }
  const responseData = await response.json();
  const draftBlogs = responseData.data;
  return (
    <div className="blogpage">
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            All Draft <span>Blogs</span>
          </h2>
          <h3>Admin Panel</h3>
        </div>
        <div className="breadcrumb">
          <BsPostcard /> <span>/</span> <span>Draft Blogs</span>
        </div>
      </div>

      <div className="blogstable">
        <table className="table table-styling">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>

          <tbody>
            {draftBlogs?.map((dBlog, i) => (
              <tr key={dBlog?._id}>
                <td>{i + 1}</td>
                <td>{dBlog?.title}</td>
                <td>{dBlog?.slug}</td>
                <td>
                  <div className="flex gap-2 flex-center">
                    <Link href={`/blogs/edit/${dBlog?._id}`}>
                      <button title="edit">
                        <FaEdit />
                      </button>
                    </Link>
                    <form action={deleteBlog}>
                      <input type="hidden" name="_id" value={dBlog?._id} />
                      <button type="submit">
                        <MdDelete />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* pagination will be here after addition of database */}
      </div>
    </div>
  );
}
