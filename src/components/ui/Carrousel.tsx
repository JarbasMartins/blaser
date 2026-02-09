import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarrouselItem {
    id: number;
    content: {
        title: string;
        description: string;
        slogan: string;
        features: string[];
    };
    image: string;
}

interface CarrouselProps {
    items: CarrouselItem[];
}

export default function Carrousel({ items }: CarrouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    const previousSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

    const currentItem = items[currentIndex];
    const currentFeatures = items[currentIndex].content.features;
    const nextIndex = (currentIndex + 1) % items.length;
    const nextItem = items[nextIndex];

    return (
        <div className="w-full h-full flex lg:flex-row flex-col space-y-4 max-w-7xl mx-auto md:gap-4">
            <div className="flex-1 w-full relative">
                <div className="aspect-16/10 w-full relative rounded-lg overflow-hidden shadow-2xl bg-zinc-800">
                    <motion.img
                        key={currentItem.image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        src={currentItem.image}
                        alt={currentItem.content.title}
                        className="w-full h-full object-cover"
                    />

                    <Button onClick={previousSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-50" icon={ArrowLeft} />
                    <Button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-50" icon={ArrowRight} />

                    <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                        {items.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-green-400 w-12' : 'bg-white w-4'}`}
                            />
                        ))}
                    </div>
                </div>
                <div
                    onClick={nextSlide}
                    className="hidden md:block absolute -right-6 -bottom-6 w-32 md:w-40 h-20 md:h-24 rounded-lg border-4 border-white shadow-xl overflow-hidden cursor-pointer z-20"
                >
                    <img src={nextItem.image} alt="Próxima" className="w-full h-full object-cover" />
                </div>
            </div>
            <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: '-5px' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-1 flex flex-col space-y-1"
            >
                <h5 className="uppercase font-montserrat text-green-400 text-[12px] font-bold">{currentItem.content.slogan}</h5>
                <h3 className="text-3xl md:text-5xl font-bebas text-zinc-950">{currentItem.content.title}</h3>
                <p className="text-justify font-montserrat tracking-tighter text-[12px] md:text-sm">{currentItem.content.description}</p>
                <div className="border-y border-y-green-600/50 py-2 grid grid-cols-2 gap-2">
                    {currentFeatures.map((feature) => {
                        return <p className="text-[10px] text-zinc-950 bg-green-200 border border-green-300 p-2 font-bold uppercase text-center rounded-xs">{feature}</p>;
                    })}
                </div>
            </motion.div>
        </div>
    );
}
