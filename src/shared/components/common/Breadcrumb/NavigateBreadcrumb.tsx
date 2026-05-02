import { Link } from 'react-router-dom';

interface NavigateBreadcrumbProps {
    mainCategory: string;
    subCategory: string;
};

const NavigateBreadcrumb = (props : NavigateBreadcrumbProps) => {
    return (
        <div className="flex items-center text-[#797979] gap-2 leading-relaxed">
            <Link to="/" className="text-[12px]">
                {props.mainCategory}
            </Link>
            <div className="text-[14px]">{">"}</div>
            <Link to="/" className="text-[12px]">
                {props.subCategory}
            </Link>
        </div>
    );
};

export default NavigateBreadcrumb;