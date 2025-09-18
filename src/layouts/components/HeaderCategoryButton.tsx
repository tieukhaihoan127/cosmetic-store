import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

interface HeaderCategoryButtonProps {
  content: string,
  to: string
}

const HeaderCategoryButton = ({ content, to }: HeaderCategoryButtonProps) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button variant="outlined" sx={{
        fontSize: "14px", textTransform: "none", color: "var(--text_primary)", fontWeight: "400", transition: "color 0.2s ease, opacity 0.2s ease", borderColor: "#EFEFEF", whiteSpace: "nowrap", width: "unset","&:hover": {
          color: "var(--text_hover)"
        }
      }}>{content}</Button>
    </Link>
  )
}

export default HeaderCategoryButton