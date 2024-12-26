import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <span>About</span>
          <h2>About</h2>
          <p>A Wealth of Talent Ready To Serve You!</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="about-col">
                <div className="img">
                  <img src="/assets/images/about-mission.jpg" alt="" className="img-fluid" />
                </div>
                <h2 className="title">Mission</h2>
                <p>We empower businesses with innovative web solutions and exceptional content production, transforming ideas into reality with collaboration and cutting-edge technology to deliver measurable results and drive success.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="about-col">
                <div className="img">
                  <img src="/assets/images/about-experience.jpg" alt="" className="img-fluid" />
                </div>
                <h2 className="title">Experience</h2>
                <p>At mousewurx, we offer personalized service by experienced professionals. With expertise in web and content production, we ensure exceptional design, reliable hosting, and robust technical compatibility, delivering outstanding results.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="about-col">
                <div className="img">
                  <img src="/assets/images/about-vision.jpg" alt="" className="img-fluid" />
                </div>
                <h2 className="title">Vision</h2>
                <p>
                  We design and build impactful web solutions that bring your brand to life. Our focus is amplifying your unique voice and cutting through the noise, so you can connect with the right audience and achieve real business growth.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="about-col">
                <div className="img">
                  <img src="/assets/images/about-plan.jpg" alt="" className="img-fluid" />
                </div>
                <h2 className="title">Plan</h2>
                <p>We continuously adapt to industry trends and technologies, crafting tailored strategies to drive growth. Through ongoing optimization and proactive support, we ensure your success in a dynamic digital landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="mb-0">Skills</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>CSS | SASS | Bootstrap</span> <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>JavaScript | jQuery | Typescript | AJAX | JSON</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>React | Vite | Node.js</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Webpack | Grunt | Gulp</span> <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>WordPress | Shopify | BigCommerce | CMS</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Photoshop | InVision | Figma | Midjourney | Canva</span> <i className="val">50%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Perforce | CVS | Git | SourceSafe</span> <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>C# | Java | ColdFusion | PHP | Liquid | Perl</span> <i className="val">40%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Adobe Target | Optimizely</span> <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <img src="/assets/images/testimonials-bg.jpg" className="testimonials-bg" alt="" />
        <div className="container section-title" data-aos="fade-up">
          <h2 className="mb-0">Testimonials</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper">
            <div className="swiper-wrapper">
              {/* <script type="application/json" className="swiper-config">
              {
                "loop": true,
                "speed": 600,
                "autoplay": {
                  "delay": 5000
                },
                "slidesPerView": "auto",
                "pagination": {
                  "el": ".swiper-pagination",
                  "type": "bullets",
                  "clickable": true
                }
              }
              </script> */}
              <Swiper
                loop={true}
                speed={600}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="/assets/images/testimonials/testimonials-lenore.jpg" className="testimonial-img" alt="" />
                      <h3>Lenore Mohr</h3>
                      <h4>Director of Marketing & Communications</h4>
                      <h4>@ United Way of the Greater Lehigh Valley</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          I was very impressed with the service offered by mousewurx. Ivan completed the project in a timely manner and to a very high standard. mousewurx will be my first choice of web development team in the future.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="/assets/images/testimonials/testimonials-angela.jpg" className="testimonial-img" alt="" />
                      <h3>Angela Glenn</h3>
                      <h4>Chief Creative Officer</h4>
                      <h4>@ The Gasp Company, LLC.</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          mousewurx has been our exclusive development partner for 5 years. Together, we have created beautiful websites that function flawlessly. I trust Ivan to make sure that every detail is implemented to our specifications. He works with us to develop great solutions.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="/assets/images/testimonials/testimonials-harry.jpg" className="testimonial-img" alt="" />
                      <h3>Harry Webber</h3>
                      <h4>Founder and Chief Creative Officer</h4>
                      <h4>@ Smart Communications, Inc.</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          Our work is known around the world. That means that our reputation lives or dies by the companies we bring to our clients. It is not easy living up to our name. But mousewurx makes us look good every single time. We trust them with our clients. We trust them with our good name. They never let us down.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About