import { useEffect } from 'react';

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

const Home = () => {
  useScript('/assets/js/main-useScript.js');

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero section">
        <img src="/assets/images/hero-ivan-222222.jpg" alt="" data-aos="fade-in" />
        <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <h2>Ivan Song <span className="d-sm-none"><br /></span><span>- from California</span></h2>
          {/* <p><span className="typed" data-typed-items="Front End Engineer, AI-Powered Video Ad Creator, Full-Stack Shopify Developer, AI-Generated Book Author, AI-Generated Illustrator"></span></p> */}
          <p><span className="typed" data-typed-items="Front End Engineer, UI/UX Developer, AI-Powered Video Campaign Creator, Full-Stack Shopify Developer, AI-Generated Book Author, AI-Generated Illustrator"></span></p>
        </div>
      </section>
    </>
  )
}

export default Home