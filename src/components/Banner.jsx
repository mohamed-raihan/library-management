import "../style/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
//Swipper Component Import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
//Framer Component Imports
import { motion } from "framer-motion";


function Banner() {

    const cardVariants = {
        offscreen: {
            scale: 0.75,
            opacity: 0
        },
        onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: 4
            }
        }
    };

    return (
        <>
            <div className="banner">
                <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} className="banner-row d-flex justify-content-evenly align-items-center w-100 pt-5">
                    <motion.div variants={cardVariants} className="d-flex flex-column align-items-center banner-content mt-5 px-5">
                        <h1 className="banner-heading">Buy and Sell your textbooks books for best price</h1>
                        <p className="banner-paragraph mt-3">
                            From applied literature to educational services, we had a lot of textbooks to offer you.
                            We provide only the best books for rent.
                        </p>
                        <div className="d-flex mt-3 justify-content-start w-100 gap-2">
                            <input type="text" className="banner-form-control" placeholder="Search for ISBN Number" />
                            <button  className="btn btn-success px-5">Search</button>
                        </div>
                    </motion.div>

                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" className="banner-image" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg" className="banner-image" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://marketplace.canva.com/EAFf0E5urqk/1/0/1003w/canva-blue-and-green-surreal-fiction-book-cover-53S3IzrNxvY.jpg" className="banner-image" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://apps.lib.umich.edu/online-exhibits/files/fullsize/5201c9bf8961435432b66d8828de237b.jpg" className="banner-image" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.earlyprintedbooks.com/wp-content/uploads/philasterorlovel00beau_0_0007-3-552x800.jpg" className="banner-image" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://m.media-amazon.com/images/I/410nynxH30L.jpg" className="banner-image" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="banner-down-button d-flex justify-content-center align-items-center" >
                    <a href="#Best-Seller" style={{ textDecoration: "none", color: "black" }}><FontAwesomeIcon icon={faChevronDown} /></a>
                </div>
            </div>

        </>
    )
}

export default Banner