import NavItem from "../components/NavItem";
import { Image, LayoutContainer } from "../layouts/LayoutContainer";

const image: Image = {
  id: "image",
  alt: "background image",
  url: "https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=2048x2048&w=is&k=20&c=nB37AAthL5AINPEz4tK8kiYHGjJm_YtKuSjJZvOiqfA=",
};

export function JoinContainer() {
  return (
    <LayoutContainer title="Join Us" image={image}>
      <p className="text-md mt-6 font-light leading-snug text-black">
        Interested in becoming part of PEER DATA? You must possess creativity,
        innovation as well as be willing to challenge existing standards.
      </p>
      <p className="text-md relative mt-4 font-light leading-snug text-black">
        Our remote-first teams are situated across North America, Europe and
        Asia so don't miss this chance! Are you someone who loves collaborating
        while having a thirst for knowledge when it comes to data science?
      </p>
      <p className="text-md relative mt-4 font-light leading-snug text-black">
        Then head over to our job listings today!
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <NavItem
          id="careers"
          to="/careers"
          className="rounded-md bg-brand-blue px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-blue/80 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          Careers at PEER DATA
        </NavItem>
      </div>
    </LayoutContainer>
  );
}

export default JoinContainer;
