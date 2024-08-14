import { Button } from './ui/button'

const SiteHero = () => {
    return (
        <>
            <section className="pt-24">
                <div className="container max-w-7xl mx-auto">
                    <div className="relative flex justify-between items-center">
                        <div className="w-full max-w-[434px] mb-[66px]">
                            <h1 className="mt-0 mb-[14px] text-[80px] font-black text-zinc-800">
                                Siz izlagan mazzali ta’mlar
                            </h1>

                            <p className="text-[18px] leading-[32px] text-zinc-800">
                                When an unknown printer took a galley of type
                                scrambled it to make a type specimen
                            </p>
                        </div>

                        <img
                            className="absolute top-[-100px] w-[900px]"
                            style={{ left: 'calc(50% - 140px)' }}
                            src="/images/big-burger.png"
                            width="800"
                            alt="Big burger"
                        />
                    </div>

                    <div className="flex gap-10">
                        <div
                            className="relative w-64 pr-5 pb-0 pl-5 pt-5 overflow-hidden rounded-xl h-56"
                            style={{
                                backgroundImage:
                                    'linear-gradient(-44.4deg, #ffc85c -9.747%, #f1b301 85.422%)',
                            }}
                        >
                            <Button
							variant='default'
                                className="mb-[56px] px-[23px] py-[11px] rounded-[30px] bg-[#ffffff33] border-none text-[var(--colorSecondary)]"
                                type="button"
                            >
                                Yangi
                            </Button>

                            <p className="text-[34px] font-bold text-[#e76a06]">
                                <span className="block">PIT</span>
                                <span className="mr-5">-SA</span>
                            </p>

                            <img
                                className="absolute right-0 bottom-0"
                                src="/images/half-pizza.png"
                                width="150"
                                alt="Half pizza"
                            />
                        </div>
                        <div className="relative w-64 pr-5 pb-0 pl-5 pt-5 overflow-hidden rounded-xl bg-fuchsia-800 h-56">
                            <Button
							variant='default'
                                className="mb-[56px] px-[23px] py-[11px] rounded-[30px] bg-[#ffffff33] border-none text-[var(--colorSecondary)]"
                                type="button"
                            >
                                Ko'p sotilgan
                            </Button>

                            <p className="text-[34px] font-bold text-fuchsia-500">
                                <span className="block">KOM</span>
                                <span className="mr-5">-BO</span>
                            </p>

                            <img
                                className="absolute right-0 bottom-0"
                                src="/images/half-kombo.png"
                                width="149"
                                alt="Half combo"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full hidden">
                <div className="w-full h-[200px] gap-[30px] flex">
                    <div
                        className="relative w-64 pr-5 pb-0 pl-5 pt-5 overflow-hidden rounded-xl h-full"
                        style={{
                            backgroundImage:
                                'linear-gradient(-44.4deg, #ffc85c -9.747%, #f1b301 85.422%)',
                        }}
                    >
                        <Button
						variant='default'
                            className="mb-[56px] px-[23px] py-[11px] rounded-[30px] bg-[#ffffff33] border-none text-[var(--colorSecondary)]"
                            type="button"
                        >
                            Yangi
                        </Button>

                        <p className="text-[34px] font-bold text-[#e76a06]">
                            <span className="block">PIT</span>
                            <span className="mr-5">-SA</span>
                        </p>

                        <img
                            className="absolute right-0 bottom-0"
                            src="/images/half-pizza.png"
                            width="150"
                            alt="Half pizza"
                        />
                    </div>
                    <div
                        className="relative w-64 pr-5 pb-0 pl-5 pt-5 overflow-hidden rounded-xl h-full"
                        style={{
                            backgroundImage:
                                'linear-gradient(-44.4deg, #ffc85c -9.747%, #f1b301 85.422%)',
                        }}
                    >
                        <Button
						variant='default'
                            className="mb-[56px] px-[23px] py-[11px] rounded-[30px] bg-[#ffffff33] border-none text-[var(--colorSecondary)]"
                            type="button"
                        >
                            Ko'p sotilgan
                        </Button>

                        <p className="text-[34px] font-bold text-fuchsia-500">
                            <span className="block">KOM</span>
                            <span className="mr-5">-BO</span>
                        </p>

                        <img
                            className="absolute right-0 bottom-0"
                            src="/images/half-kombo.png"
                            width="149"
                            alt="Half combo"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SiteHero;
