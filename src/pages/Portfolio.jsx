import { useEffect } from 'react';
import portfolioItems from './portfolioItems.json';

function useScript(src) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

const Portfolio = () => {
  useScript('/assets/js/main-useScript.js');

  useEffect(() => {
    const handleFilterClick = (event) => {
      if (event.target.matches('.isotope-filters li')) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100); // Adjust the delay if needed
      }
    };
  
    const filterContainer = document.querySelector('.isotope-filters');
    if (filterContainer) {
      filterContainer.addEventListener('click', handleFilterClick);
    }
  
    return () => {
      if (filterContainer) {
        filterContainer.removeEventListener('click', handleFilterClick);
      }
    };
  }, []);

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        <div className="container section-title pb-1" data-aos="fade-up">
          <span>Portfolio</span>
          <h2>Portfolio</h2>
          {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-eblast">Eblast</li>
              <li data-filter=".filter-cd">CD-ROM</li>
              <li data-filter=".filter-micellaneous">Micellaneous</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {portfolioItems.map(item => (
                <div key={item.id} className={`col-lg-3 col-md-4 col-sm-6 portfolio-item isotope-item ${item.category}`}>
                  <div className="portfolio-wrap">
                    <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="portfolio-links">
                        <a href={item.previewLink} data-gallery={item.previewCategory} className="glightbox preview-link" title={item.previewTitle}><i className="bi bi-zoom-in"></i></a>
                        {item.detailsLink && (
                          <a href={item.detailsLink} className="details-link" title={item.title} target="_blank" rel="noreferrer"><i className="bi bi-link-45deg"></i></a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
