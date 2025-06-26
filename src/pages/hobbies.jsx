import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";

const images = [
  '/draw1.jpg',
  '/draw2.jpg',
  '/draw3.jpg',
  '/draw4.jpg',
  '/draw5.jpg',
  '/draw6.jpg',
  '/draw7.jpg',
  '/draw9.jpg',
  '/draw10.jpg',
  '/draw11.jpg',
  '/draw12.jpg',
  '/draw13.jpg',
  '/draw14.jpg',
  '/draw15.jpg',
  '/draw16.jpg',
  '/draw17.jpg',
  '/draw18.jpg'
];
const photos = [
    { src: "/photo2.jpg", rowspan: "row-span-2" },
    { src: "/photo1.jpg" },
    { src: "/photo3.jpg" },
    { src: "/photo4.jpg" },
    { src: "/photo5.jpg" },
    { src: "/photo6.jpg", colspan: "col-span-3" },
    { src: "/photo12.jpg" },
    { src: "/photo9.jpg" },
    { src: "/photo10.jpg" },
    { src: "/photo7.jpg", colspan: "col-span-3" },
    { src: "/photo8.jpg" },
    { src: "/photo11.jpg" },
    { src: "/photo13.jpg" },
    

  ];

const Hobbies = () => {
  return (
    <section>
    <div className="w-full px-6 md:px-16 py-12 mt-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 pb-3 border-b-2 border-gray-300">Hobbies</h1>
      <div className="text-center md:mb-16 mb-8">
        <h2 className="text-xl font-semibold text-gray-800">"My Love for Drawing"</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Drawing has always been my escape, a way to express emotions and creativity through every stroke of the pencil.
          From sketching detailed portraits to abstract art, it's a passion that fuels my imagination and relaxation.
        </p>
      </div>

    <div className="flex justify-center items-center w-full"> {/* Added fixed height for mobile */}
  <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={3}
    spaceBetween={20}
    breakpoints={{
      // Adjust slidesPerView for smaller screens
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }}
    coverflowEffect={{
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination]}
    className="w-full max-w-5xl"
  >
    {images.map((src, index) => (
      <SwiperSlide key={index} className="shadow-xl shadow-gray-500 overflow-hidden flex justify-center my-10">
        <img 
          src={src} 
          alt={`Drawing ${index + 1}`} 
          className="h-auto w-auto object-contain" 
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    </div>
  
     <div className="flex flex-col text-center items-center p-6">
     <motion.h1
       className="text-xl font-semibold text-gray-800 mb-4"
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
     >
       "My Photography Gallery"
     </motion.h1>
     <motion.p
       className=" text-gray-600 mb-2 text-center max-w-2xl"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.3, duration: 0.5 }}
     >
       A collection of my favorite photography moments, capturing the beauty of landscapes, portraits, and celestial wonders.
     </motion.p>
     <motion.p
       className=" text-gray-600 mb-12 text-center max-w-2xl font-semibold"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.3, duration: 0.5 }}
     >
      I was use Redme 12C, 60 MP camera with 108MP sensor.
     </motion.p>
      <div className='w-full flex justify-center'>
    <div className="grid grid-cols-3 md:gap-4 gap-2 max-w-6xl w-full px-4">
      {photos.map((img, index) => (
        <motion.div
          key={index}
          className={`overflow-hidden rounded-lg shadow-lg ${img.rowspan || ""} ${img.colspan || ""}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={img.src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  </div>
   </div>
   </section>
  );
};

export default Hobbies;


