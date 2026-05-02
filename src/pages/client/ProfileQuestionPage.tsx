import { ProfileNavigateBreadcrumb, ProfileQuestionCard } from "../../features/profile";

const ProfileQuestionPage = () => {
    return (
        <div>
            <ProfileNavigateBreadcrumb mainCategory='Trang chủ' subCategory='Câu hỏi của tôi' />
            <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                Câu hỏi của tôi
            </div>
            <div className='grid grid-cols-1 gap-[10px]'>
                <ProfileQuestionCard />
                <ProfileQuestionCard />
                <ProfileQuestionCard />
            </div>
        </div>
    );
};

export default ProfileQuestionPage;