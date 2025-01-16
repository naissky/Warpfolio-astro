import { useState } from 'react';

function Header() {
  const links = [
    {
      name: 'Blog',
      href: '#',
    },
    {
      name: 'Resources',
      href: '#',
    },
    {
      name: 'Github',
      href: 'https://github.com/naissky/warpfolio-astro',
      target: true,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log('click');
  };

  return (
    <header className="sticky top-5 mx-auto z-50 max-w-screen-xl w-full text-shark-50 px-5">
      <div>
        <nav className="w-full flex items-center justify-between bg-zinc-950/20 rounded-2xl p-5 backdrop-blur-md">
          <div>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold hover:transform hover:scale-105 ease-out duration-150"
            >
              <img src="/logo.svg" alt="warpfolio logo" className="size-10" />
              <span className="hidden md:block"> Warpfolio </span>
            </a>
          </div>
          <ul className="hidden md:flex gap-3">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className="text-shark-50 font-medium hover:underline"
                  target={link.target ? '_blank' : '_self'}
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button className="flex flex-col justify-center size-10" onClick={handleToggle}>
              <span>menu</span>
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="absolute md:hidden z-50 top-30 w-[92%] py-2">
          <nav className="bg-zinc-950/20 backdrop-blur-md rounded-2xl p-5">
            <ul className="flex flex-col gap-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-shark-50 text-xl font-medium hover:underline"
                    target={link.target ? '_blank' : '_self'}
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
