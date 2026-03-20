interface ImageCardProps {
    imageUrl: string
}


const ImageCard = ({ imageUrl } : ImageCardProps) => {
    return (
        <div className='relative px-[5px]'>
            <img src={imageUrl} alt="" className="max-w-full object-cover h-[50vh] mx-auto p-0"/>
            <img src="https://image.hsv-tech.io/400x0/bbx/common/9d0ffd41-19f9-4c1f-9aab-31c7662f058e.webp" alt="" className='absolute bottom-0 max-w-[100%] object-contain' />
            <div className='absolute top-[10px] right-[15%]'>
                <div className='bg-black text-white rounded-full w-[60px] h-[60px] flex items-center justify-center text-[22px] [@media(max-width:576px)]:w-[30px] [@media(max-width:576px)]:h-[30px] [@media(max-width:576px)]:text-[10px]'>20%</div>
            </div>
        </div>
    )
}

export default ImageCard