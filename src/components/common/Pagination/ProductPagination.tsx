import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

const ProductPagination = () => {
  const [page, setPage] = useState(1);
  const count = 20;

  return (
    <Stack alignItems="center" className="mt-[15px]">
      <Pagination
        page={page}
        count={count}
        siblingCount={1}
        boundaryCount={1}
        onChange={(_, value) => setPage(value)}
        renderItem={(item) => {

          if (item.type === "previous" && page === 1) return null;
          if (item.type === "next" && page === count) return null;

          return (
            <PaginationItem
              {...item}
              slots={{
                previous: () => <span className="text-[14px]">Previous</span>,
                next: () => <span className="text-[14px]">Next</span>,
              }}
              sx={{
                fontSize: "14px",
                borderRadius: "50%",

                "& .MuiTouchRipple-root": { display: "none" },

                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#bf585b",
                },

                "&:focus": {
                  backgroundColor: "transparent",
                },

                "&:focus-visible": {
                  backgroundColor: "transparent",
                },

                "&:active": {
                  backgroundColor: "transparent",
                },

                "&.Mui-selected": {
                  backgroundColor: "transparent",
                  border: "1px solid black",
                },

                "&.Mui-selected:hover": {
                  backgroundColor: "transparent",
                },
              }}
            />
          );
        }}
      />
    </Stack>
  );
};

export default ProductPagination;