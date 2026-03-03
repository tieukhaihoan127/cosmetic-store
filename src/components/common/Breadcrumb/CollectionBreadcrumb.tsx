import { Link } from "react-router-dom";

interface CollectionBreadcrumbProps {
  mainCategory: string;
  subCategory: string;
  categoryName: string;
}

const CollectionBreadcrumb = (props: CollectionBreadcrumbProps) => {

  return (
    <div className="mt-[10px]">
      <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
        <Link to="/" className="text-[12px]">
          {props.mainCategory}
        </Link>
        <div className="text-[14px]">{">"}</div>
        <Link to="/" className="text-[12px]">
          {props.subCategory}
        </Link>
      </div>
      <div className="text-[25px] leading-[25px] font-bold uppercase mt-[20px] mb-[15px]">
        {props.categoryName}
      </div>
    </div>
  )
}

export default CollectionBreadcrumb