import CollectionBreadcrumb from "../components/common/Breadcrumb/CollectionBreadcrumb"
import HeadFilter from "../components/common/Filter/HeadFilter"
import SidebarFilter from "../components/common/Filter/SidebarFilter"
import ProductList from "../components/common/List/ProductList"
import ProductPagination from "../components/common/Pagination/ProductPagination"

const ProductPage = () => {
  return (
    <div className="w-[90%] mx-auto">
        <CollectionBreadcrumb mainCategory="Trang chủ" subCategory="Trang điểm" categoryName="Trang điểm" />
        <HeadFilter />
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <SidebarFilter />
          </div>
          <div className="col-span-9">
            <ProductList />
            <ProductPagination />
          </div>
        </div>
    </div>
  )
}

export default ProductPage