import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderActionItemProps {
  icon: ReactNode,
  label: string,
  to: string,
}

const HeaderActionItem = ({ icon, label, to } : HeaderActionItemProps) => {
  return (
    <Link to={to} className="flex justify-center items-center hover:cursor-pointer max-md:hidden">
      {icon}
      <div className="font-bold text-[12px] text-xs ml-2 text-[var(--text_primary)] [@media(max-width:1144px)]:hidden">
          {label}
      </div>
    </Link>
  )
}

export default HeaderActionItem