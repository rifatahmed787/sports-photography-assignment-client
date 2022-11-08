import React from "react";
import img1 from "../../assets/images/banner/img2.jpg";
import img2 from "../../assets/images/banner/img1.jpg";

const Home = () => {
  return (
    <div>
      <section>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="font-bold text-5xl text-center mb-10">
              Sports Photography
            </h1>
            <p className="mx-3 lg:p-10 lg:text-center">
              Hey, are you looking for a sports photographer? You are in right
              place. I am a professional sports photographer. I am passionate
              about photography and sports, and I have a strong track record of
              capturing amazing shots that capture the excitement and energy of
              the game. I am skilled in using various photography equipment and
              software, and I am confident in my ability to capture the perfect
              shot in any situation.
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-white"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <img
          src={img1}
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </section>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-3xl">
              Guide To Sports Photography
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Sports Photography can be a very time consuming and challenging
              activity, but it can be extremely rewarding when you get that
              precise “in the moment” shot from a sports event.The basic
              approach to capturing fast moving sports is to shoot in “Burst
              Mode”, where the camera fires off several shots per second like a
              machine gun. Good Sports Photography requires you to manipulate
              camera settings manually and not use Auto Mode on your camera.
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img2}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md"
            />
          </div>
        </div>
      </section>
      <section>
        <div
          className="hero h-96"
          style={{
            backgroundImage: `url("https://i.ibb.co/V9Y7vzp/sport2.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                What Is Sports Photography?
              </h1>
              <p className="mb-5">
                Sports photography is a type of photography that covers every
                sport and sporting event, capturing the action of a game and
                behind the scenes of the players. This type of photography helps
                to promote brands, the players, as well as the sport.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
