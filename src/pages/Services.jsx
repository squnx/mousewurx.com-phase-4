const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <span>Services</span>
          <h2>Services</h2>
          <p>A Full Spectrum of Branding Services!</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item  position-relative">
                <div className="d-flex">
                  <div><i className="icon bi bi-activity"></i></div>
                  <h3 className="d-flex align-items-center">Responsive Web Design</h3>
                </div>
                {/* <a href="service-details.html" className="stretched-link"><h3>Responsive Web Design</h3></a> */}
                <p>Responsive web design is a technique for building websites that adapt seamlessly to any screen size, from desktops and laptops to tablets and smartphones. This ensures a smooth user experience (UX) regardless of the device used to access your client's website.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="d-flex">
                  <div><i className="icon bi bi-broadcast"></i></div>
                  <h3 className="d-flex align-items-center">Single Page Applications</h3>
                </div>
                <p>Single Page Applications (SPAs) are web applications that load a single HTML page and update its content dynamically using JavaScript. This creates a seamless user experience that feels more like a native app than a traditional website.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="d-flex">
                  <div><i className="icon bi bi-easel"></i></div>
                  <h3 className="d-flex align-items-center">Email Campaigns</h3>
                </div>
                <p>Email marketing campaigns involve creating, sending, and tracking messages to a targeted audience. This service includes Audience Segmentation, Email Design/Development, Content Creation, Campaign Management, and A/B Testing.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="d-flex">
                  <div><i className="icon bi bi-basket3-fill"></i></div>
                  <h3 className="d-flex align-items-center">E-Commerce Development</h3>
                </div>
                <p>Our e-commerce development service entails creating, managing, and optimizing online stores tailored to your business needs. This includes custom design, secure payment integration, inventory management, and user-friendly interfaces.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="d-flex">
                  <div><i className="icon bi bi-calendar4-week"></i></div>
                  <h3 className="d-flex align-items-center">Content Management Systems</h3>
                </div>
                <p>
                  Our Content Management Systems (CMS) service entails developing, deploying, and maintaining platforms that allow you to create, manage, and modify digital content easily. This includes custom CMS solutions, seamless integration, user training, and ongoing support.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="d-flex">
                  <div><i className="icon bi bi-chat-square-text"></i></div>
                  <h3 className="d-flex align-items-center">Maintenance and Support</h3>
                </div>
                <p>Our Maintenance and Support service entails providing ongoing technical assistance, regular updates, and troubleshooting to ensure your website or application runs smoothly. This includes performance monitoring, security updates, bug fixes, and user support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience */}
      <section id="client" className="client section">
        <div className="client container" data-aos="fade-up">
          <div className="section-title">
            <h2>Client Experience</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/boeing.png" alt="" className="img-fluid" />
              <h3>Boeing</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/stamps.png" alt="" className="img-fluid" />
              <h3>Stamps.com</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/oracle.png" alt="" className="img-fluid" />
              <h3>ORACLE</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/sunmicrosystems.png" alt="" className="img-fluid" />
              <h3>Sun Microsystems</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/stanlee.png" alt="" className="img-fluid" />
              <h3>Stan Lee Media</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/hollywood.png" alt="" className="img-fluid" />
              <h3>Hollywood.com</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/nestle.png" alt="" className="img-fluid" />
              <h3>Nestlé</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/netapp.png" alt="" className="img-fluid" />
              <h3>NetApp</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/serena.png" alt="" className="img-fluid" />
              <h3>Serena Software</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/cetera.png" alt="" className="img-fluid" />
              <h3>Cetera Finance Group</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/att.png" alt="" className="img-fluid" />
              <h3>AT&T</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/vmware.png" alt="" className="img-fluid" />
              <h3>VMware</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/roxio.png" alt="" className="img-fluid" />
              <h3>Roxio</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/platronics.png" alt="" className="img-fluid" />
              <h3>Plantronics</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/disney.png" alt="" className="img-fluid" />
              <h3>Disney Interactive</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/art-institute.png" alt="" className="img-fluid" />
              <h3>Art Institute of Los Angeles</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/powerbar.png" alt="" className="img-fluid" />
              <h3>PowerBar</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/hd-buttercup.png" alt="" className="img-fluid" />
              <h3>HD Buttercup</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/virtu.png" alt="" className="img-fluid" />
              <h3>Virtu</h3>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center">
              <img src="/assets/images/client/db.png" alt="" className="img-fluid" />
              <h3>Dun & Bradstreet</h3>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Services