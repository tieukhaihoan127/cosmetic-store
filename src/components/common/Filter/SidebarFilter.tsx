import FilterAccordion from "./FilterAccordion"
import FilterAccordionWithSearchBar from "./FilterAccordionWithSearchBar"

const SidebarFilter = () => {
  return (
    <div className="w-[80%]">
      <FilterAccordion />
      <FilterAccordionWithSearchBar />
      <FilterAccordionWithSearchBar />
      <FilterAccordionWithSearchBar />
      <FilterAccordionWithSearchBar />
    </div>
  )
}

export default SidebarFilter