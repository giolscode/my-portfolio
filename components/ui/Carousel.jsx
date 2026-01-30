import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel({ slides }) {
    return (
        <div className="w-full max-w-4xl mx-auto my-8 px-4">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="rounded-lg overflow-hidden shadow-lg"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-96 bg-gray-100 flex items-center justify-center p-4">
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
