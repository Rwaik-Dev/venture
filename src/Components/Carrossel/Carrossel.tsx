import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import { Container, Image, CenterCarosel } from "./style";

const Carrossel = () => {
  return (
    <Container>
      <CenterCarosel>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image
              src="https://i0.wp.com/diariodotransporte.com.br/wp-content/uploads/2017/07/auditoria-articulados.jpg?fit=3264%2C2448&ssl=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://cdn.pixabay.com/photo/2016/03/17/16/31/bus-1263266_960_720.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </CenterCarosel>
    </Container>
  );
};

export default Carrossel;
