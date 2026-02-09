import Hero from '@components/section/Hero';
import About from '@components/section/About';
import Services from '@components/section/Services';
import Objective from '@components/section/Objective';
import Contact from './components/section/Contact';
import Footer from './components/layout/Footer';

export default function App() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <Objective />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
