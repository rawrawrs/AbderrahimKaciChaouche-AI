
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Helmet>
        <title>Abderrahim Kaci Chaouche</title>
        <meta name="description" content="Explore the work of Abderrahim Kaci Chaouche. Discover innovative projects in technology, machine learning, and computational research." />
        <meta name="keywords" content="Abderrahim Kaci Chaouche, Abderrahim Kaci Chaouch, kaci, kaci chaouch, kaci chaouche, chaouch, chaouche, abderrahim kaci, abderrahim kc, kaci abderrahim, kc abderrahim, kaci chaouche abderrahim, kaci chaouch abderrahim, abderrahim AI, kaci ai, kaci chaouche ai, abderrahim kaci chaouche ai, kc ai, Abderrahim Kaci Chaouche, technology, machine learning, computational research, artificial superintelligence" />
        <meta property="og:title" content="Abderrahim Kaci Chaouche" />
        <meta property="og:description" content="Explore the work of Abderrahim Kaci Chaouche. Discover innovative projects in technology, machine learning, and computational research." />
        <meta property="og:url" content="https://abdelrrahim.com/" />
        <meta name="twitter:title" content="Abderrahim Kaci Chaouche" />
        <meta name="twitter:description" content="Explore the work of Abderrahim Kaci Chaouche. Discover innovative projects in technology, machine learning, and computational research." />
        <link rel="canonical" href="https://abdelrrahim.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abderrahim Kaci Chaouche",
            "alternateName": ["Abderrahim Kaci Chaouch", "kaci", "kaci chaouch", "kaci chaouche", "chaouch", "chaouche", "abderrahim kaci", "abderrahim kc", "kaci abderrahim", "kc abderrahim", "kaci chaouche abderrahim", "kaci chaouch abderrahim", "abderrahim AI", "kaci ai", "kaci chaouche ai", "abderrahim kaci chaouche ai", "kc ai"],
            "url": "https://abdelrrahim.com/",
            "description": "Abderrahim Kaci Chaouche is an innovator working on technology and computational research projects.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://abdelrrahim.com/"
            },
            "knowsAbout": ["Technology", "Machine Learning", "Computational Research", "Innovation"],
            "sameAs": [
              "https://x.com/AbderrahimKc",
              "https://www.youtube.com/@AbderrahimKaciChaouche",
              "https://www.linkedin.com/in/abdel-rahim-kaci-chaouche-ai/"
            ]
          })}
        </script>
      </Helmet>
      <div className="pt-6">
        <Navigation />
        <Hero />
        
        {/* Previous Work Section */}
        <div className="max-w-3xl mx-auto mt-16 px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-6">Previous Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/syntrons" className="block group">
              <div className="flex flex-col sm:flex-row items-center bg-muted/30 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-muted cursor-pointer">
                
                <div className="flex-1 p-6 text-left">
                  <div className="text-xl font-semibold mb-2 group-hover:underline">Syntrons</div>
                  <div className="text-muted-foreground mb-1 text-sm font-mono uppercase tracking-wider">The ASI Shift</div>
                  <div className="text-base md:text-lg font-inter leading-relaxed">
                    From Neurons to Syntrons: A revolutionary departure from traditional weight-based neural architectures
                  </div>
                </div>
              </div>
            </a>
            
            <a href="/trafp-odc" className="block group">
              <div className="flex flex-col sm:flex-row items-center bg-muted/30 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-muted cursor-pointer">
                
                <div className="flex-1 p-6 text-left">
                  <div className="text-xl font-semibold mb-2 group-hover:underline">Trafp ODC</div>
                  <div className="text-muted-foreground mb-1 text-sm font-mono uppercase tracking-wider">Training-Free Pipeline</div>
                  <div className="text-base md:text-lg font-inter leading-relaxed">
                    Training-Free Pipeline for Real-Time Object Detection and Classification
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Get in Touch Section */}
        <div className="max-w-3xl mx-auto mt-16 px-6 md:px-8 pb-20">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
