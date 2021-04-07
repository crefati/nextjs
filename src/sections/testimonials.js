/** @jsx jsx */
import dynamic from 'next/dynamic';
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
// import Testimonial from 'components/cards/testimonial';
import avatar1 from 'assets/images/testimonials/1.png';
import avatar2 from 'assets/images/testimonials/2.png';
import avatar3 from 'assets/images/testimonials/3.png';
import avatar4 from 'assets/images/testimonials/4.png';
import avatar5 from 'assets/images/testimonials/5.png';
import avatar6 from 'assets/images/testimonials/6.png';
import avatar7 from 'assets/images/testimonials/7.png';
import avatar8 from 'assets/images/testimonials/8.png';

const data = [
  [
    {
      id: 1,
      avatar: avatar1,
      name: 'Mesh from Bew',
      username: '@bewlaptops',
      text: `I always wanted a simple way of selling laptops & PCs online, you guys have made my dream come true.
	  Bew laptops website is elegant, simple and yet powerful with many features for ecommerce sites.`,
    },
  ],
  [
    {
      id: 2,
      avatar: avatar5,
      name: 'Chris Mutui',
      username: '@crmutui',
      text: `Thank you for the amazing fast website that you guys made for my business!`,
    },
  ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: false,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What clients say about us"
          description="Customer satisfaction is our number one priority!"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
