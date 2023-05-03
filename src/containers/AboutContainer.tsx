import { Image, LayoutContainer } from "../layouts/LayoutContainer";
const image: Image = {
  id: "image",
  alt: "background image",
  url: "https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=2048x2048&w=is&k=20&c=nB37AAthL5AINPEz4tK8kiYHGjJm_YtKuSjJZvOiqfA=",
};

export function AboutContainer() {
  return (
    <LayoutContainer title="About PeerData" image={image}>
      <p className="text-md leading-relaxed text-brand-500">
        Peer Data is born out of the observation that data and AI are powering
        nearly everything we do today. We see that data is becoming essential
        and a commodity.
      </p>
      <p className="text-md relative mt-2 leading-relaxed text-brand-500">
        Our team has been working with data for decades and has been there to
        see how data transitioned from supporting humans, to supporting machines
        in making decisions in the financial markets. We have seen the need for
        asset classes to be operationally best in class in order to scale and
        meet regulatory requirements and have built it.
      </p>
      <p className="text-md relative mt-2 leading-relaxed text-brand-500">
        Data assets growing exponentially, and yet there is not direct way to
        invest in data. The data discovery process is still largely manual and
        understanding the quality of data is a time consuming, subjective
        process.
      </p>
      <p className="text-md relative mt-2 leading-relaxed text-brand-500">
        Peer Data set out on a mission to help organizations transform their
        data into assets; unlocking maximum value and amplify reach by:
      </p>
      <p className="text-md relative mt-2 leading-relaxed text-brand-500">
        Providing expertise, standard, and technology to build infrastructure
        and rails for the data asset class.
      </p>
      <p className="text-md leading-relaxed relative mt-2 text-brand-500">
        Enabling digital discovery and monetization of data
      </p>
      <p className="text-md leading-relaxed relative mt-2 text-brand-500">
        Connecting data owners, investors, and consumers to trade data as an
        asset.
      </p>
    </LayoutContainer>
  );
}

export default AboutContainer;
