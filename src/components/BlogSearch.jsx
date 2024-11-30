"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useDebounce } from "use-debounce";

const BlogSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dbSearchValue] = useDebounce(searchValue, 1000);
  const router = useRouter();

  useEffect(() => {
    const query = dbSearchValue
      ? `?search=${encodeURIComponent(dbSearchValue)}`
      : "";

    router.push(query, undefined, { shallow: true });
  }, [dbSearchValue, router]);

  return (
    <div className="flex gap-2 mb-1">
      <h2>Search Blogs: </h2>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search by Title"
      />
    </div>
  );
};

export default BlogSearch;
