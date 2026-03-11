import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  const themes = [
    {
      name: 'Theme 1',
      headerTransparent: true,
      footerTransparent: true,
      headerCustomClass: 'text-white',
      footerCustomClass: 'text-white',
      bgClass: 'bg-black',
      titleColor: 'text-white',
      descColor: 'text-slate-300',
    },
    {
      name: 'Theme 2',
      headerTransparent: false,
      footerTransparent: false,
      bgClass: 'bg-brand-light',
      titleColor: 'text-brand-dark',
      descColor: 'text-slate-600',
    },
    {
      name: 'Theme 3',
      headerTransparent: false,
      footerTransparent: false,
      headerCustomClass: 'bg-brand-dark text-white',
      footerCustomClass: 'bg-brand-dark text-white',
      bgClass: 'bg-brand-dark',
      titleColor: 'text-white',
      descColor: 'text-slate-300',
      btnPrimary: 'bg-brand-coral text-white hover:bg-[#c95542]',
      btnSecondary: 'bg-brand-gold text-white hover:bg-[#d4b84c]'
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const theme = themes[current];

  return (
    <>
      {/* theme selector buttons */}
      <div className="fixed top-0 right-0 z-[1100] p-5 flex gap-1">
        {themes.map((t, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${i === current ? 'bg-brand-teal text-white' : 'bg-white/90 text-brand-dark'
              }`}
            onClick={() => setCurrent(i)}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className={`w-full ${theme.bgClass}`}>
        <Header themeType={current + 1} transparent={theme.headerTransparent} customClass={theme.headerCustomClass || ''} />
        <main>
          <Hero theme={theme} />
          <Features theme={theme} themeType={current + 1} />
          <Products theme={theme} themeType={current + 1} />
        </main>
        <Footer themeType={current + 1} transparent={theme.footerTransparent} customClass={theme.footerCustomClass || ''} />
      </div>
    </>
  );
}

export default App;
