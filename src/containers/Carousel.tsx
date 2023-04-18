export function Carousel() {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://media.istockphoto.com/id/1407983911/photo/forex-diagrams-and-stock-market-rising-lines-with-numbers.jpg?s=2048x2048&w=is&k=20&c=7FHGeHlE3P0xMdY0tFOuH7CNX23QRkSla_vGg4TnvEA="
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://media.istockphoto.com/id/1402667894/photo/energy-lecture-screen.jpg?s=2048x2048&w=is&k=20&c=PONb5dVDNRZ4V54poFTcLVgIIlAKuThV-bIBipgWIvA="
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://media.istockphoto.com/id/1414981473/photo/futuristic-flight-through-a-digital-line-landscape-blue-dust-particle-abstract-background-3d.jpg?s=2048x2048&w=is&k=20&c=lz80IUOYK7JV0hBraat5xBjbOLxpbtnE5fpVAhkY5uw="
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://media.istockphoto.com/id/1398484779/photo/futuristic-background-of-points-and-lines-with-a-dynamic-wave-big-data-abstract-background-3d.jpg?s=2048x2048&w=is&k=20&c=LM27HlvIO4hruBnl4C_JCwfMHRXKS7kdMYNmpz_EX-c="
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://media.istockphoto.com/id/1136211929/photo/quantum-computing-system-background.jpg?s=2048x2048&w=is&k=20&c=wlLGBReT5pMQA623vsthECZ9nbRRUgk8k_IvsiKVWSw="
            className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="h-3 w-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <button
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
