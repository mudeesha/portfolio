import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="block">
            <h1 className="text-4xl font-semibold font-primary">
              Mudeesha<span className="text-accent">.</span>
            </h1>
        </Link>

        {/* desktop nav */}

        <div className="hidden xl:flex">
            <Nav />
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
