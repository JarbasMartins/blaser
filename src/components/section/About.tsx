import DoodleSvg from '@assets/nature.svg';
import Button from '@components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <div id="about" className="h-auto w-full flex flex-col text-zinc-50 bg-transparent">
            <div className="w-full overflow-hidden leading-none">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-24 md:h-40">
                    <path
                        d="M 0,400 L 0,150 C 40.63628067579232,156.87941793069427 81.27256135158464,163.75883586138858 132,157 C 182.72743864841536,150.24116413861142 243.54603526945374,129.84407448514 304,140 C 364.45396473054626,150.15592551486 424.54329757060054,190.86486619805152 474,215 C 523.4567024293995,239.13513380194848 562.280774448144,246.69646072265385 615,216 C 667.719225551856,185.30353927734615 734.3336046368231,116.3492909113331 789,108 C 843.6663953631769,99.6507090886669 886.3848070045627,151.90637563201383 948,175 C 1009.6151929954373,198.09362436798617 1090.1271673449255,192.02520656061168 1140,169 C 1189.8728326550745,145.97479343938832 1209.1065236157358,105.99279812553952 1254,100 C 1298.8934763842642,94.00720187446048 1369.4467381921322,122.00360093723023 1440,150 L 1440,400 L 0,400 Z"
                        stroke="none"
                        stroke-width="0"
                        fill="#008236"
                        fill-opacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                        transform="rotate(-360 720 -200)"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col items-center gap-8 lg:flex-row px-4 py-6 bg-green-700">
                <div className="space-y-4 flex-1">
                    <div className="flex flex-col">
                        <h2 className="text-4xl md:text-6xl tracking-tight font-bebas">
                            SOBRE A <span className="text-green-400">BLASER</span>
                        </h2>
                        <div className="h-1 w-24 bg-green-400 ml-0" />
                    </div>
                    <div className="flex flex-col space-y-2 text-justify font-montserrat tracking-tighter text-[14px] md:text-base max-w-2xl">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates inventore aliquam error quod? Temporibus repellat voluptas voluptates
                            deleniti. Porro quia est consectetur dolores accusamus pariatur repellendus necessitatibus vitae cupiditate.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius culpa veritatis corporis itaque, tempora magnam maxime, porro maiores recusandae labore
                            provident ratione suscipit rerum molestiae similique consequatur aliquam illo nemo repudiandae quisquam omnis placeat dolor.
                        </p>
                    </div>
                    <Button label="Saiba Mais" icon={ArrowRight} className="shadow shadow-green-400" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img src={DoodleSvg} alt="Ilustração de um avatar sentado na grama." />
                </div>
            </div>
            <div className="w-full overflow-hidden leading-none bg-green-50">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-24 md:h-40">
                    <path
                        d="M 0,400 L 0,150 C 40.63628067579232,156.87941793069427 81.27256135158464,163.75883586138858 132,157 C 182.72743864841536,150.24116413861142 243.54603526945374,129.84407448514 304,140 C 364.45396473054626,150.15592551486 424.54329757060054,190.86486619805152 474,215 C 523.4567024293995,239.13513380194848 562.280774448144,246.69646072265385 615,216 C 667.719225551856,185.30353927734615 734.3336046368231,116.3492909113331 789,108 C 843.6663953631769,99.6507090886669 886.3848070045627,151.90637563201383 948,175 C 1009.6151929954373,198.09362436798617 1090.1271673449255,192.02520656061168 1140,169 C 1189.8728326550745,145.97479343938832 1209.1065236157358,105.99279812553952 1254,100 C 1298.8934763842642,94.00720187446048 1369.4467381921322,122.00360093723023 1440,150 L 1440,400 L 0,400 Z"
                        stroke="none"
                        stroke-width="0"
                        fill="#008236"
                        fill-opacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                        transform="rotate(-180 720 200)"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
