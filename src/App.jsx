import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth bg-white dark:bg-[#0a0a0b]">
      {/* background parallax layers */}
      <div aria-hidden className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/[0.04] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(56,189,248,0.15),rgba(0,0,0,0))]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
