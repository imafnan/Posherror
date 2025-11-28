import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

export interface OfferItem {
    id: string;
    title: string;
    desc: string;
    episodes: string[];
    action: string;
    img: string;
}

const OfferCard = ({ item }: { item: OfferItem }) => (
    <div className="container">

    <div className="border-border relative z-[10] flex w-full flex-col items-center gap-8 rounded-4xl border bg-gray-50 p-4 lg:flex-row lg:gap-16">
        <div className="w-full space-y-6 lg:w-1/2 lg:px-12">
            <div className="space-y-4">
                <h3 className="text-base-static-dark text-3xl leading-10 font-medium">{item.title}</h3>
                <p className="text-midnight-gray pr-12">{item.desc}</p>
            </div>

            <ul className="text-base-static-dark space-y-3">
                {item.episodes.map((episode, idx) => (
                    <li key={idx} className="flex items-center">
                        <Check className="mr-3" />
                        <p>{episode}</p>
                    </li>
                ))}
            </ul>

            <button  className="mt-2">
                {item.action} <ArrowRight />
            </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end">
            <Image src={item.img} alt={item.title} className="aspect-[553/526] w-full max-w-[553px] rounded-3xl object-cover" />
        </div>
    </div>
                </div>
);

export default OfferCard;
