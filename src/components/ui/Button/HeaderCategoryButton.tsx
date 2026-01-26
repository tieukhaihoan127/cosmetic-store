import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface HeaderCategoryButtonProps {
  content: string;
  to: string;
  onHover?: () => void;
  onLeave?: () => void;
}

const HeaderCategoryButton = ({ content, to, onHover, onLeave }: HeaderCategoryButtonProps) => {
  return (
    <div className="inline-block" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Link to={to} style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          sx={{
            fontSize: "14px",
            textTransform: "none",
            color: "var(--text_primary)",
            fontWeight: "400",
            transition: "color 0.2s ease, opacity 0.2s ease",
            borderColor: "#EFEFEF",
            whiteSpace: "nowrap",
            "&:hover": {
              color: "var(--text_hover)",
            },
          }}
        >
          {content}
        </Button>
      </Link>
    </div>
  );
};

export default HeaderCategoryButton;
