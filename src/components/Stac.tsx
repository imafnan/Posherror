import { ReactLenis } from 'lenis/react';
import OfferCard, { OfferItem } from '../../src/components/ui/OfferCard';
import Img1 from "../../public/Error.svg";
import Img2 from "../../public/bg.png";
import Img3 from "../../public/blog4.png";

const items: OfferItem[] = [
    {
        id: '01',
        title: 'Specialized Support Teams',
        desc: "Our dedicated partner support team knows events inside-out. Whether you're onboarding or scaling, we’re here to help with strategy, setup, and technical guidance — whenever you need it.",
        episodes: [
            'Dedicated support agents for vendor onboarding',
            'Strategic tips to improve your listing and rank higher',
            'Real-time help via chat, email, or scheduled call',
        ],
        action: 'Talk to Our Support Team',
        img: Img1,
    },
    {
        id: '02',
        title: 'Learning & Development Resources',
        desc: 'Access webinars, tutorials, and partner tips to improve your service delivery and attract more clients. Learn how to optimize your listing, pricing, and promotions — all in one place.',
        episodes: [
            'Watch bite-sized videos on service setup and pricing',
            'Learn how top vendors write their descriptions and packages',
            'Access tips for handling clients',
        ],
        action: 'Explore Partner Resources',
        img: Img2,
    },
    {
        id: '03',
        title: 'Growth Opportunities',
        desc: 'Gain visibility through Posh Celebration’s vendor listings and connect with thousands of clients searching for event services. From custom packages to client reviews — everything is designed to help your business grow.',
        episodes: [
            'Appear in client searches based on category and location',
            'Create flexible service packages with custom pricing',
            'Track payouts and earnings in real time from your dashboard',
        ],
        action: 'Create Your Account',
        img: Img3,
    },
];

const Offers = () => {
    return (
        <ReactLenis root>
            <div>
                <header className="mx-auto max-w-3xl space-y-4 text-center">
                    <h2 className="text-base-static-dark text-4xl leading-12 font-medium">
                        A platform built for you and support when you need it.
                    </h2>
                    <p className="text-midnight-gray">
                        From listing your service to managing bookings — we’re here to help you succeed at every step.
                    </p>
                </header>

                <div className="relative w-full">
                    {items.map((item, idx) => (
                        <div
                            key={item.id}
                            className="sticky flex h-max flex-col gap-8 py-32"
                            style={{ top: `${idx * 0.5}rem` }}
                        >
                            <OfferCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </ReactLenis>
    );
};

export default Offers;
