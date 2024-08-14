import Account from './Account';
import { Link } from 'react-router-dom'
import SiteHero from './SiteHero'




const SiteHeader = () => {
    return (
        <header className="py-6 bg-gradient-to-r from-white from-60% to-[#800A7A] to-40%">
            <div className="container max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-full lg:w-[60%] flex justify-between items-center">
                        <Link to="/">
                            <img src="/images/logo.svg" alt="" />
                        </Link>

                       

                        <nav>
                            <ul className='flex gap-16'>
                                <li><Link to='/'>Menu</Link></li>
                                <li><Link to='/bolalaruchun'>Bolalar uchun</Link></li>
                                <li><Link to='/filiallar'>Filiallar</Link></li>
                            </ul>
                        </nav>

                        
                    </div>

                    <div className="w-full lg:w-[40%] flex gap-4 items-center justify-center ">
                        <a
                            className='flex items-center before:inline-block before:border-[""] before:w-6 before:h-6 before:bg-[url("/icons/phone.svg")] before:mr-4 mr-16 pl-12'
                            href="tel:+998712005400"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex flex-col">
                                <span className="text-white text-[12px]">
                                    +99871
                                </span>
                                <span className="text-white text-2xl font-bold">
                                    200-54-00
                                </span>
                            </div>
                        </a>

                        <a
                            className='flex items-center before:inline-block before:border-[""] before:w-6 before:h-6 before:bg-[url("/icons/cart.svg")] before:mr-4'
                            href="tel:+998712005400"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex flex-col">
                                <span className="text-white text-2xl font-bold">
                                    Korzina
                                </span>
                                <span className="text-white text-[12px]">
                                    0 uzs
                                </span>
                            </div>
                        </a>

                        <Account />
                    </div>
                </div>
            </div>

            <SiteHero/>
        </header>
    );
};

export default SiteHeader;
