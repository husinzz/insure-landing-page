import type { NextPage } from "next";
import Navbar from "../components/navbar";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary-dark-violet relative mt-[63px] lg:mt-0">
        {/* the dude and his kids and wife pic but mobile */}
        <img
          className="w-full lg:hidden"
          src="/images/image-intro-mobile.jpg"
        />

        <div className="relative mx-auto h-[600px] max-h-[600px] max-w-[1200px] bg-[url(/bg/bg-pattern-intro-left-mobile.svg)] lg:bg-none bg-no-repeat text-white">
          <div className="flex h-full items-center">
            <div className="font-karla max-w-[530px] px-4 lg:pt-5">
              <hr className="mb-10 hidden w-[100px] lg:block" />
              <h1 className="font-dm text-center text-[3.3em] leading-none lg:text-left lg:text-[4.3em]">
                Humanizing your insurance.
              </h1>
              <p className="mt-6 mb-8 text-center lg:text-left">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>

              <div className="flex justify-center lg:block">
                <button className="border-2 px-5 py-1 hover:bg-white hover:text-black">
                  VIEW PLANS
                </button>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 right-0 hidden lg:block">
            <img
              className="h-full w-full"
              src="/images/image-intro-desktop.jpg"
            />
          </div>

          {/* BG patterns */}
          <img
            className="absolute bottom-0 right-0 z-10 translate-y-1/2 lg:hidden"
            src="/bg/bg-pattern-intro-right-mobile.svg"
          />
        </div>

        {/* bg patersn*/}
        <img
          className="absolute top-0 right-0 z-10 hidden lg:block"
          src="/bg/bg-pattern-intro-right-desktop.svg"
        />

        <img
          className="absolute top-2/3 hidden lg:block"
          src="/bg/bg-pattern-intro-left-desktop.svg"
        />
      </section>

      <section className="mt-52 mb-28 flex items-end lg:h-3/4">
        <div className="mx-auto max-w-[1200px]">
          <hr className="mx-auto mb-8 w-[120px] lg:mx-0" />
          <h1 className="font-dm text-primary-dark-violet text-center text-5xl lg:text-left lg:text-6xl">
            We’re different
          </h1>

          {/* The dynamic card that has icons */}
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              [
                "/icons/icon-snappy-process.svg",
                "Snappy Process",
                "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
              ],
              [
                "/icons/icon-affordable-prices.svg",
                "Affordable Prices",
                "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
              ],
              [
                "/icons/icon-people-first.svg",
                "People First",
                "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
              ],
            ].map(([icon, title, text]) => {
              return (
                <article className="flex flex-col items-center lg:items-start">
                  <img src={icon} height={65} width={65} className="" />
                  <h2 className="font-dm mt-4 text-2xl">{title}</h2>
                  <p className="font-karla text-primary-grayish-blue mt-3 px-4 text-center lg:px-0 lg:text-left ">
                    {text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto flex h-full max-w-[1200px] items-center justify-center lg:h-1/2">
        <div className="bg-primary-dark-violet relative mx-3 flex h-full max-h-[317px] w-full flex-col items-center justify-center bg-[url(/bg/bg-pattern-how-we-work-mobile.svg)] bg-contain bg-right-top bg-no-repeat px-10 lg:mx-0 lg:flex-row lg:justify-between lg:bg-[url(/bg/bg-pattern-how-we-work-desktop.svg)]">
          <h2 className="font-dm mx-5 py-5 text-center text-4xl text-white lg:w-[522px] lg:text-left lg:text-6xl">
            Find out more about how we work
          </h2>
          <button className="z-10 border-2 px-5 py-1 text-white hover:bg-white hover:text-black">
            HOW WE WORK
          </button>
        </div>
      </section>

      <footer className="bg-neutral-very-light-gray font-karla relative mt-24 bg-[url(/bg/bg-pattern-footer-mobile.svg)] bg-contain bg-left-top bg-no-repeat lg:bg-[url(/bg/bg-pattern-footer-desktop.svg)] lg:bg-auto">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center justify-between pt-14 pb-8 lg:flex-row">
            <div className="mb-8 lg:mb-0 flex items-center">
              <img src="/logo.svg" />
            </div>
            <div className="flex items-center">
              <a href="#" className=" mx-2">
                <AiFillFacebook className="hover:fill-neutral-very-dark-violet text-3xl text-gray-500" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineTwitter className="hover:fill-neutral-very-dark-violet text-3xl text-gray-500" />
              </a>
              <a href="#" className="mx-2">
                <FaPinterest className="hover:fill-neutral-very-dark-violet text-3xl text-gray-500" />
              </a>
              <a href="#" className="mx-2">
                <AiOutlineInstagram className="hover:fill-neutral-very-dark-violet text-3xl text-gray-500" />
              </a>
            </div>
          </div>
          <hr className="mx-auto w-[90%] pb-10" />
          <div className="grid grid-cols-1 text-center lg:grid-cols-4 lg:text-left">
            <div className="mt-3">
              <h3 className="text-neutral-dark-grayish-violet uppercase">
                Our company
              </h3>
              <div className="mt-6 flex flex-col">
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  How we work
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Why Insure?
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  View plans
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Reviews
                </a>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-neutral-dark-grayish-violet uppercase">
                Help me
              </h3>
              <div className="mt-6 flex flex-col">
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  FAQ
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Terms of use
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Privacy policy
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Cookies
                </a>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-neutral-dark-grayish-violet uppercase">
                Contact
              </h3>
              <div className="mt-6 flex flex-col">
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Sales
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Support
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Live chat
                </a>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-neutral-dark-grayish-violet uppercase">
                Others
              </h3>
              <div className="mt-6 flex flex-col">
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Careers
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Press
                </a>
                <a className="text-neutral-very-dark-violet mb-2 font-bold uppercase">
                  Licenses
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1200px] text-center">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/urdreamboi">Urdreamboi</a>.
        </div>
      </footer>
    </>
  );
};

export default Home;
