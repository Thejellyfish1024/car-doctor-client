
import slider1 from '../../assets/images/homeCarousel/1.jpg'
import slider2 from '../../assets/images/homeCarousel/2.jpg'
import slider3 from '../../assets/images/homeCarousel/3.jpg'
import slider4 from '../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full max-h-[600px] rounded-xl">
            {/* 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" />
                <div className="absolute w-full h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white absolute left-28 top-1/4 space-y-6'>
                        <h2 className='text-6xl font-bold md:w-2/5'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-warning text-lg font-semibold bg-[#FF3811] px-6 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline  text-white text-lg font-semibold px-6 ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform  left-5 right-8 bottom-8">
                    <a href="#slide4" className="btn btn-circle mr-3 bg-[#FFFFFF33] hover:text-black border-0 text-white">❮</a>
                    <a href="#slide2" className="btn bg-[#FF3811] hover:text-black border-0 text-white btn-circle">❯</a>
                </div>
            </div>
            {/* 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className="absolute w-full h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white absolute left-28 top-1/4 space-y-6'>
                        <h2 className='text-6xl font-bold md:w-2/5'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-warning text-lg font-semibold bg-[#FF3811] px-6 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline  text-white text-lg font-semibold px-6 ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform  left-5 right-8 bottom-8">
                    <a href="#slide1" className="btn btn-circle mr-3 bg-[#FFFFFF33] hover:text-black border-0 text-white">❮</a>
                    <a href="#slide3" className="btn bg-[#FF3811] hover:text-black border-0 text-white btn-circle">❯</a>
                </div>
            </div>
            {/* 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className="absolute w-full h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white absolute left-28 top-1/4 space-y-6'>
                        <h2 className='text-6xl font-bold md:w-2/5'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-warning text-lg font-semibold bg-[#FF3811] px-6 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline  text-white text-lg font-semibold px-6 ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform  left-5 right-8 bottom-8">
                    <a href="#slide2" className="btn btn-circle mr-3 bg-[#FFFFFF33] hover:text-black border-0 text-white">❮</a>
                    <a href="#slide4" className="btn bg-[#FF3811] hover:text-black border-0 text-white btn-circle">❯</a>
                </div>
            </div>
            {/* 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slider4} className="w-full" />
                <div className="absolute w-full h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white absolute left-28 top-1/4 space-y-6'>
                        <h2 className='text-6xl font-bold md:w-2/5'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-warning text-lg font-semibold bg-[#FF3811] px-6 border-0 mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline  text-white text-lg font-semibold px-6 ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform  left-5 right-8 bottom-8">
                    <a href="#slide3" className="btn btn-circle mr-3 bg-[#FFFFFF33] hover:text-black border-0 text-white">❮</a>
                    <a href="#slide1" className="btn bg-[#FF3811] hover:text-black border-0 text-white btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;