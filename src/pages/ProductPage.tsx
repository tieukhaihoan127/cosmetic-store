import CollectionBreadcrumb from "../components/common/Breadcrumb/CollectionBreadcrumb"
import HeadFilter from "../components/common/Filter/HeadFilter"

const ProductPage = () => {
  return (
    <div className="w-[90%] mx-auto">
        <CollectionBreadcrumb mainCategory="Trang chủ" subCategory="Trang điểm" categoryName="Trang điểm" />
        <HeadFilter />
    </div>
  )
}

export default ProductPage