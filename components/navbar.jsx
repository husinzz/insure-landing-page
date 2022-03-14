import { useState } from "react";

export default function Navbar() {
  const [navbarShown, showNavbar] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="font-karla hidden w-full bg-white p-3 lg:block">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <div>
            <img src="/logo.svg" />
          </div>

          <div className="text-neutral-dark-grayish-violet font-bold">
            <a href="#" className="hover:text-neutral-very-dark-violet pr-3">
              HOW WE WORK
            </a>
            <a href="#" className="hover:text-neutral-very-dark-violet pr-3">
              BLOG
            </a>
            <a href="#" className="hover:text-neutral-very-dark-violet pr-3">
              ACCOUNT
            </a>
            <button className="font-karla text-neutral-very-dark-violet hover:bg-neutral-very-dark-violet border-neutral-very-dark-violet ml-5 border-2 px-6 py-1 font-bold hover:text-white">
              VIEW PLANS
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="font-karla fixed top-0 z-20 max-h-[63px] w-full bg-white p-3 lg:hidden">
        <div className="flex w-full max-w-[1200px] items-center justify-between">
          <div>
            <img src="/logo.svg" />
          </div>

          <div>
            <button onClick={() => showNavbar(true)}>
              <img src="/icons/icon-hamburger.svg" />
            </button>
          </div>
        </div>

        {/* Hidden part */}
        <div
          className={`fixed left-0 top-0 h-screen w-full bg-white ${
            navbarShown ? "" : "hidden"
          } z-20`}>
          <div
            className={` mx-auto flex h-[63px] w-full max-w-[1200px] items-center justify-between p-3`}>
            <div>
              <img src="/logo.svg" />
            </div>

            <div>
              <button onClick={() => showNavbar(false)}>
                <img src="/icons/icon-close.svg" />
              </button>
            </div>
          </div>

          <div
            className={`bg-neutral-very-dark-violet h-full text-2xl font-bold text-white`}>
            <div className=" flex flex-col items-center">
              <a href="#" className="my-3 pt-5">
                HOW WE WORK
              </a>
              <a href="#" className="my-3">
                BLOG
              </a>
              <a href="#" className="my-3">
                ACCOUNT
              </a>
              <button className="font-karla mt-3 w-4/5 border-2 border-white py-2 font-bold">
                VIEW PLANS
              </button>
            </div>
            <img
              className="absolute bottom-0 w-full"
              src="/bg/bg-pattern-mobile-nav.svg"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
