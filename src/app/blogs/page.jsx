import BlogSearch from "@/components/BlogSearch";
import { deleteBlog } from "@/server-actions/serverActions";
import { baseUrl } from "@/utils/data";
import Link from "next/link";
import { BsPostcard } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default async function Blogs({ searchParams }) {
  const { search } = await searchParams;
  console.log(search);

  const response = await fetch(`${baseUrl}/api/blogs?search=${search}`, {
    next: { revalidate: 3000 },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "failed to fetch the blogs");
  }
  const { data } = await response.json();

  return (
    <div className="blogpage">
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            All Published <span>Blogs</span>
          </h2>
          <h3>Admin Panel</h3>
        </div>
        <div className="breadcrumb">
          <BsPostcard /> <span>/</span> <span>Blogs</span>
        </div>
      </div>

      <div className="blogstable">
        <BlogSearch />

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
            {data.map((blog, i) => (
              <tr key={blog?._id}>
                <td>{i + 1}</td>
                <td>{blog?.title}</td>
                <td>{blog?.slug}</td>
                <td>
                  <div className="flex gap-2 flex-center">
                    <Link href={`/blogs/edit/${blog?._id}`}>
                      <button title="edit">
                        <FaEdit />
                      </button>
                    </Link>
                    <form action={deleteBlog}>
                      <input type="hidden" name="_id" value={blog?._id} />
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
