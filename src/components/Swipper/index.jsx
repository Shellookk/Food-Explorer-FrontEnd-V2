import { Swiper } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function SwipperComponent({ children }) {
    return (
        <Swiper
            style={{
            "--swiper-navigation-size": "30px",
          }}
            slidesPerView={2}
            spaceBetween={10}
            freeMode={true}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            setWrapperSize={true}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
            }}
        >
            {children}
        </Swiper>
    )
}
