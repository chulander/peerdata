import ImageContent from "../components/ImageContent";
import AboutBanner from "../containers/AboutBanner";

export type About = {
  img: string;
};
export default function About({ img }: About) {
  return (
    <div>
      <AboutBanner />
      <section className="space-y-4 p-4">
        <ImageContent
          alt="D.A.T.A Experts"
          direction="left"
          name="D.A.T.A Experts"
          description="Data runs the world, yet data itself is not widely understood. Organizations still don’t know what data they have, where it is, or who is using it. Most critically, they have absolutely no way to measure the health of their data — how well it supports business objectives."
          img="https://media.istockphoto.com/id/1168611666/photo/light-bulbs-concept.jpg?s=1024x1024&w=is&k=20&c=9P5UpDI2yccpL7u8SxdtqUmkACB3rHaxD_5bfut7BOQ="
        />
        <ImageContent
          alt="PeerData Values"
          name="PeerData Values"
          description="Here at PeerData, we believe only certain types of individuals have what it takes to revolutionize how data operates worldwide . As part of this culture ,we embrace those within it by understanding togetherness leads to amazing accomplishments ! All differences & exclusive perspectives are welcomed & encouraged so every employee puts forth their best effort.

          The mysterious quality which separates us from others & gives rise to our original approach is acknowledged - Additionally, Peer Data provides an atmosphere allowing for honest self expression without shame or inhibition."
          img="https://media.istockphoto.com/id/1185856904/photo/light-bulbs-concept.jpg?s=1024x1024&w=is&k=20&c=y3mGVgMEE3dGCqXg8aXVOZhNSLEfaabdTHjDitH8CB4="
        />
        <ImageContent
          alt="Join our Team"
          direction="left"
          name="Join Our Team"
          description="Interested in becoming part of PeerData? You must possess creativity, innovation as well as be willing to challenge existing standards. Our remote-first teams are situated across North America, Europe and Asia so don't miss this chance! Are you someone who loves collaborating while having a thirst for knowledge when it comes to data science? Then head over to our job listings today!"
          img="https://media.istockphoto.com/id/1347652268/photo/group-of-colleagues-celebrating-success.jpg?s=1024x1024&w=is&k=20&c=qfSzD8iWx_x8fBE4Lo3moBjmGm_eXdU36Vj283VX1w8="
        />
      </section>
      <section className="p-4">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="h-64 w-full rounded bg-cover bg-center bg-no-repeat"
        ></div>
      </section>
    </div>
  );
}
