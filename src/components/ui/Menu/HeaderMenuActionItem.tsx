import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderMenuActionItemProps {
  icon: ReactNode,
  label: string,
  to: string,
}

const HeaderMenuActionItem = ({ icon, label, to } : HeaderMenuActionItemProps) => {
  return (
    <Link to={to} className="flex justify-start gap-2 items-center hover:cursor-pointer hover:font-bold font-medium transition-all duration-200">
      {icon}
      <div className="flex-1 min-w-0 text-sm transition-[font-weight] duration-200 text-[var(--text_primary)]">
          {label}
      </div>
    </Link>
  )
}

export default HeaderMenuActionItem