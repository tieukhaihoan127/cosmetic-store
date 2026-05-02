import useInformation from '../hooks/useInformation';

const ProductColorPicker = () => {

    const { num, isSelected } = useInformation();

    return (
        <>
            <div className="mb-[20px]">
                <div className="flex gap-[10px] text-[14px]">
                    <div className="font-bold">
                        Color:
                    </div>
                    <div>
                        08 Gorgeous Mauve - tím
                    </div>
                </div>
                <div className="flex items-center gap-[2px] mt-[5px]">
                    <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                        <div className="relative w-[30px] h-[30px] rounded-full bg-[#fea8ae] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                            />
                        </div>
                    </div>
                    <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                        <div className="relative w-[30px] h-[30px] rounded-full bg-[#d56e85] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                            />
                        </div>
                    </div>
                    <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                        <div className="relative w-[30px] h-[30px] rounded-full bg-[#c17276] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                            />
                        </div>
                    </div>
                    <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                        <div className="relative w-[30px] h-[30px] rounded-full bg-[#b15950] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                            />
                        </div>
                    </div>
                    <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                        <div className="relative w-[30px] h-[30px] rounded-full bg-[#c06370] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                            />
                        </div>
                    </div>
                    <div className={`rounded-full p-[3px] ${num > 0 ? `cursor-pointer ${isSelected ? 'border-2' : 'border-0'}` : 'border-transparent cursor-not-allowed'}`}>
                        <div className="relative w-[30px] h-[30px] rounded-full bg-[#fc7d91] overflow-hidden">
                            <div
                                className={`absolute inset-0 rounded-full ${num > 0 && 'hidden'}`}
                                style={{ backgroundImage: "linear-gradient(to left top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgb(0,0,0) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[#c73130] text-[14px]">
                Còn 1 sản phẩm
            </div>
        </>
    );
};

export default ProductColorPicker;