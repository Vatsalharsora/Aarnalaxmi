import React from 'react';
import SEO from '../components/SEO';
import GallerySection from '../components/GallerySection';

const CottonGallery = () => {
  return (
    <>
      <SEO
        title="Cotton Gallery | Aarnalaxmi Cotton"
        description="Explore the visual story of our cotton journey, from fields to final product handling."
        keywords="cotton gallery, cotton photos, cotton processing images, sustainable cotton visuals"
        url="/gallery"
      />
      <main className="bg-slate-900 pt-[84px]">
        <section className="bg-gradient-to-r from-sky-900 via-indigo-950 to-purple-800 text-slate-100 py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
            <p className="text-sm uppercase tracking-widest text-cyan-300 mb-2">Visual Journey</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
              Cotton Gallery: From Field to Fibre
            </h1>
            <p className="max-w-3xl mx-auto text-slate-200 text-lg md:text-xl">
              Discover images of our plantations, harvesting, processing, and storage facilities crafted with the highest industry quality.
            </p>
          </div>
        </section>

        <section className="pt-12">
          <GallerySection />
        </section>
      </main>
    </>
  );
};

export default CottonGallery;
