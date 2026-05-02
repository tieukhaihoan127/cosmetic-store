import { Link } from 'react-router-dom';

interface ProfileNavigateBreadcrumbProps {
    mainCategory: string;
    subCategory: string;
};

const ProfileNavigateBreadcrumb = (props: ProfileNavigateBreadcrumbProps) => {
    return (
        <div className="flex items-center text-[#797979] gap-2 leading-relaxed [@media(max-width:792px)]:hidden">
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

export default ProfileNavigateBreadcrumb;

