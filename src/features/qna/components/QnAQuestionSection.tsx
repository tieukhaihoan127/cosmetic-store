import QnAContactSection from './QnAContactSection';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import type { Information } from '../types/information';

interface QnAQuestionSectionProps {
  selected: Information;
  expanded: boolean;
  category: string;
  onToggleExpanded: () => void;
};

const QnAQuestionSection = ({ selected, expanded, category, onToggleExpanded } : QnAQuestionSectionProps) => {

  return (
    <div className='col-span-9 [@media(max-width:576px)]:col-span-12'>
      <div className='mb-[15px] font-bold text-[24px]'>
        Câu hỏi thường gặp {selected.categories !== '' && `trong danh mục ${selected.categories}`}
      </div>
      <div className={`mt-[26px] relative ${expanded ? 'max-h-[2000px]' : 'max-h-[300px]'} overflow-hidden`}>
        {selected.questions.map(question => (
          <div key={question.id}>
            <Link to={`/help-center/question/${question.id}`}>
              <div className='cursor-pointer py-[12px]'>
                {question.question}
              </div>
            </Link>
            <Divider />
          </div>
        ))}
        {(!expanded && category === 'all') && (
          <div className="absolute bottom-5 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>
      {category === 'all' && (
        <div onClick={onToggleExpanded} className="text-black mt-[20px] font-bold text-[14px] inline-block cursor-pointer trasition-all duration-300 hover:underline px-[15px] py-[8px] w-full text-center">
          {expanded ? 'ẨN BỚT' : 'TẢI THÊM'}
        </div>
      )}
      <div className='mt-[50px] mb-[30px] text-[24px] font-bold'>
        Liên hệ với chúng tôi!
      </div>
      <QnAContactSection />
    </div>
  );
};

export default QnAQuestionSection;