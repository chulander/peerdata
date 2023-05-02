import { Image, LayoutContainer } from "../layouts/LayoutContainer";
const image: Image = {
  id: "image",
  alt: "background image",
  url: "https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=2048x2048&w=is&k=20&c=nB37AAthL5AINPEz4tK8kiYHGjJm_YtKuSjJZvOiqfA=",
};

export function AboutContainer() {
  return (
    <LayoutContainer title="About PeerData" image={image}>
      <p className="text-md leading-8 text-brand-500">
        Here at PeerData, we believe only certain types of individuals have what
        it takes to revolutionize how data operates worldwide.
      </p>
      <p className="text-md relative mt-2 leading-8 text-brand-500">
        As part of this culture, we embrace those within it by understanding
        togetherness leads to amazing accomplishments!
      </p>
      <p className="text-md relative mt-2 leading-8 text-brand-500">
        All differences & exclusive perspectives are welcomed & encouraged so
        every employee puts forth their best effort.
      </p>
      <p className="text-md relative mt-2 leading-8 text-brand-500">
        The mysterious quality which separates us from others & gives rise to
        our original approach is acknowledged - Additionally, Peer Data provides
        an atmosphere allowing for honest self expression without shame or
        inhibition.
      </p>
    </LayoutContainer>
  );
}

export default AboutContainer;
