import { QnACategoryList, QnAQuestionSection, QnASearchBar } from '../../features/qna';
import useQuestion from '../../features/qna/hooks/useQuestions';

const QuestionPage = () => {

    const { imageUrl, category, setCategory, expanded, selected, handleClickExpanded } = useQuestion();

    return (
        <div className='w-[90%] mx-auto'>
            <div className="mt-[15px] relative h-[300px] [@media(max-width:780px)]:h-[250px] bg-cover rounded-[10px] flex justify-center" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='flex flex-col items-center justify-center w-[80%]'>
                    <div className="text-[30px] leading-[43px] text-white font-bold mb-[20px] text-center [@media(max-width:780px)]:text-[22px]">
                        Xin chào, chúng tôi có thể giúp gì cho bạn?
                    </div>
                    <QnASearchBar />
                </div>
            </div>
            <div className='mt-[30px] grid grid-cols-12 gap-[25px]'>
                <div className='col-span-3 [@media(max-width:576px)]:col-span-12'>
                    <div className='font-bold text-[24px]'>
                        Danh mục
                    </div>
                    <QnACategoryList category={category} onSelect={setCategory} />
                </div>
                <QnAQuestionSection selected={selected} expanded={expanded} category={category} onToggleExpanded={handleClickExpanded} />
            </div>
        </div>
    );
};

export default QuestionPage;