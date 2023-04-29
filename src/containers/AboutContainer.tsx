export function AboutContainer() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-brand-700 sm:text-6xl lg:col-span-2 xl:col-auto">
              About PeerData
            </h1>
            <div className="mt-6 max-w-xl flex flex-col justify-center lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-md leading-8 text-brand-500">
                Here at PeerData, we believe only certain types of individuals
                have what it takes to revolutionize how data operates worldwide.
              </p>
              <p className="text-md leading-8 text-brand-500">
                As part of this culture, we embrace those within it by
                understanding togetherness leads to amazing accomplishments!
              </p>
              <p className="text-md leading-8 text-brand-500">
                All differences & exclusive perspectives are welcomed &
                encouraged so every employee puts forth their best effort.
              </p>
              <p className="text-md leading-8 text-brand-500">
                The mysterious quality which separates us from others & gives
                rise to our original approach is acknowledged - Additionally,
                Peer Data provides an atmosphere allowing for honest self
                expression without shame or inhibition .
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=2048x2048&w=is&k=20&c=nB37AAthL5AINPEz4tK8kiYHGjJm_YtKuSjJZvOiqfA="
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
