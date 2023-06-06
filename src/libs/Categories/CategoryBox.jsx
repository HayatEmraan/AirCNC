import queryString from "query-string";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const holdParams = searchParams.get("category");
  const navigate = useNavigate();
  const handleQuery = () => {
    let queryParams = {};
    if (searchParams) {
      queryParams = queryString.parse(searchParams.toString());
    }
    const createQuery = {
      ...queryParams,
      category: label,
    };
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: createQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };
  return (
    <div
      onClick={handleQuery}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
