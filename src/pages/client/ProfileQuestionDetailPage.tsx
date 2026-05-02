import { ProfileNavigateBreadcrumb, ProfileQuestionDetailInformation } from "../../features/profile";
import { FeedbackUser } from "../../features/qna";

const ProfileQuestionDetailPage = () => {
    return (
        <div>
            <ProfileNavigateBreadcrumb mainCategory='Trang chủ' subCategory='Câu hỏi của tôi' />
            <div className='mb-[15px] text-[24px] font-bold leading[[1.5715] mt-[15px]'>
                Câu hỏi của tôi
            </div>
            <div className='mb-[15px] font-bold'>
                Thông tin sản phẩm
            </div>
            <ProfileQuestionDetailInformation />
            <FeedbackUser />
            <FeedbackUser />
        </div>
    );
};

export default ProfileQuestionDetailPage;