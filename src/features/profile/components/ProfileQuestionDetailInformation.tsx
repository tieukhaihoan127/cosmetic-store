const ProfileQuestionDetailInformation = () => {
  return (
    <>
      <div className='bg-[#efefef] rounded-[10px] p-[20px] flex items-center'>
        <img src="https://image.hsv-tech.io/100x100/bbx/common/53dd920f-cd75-45b8-bdd5-fd311def024c.webp" alt="" className='h-[50px] w-[50px] rounded-[5px]' />
        <div className='ml-[20px]'>
          Son Thạch Bóng Thuần Chay Amuse Jel-Fit Tint 3.8g
        </div>
      </div>
      <div className='my-[15px] flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='text-[14px] leading-[1.5715] font-bold'>
            Câu hỏi của tôi
          </div>
          <div className="text-[14px] mx-[8px]">{">"}</div>
          <div className='text-[14px] leading-[1.5715]'>
            ID 197
          </div>
        </div>
        <div className='border-1 border-black rounded-[38px] px-[15px] py-[8px] text-[14px] leading-[1.5715] cursor-pointer'>
          Trở về câu hỏi gốc
        </div>
      </div>
    </>
  );
};

export default ProfileQuestionDetailInformation;