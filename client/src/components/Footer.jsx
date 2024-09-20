'use client';

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#1A3B8F] w-full text-white dark:bg-[#1A3B8F]">
      <div className="w-full max-w-[85rem] py-12 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-full lg:col-span-1">
            <a
              className="flex-none text-2xl font-bold hover:opacity-90 focus:outline-none"
              href="#"
              aria-label="Brand"
            >
              PetConnect
            </a>
          </div>
          {/* End Col */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-200">Company</h4>
            <div className="mt-4 grid space-y-4">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 focus:outline-none"
                  href="#"
                >
                  About us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 focus:outline-none"
                  href="#"
                >
                  Blog
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 focus:outline-none"
                  href="#"
                >
                  Careers
                  <span className="inline-block ms-1 text-xs bg-blue-900 text-white py-1 px-2 rounded-lg">
                    We're hiring
                  </span>
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-100 focus:outline-none"
                  href="#"
                >
                  Customers
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-200">Stay up to date</h4>
            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-[#2A3E6E]">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Subscribe
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-[#1A3B8F] focus:ring-[#1A3B8F] dark:bg-[#2A3E6E] dark:border-transparent dark:text-gray-300 dark:placeholder-gray-500 dark:focus:ring-gray-600"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#1A3B8F] text-white hover:bg-[#153b7d] focus:outline-none focus:bg-[#153b7d] transition-all duration-200"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                New UI kits or big discounts. Never spam.
              </p>
            </form>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 dark:text-gray-400">
            © 2024 PetConnect. All rights reserved.
          </p>
          {/* Social Brands */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              className="text-white hover:bg-white/10 focus:outline-none p-2 rounded-full transition-all duration-200"
              href="#"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              className="text-white hover:bg-white/10 focus:outline-none p-2 rounded-full transition-all duration-200"
              href="#"
              aria-label="Google"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="text-white hover:bg-white/10 focus:outline-none p-2 rounded-full transition-all duration-200"
              href="#"
              aria-label="Twitter"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.3 3.3 0 0 0-2.18-.973c-1.631 0-2.954 1.324-2.954 2.954 0 .231.027.457.078.675-2.453-.123-4.626-1.296-6.078-3.072a2.955 2.955 0 0 0-.4 1.486c0 1.025.522 1.931 1.313 2.462a3.27 3.27 0 0 1-1.34-.371v.037c0 1.434 1.019 2.63 2.372 2.902a3.234 3.234 0 0 1-1.334.05c.379 1.188 1.475 2.059 2.77 2.082a6.613 6.613 0 0 1-4.095 1.413c-.265 0-.527-.015-.788-.046a9.355 9.355 0 0 0 5.034 1.474z" />
              </svg>
            </a>
          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
