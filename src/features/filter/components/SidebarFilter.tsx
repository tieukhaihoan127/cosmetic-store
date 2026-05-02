import FilterAccordion from "./FilterAccordion";
import FilterAccordionWithSearchBar from "./FilterAccordion";

const SidebarFilter = () => {
  return (
    <div className="w-[80%] [@media(max-width:1200px)]:w-[90%] [@media(max-width:1075px)]:!w-[100%] [@media(max-width:991px)]:!w-[95%]">
      <FilterAccordion />
      <FilterAccordionWithSearchBar />
      <FilterAccordionWithSearchBar />
      <FilterAccordionWithSearchBar />
      <FilterAccordionWithSearchBar />
    </div>
  );
};

export default SidebarFilter;