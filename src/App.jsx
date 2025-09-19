import "./App.css";
import Logo from "./assets/adysun-img.jpg";
import Weather from "./assets/weather-img.jpg";
import Api from "./assets/api-img.jpg";
import { Mail, Github, LaptopMinimal, TvMinimalPlay } from "lucide-react";
function App() {
  return (
    <div className="m-0 p-0 min-h-screen bg-blue-100">
      {/*Header*/}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">
              Arnab Kumar Baishya
            </h1>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:arnabbaishya2001@gmail.com"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/arnabkumarbaishya"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1 lg:h-[500px] lg:overflow-y-auto">
                {/* Intro Section */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Software Engineer
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Frontend Developer with experience in creating responsive and
                  user friendly web interfaces via React, HTML , CSS, Javascript
                  with strong focus on performance optimization, reusabilty and
                  maintainable code practices.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                    <LaptopMinimal className="w-5 h-5" />
                    <span>Web Development</span>
                  </div>
                </div>

                {/* Professional Details */}
                <h2 className="text-2xl font-semibold text-gray-900">
                  Professional Details
                </h2>
                <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Industry Experience
                    </h3>
                    <p className="text-gray-600">1 month</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Subject Expertise
                    </h3>
                    <p className="text-gray-600">
                      HTML , TailwindCSS , Bootstrap , React , Javascript
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Current Organization
                    </h3>
                    <p className="text-gray-600">Adysun Ventures Pvt. Ltd</p>
                    <p className="text-gray-600">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mt-10 px-6">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Professional Experience
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 mt-4">
              <div className="flex items-center gap-3 text-gray-600 p-3 bg-white rounded-xl border border-gray-200 h-20 transition-transform duration-300 hover:scale-105">
                <img
                  style={{ borderRadius: "50%" }}
                  src={Logo}
                  height={50}
                  width={50}
                  alt="logo"
                />
                <span className="font-medium">Adysun Ventures Pvt. Ltd.</span>
                
                <span className="font-medium"><i>(Aug-2025 - Present)</i></span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
              <div className=" bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform duration-300 hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Web Development
                  </h3>
                </div>
                <p className="text-gray-600">
                  <i>HTML,Tailwind CSS,Bootstrap,Javascript,React</i>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform duration-300 hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Programming Languages
                  </h3>
                </div>
                <p className="text-gray-600">
                  <i>Java,Javascript,C++</i>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-transform duration-300 hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Core Subjects
                  </h3>
                </div>
                <p className="text-gray-600">
                  <i>
                    Data Structures and Algorithms,Database Management
                    System,Operating System,Computer Networks
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="container my-12 mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Personal Projects
            </h2>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img className="rounded-t-lg" src={Weather} alt="" />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Weather App
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Built a weather application using React that fetches
                    real-time weather data from the OpenWeather API. The app
                    allows users to search for a city and displays details like
                    temperature, humidity, wind speed, and weather conditions
                    with dynamic icons. Styled the UI for a clean, responsive
                    design, ensuring it works well across devices.
                  </p>
                  <div className="flex justify-around">
                    <a
                      href="https://arnabkumarbaishya.github.io/weather-app-react/"
                      className=" text-white hover:text-gray-900 transition-colors"
                      target="_blank"
                    >
                      <TvMinimalPlay className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/ArnabKumarBaishya/weather-app-react"
                      className=" text-white hover:text-gray-900 transition-colors"
                      target="_blank"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img className="rounded-t-lg h-55 w-96"  src={Api} alt="" />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      React Multi-API Explorer
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    A React-based web application that demonstrates integration
                    with 10 different public APIs. The project provides a
                    button-based system where each button fetches and displays
                    real-time data from a unique API, such as jokes, random
                    images, facts, cryptocurrency prices, and space launches. It
                    showcases handling multiple API requests, state management,
                    and dynamic rendering in a clean and interactive UI.
                  </p>
                  <div className="flex justify-around">
                    <a
                      href="https://arnabkumarbaishya.github.io/react-api/"
                      className=" text-white hover:text-gray-900 transition-colors"
                      target="_blank"
                    >
                      <TvMinimalPlay className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/ArnabKumarBaishya/react-api"
                      className=" text-white hover:text-gray-900 transition-colors"
                      target="_blank"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20  bg-blue-50" id="contact">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Details
              </h2>
              <div className="flex flex-col items-center space-y-6">
                <a
                  href="mailto:arnabbaishya2001@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>arnabbaishya2001@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-50 py-8">
          <div className="container mx-auto px-6 text-center text-gray-600">
            <p>© 2025 Arnab Kumar Baishya. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
