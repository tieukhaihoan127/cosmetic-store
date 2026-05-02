import { QnAContactSection, QnASearchBar, QnAServiceSection } from "../../features/qna";

const HelpCenterPage = () => {

    const imageUrl = "https://beautybox.com.vn/images/helpCenter.webp";

    return (
        <div className="w-[90%] mx-auto">
            <div className="mt-[15px] relative h-[300px] [@media(max-width:780px)]:h-[250px] bg-cover rounded-[10px] flex justify-center" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='flex flex-col items-center justify-center w-[80%]'>
                    <div className="text-[30px] leading-[43px] text-white font-bold mb-[20px] text-center [@media(max-width:780px)]:text-[22px]">
                        Xin chào, chúng tôi có thể giúp gì cho bạn?
                    </div>
                    <QnASearchBar />
                </div>
            </div>
            <div className='max-w-[994px] mx-auto mt-[80px]'>
                <QnAServiceSection />
                <div className='my-[30px] text-[20px] font-bold text-center'>
                    Quý khách có thể liên hệ với chúng tôi qua các hình thức sau
                </div>
                <QnAContactSection />
            </div>
        </div>
    );
};

export default HelpCenterPage;