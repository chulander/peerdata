// import CategoryContainer from "../../containers/CategoryContainer";
import { SplitImages } from "../../containers/SplitImages";
import Home3 from "../../assets/images/image-home-3.jpg";
import Home4 from "../../assets/images/image-home-4.jpg";
import { ValueProps } from "../../containers/ValueProps";
import AlternateHero from "../../containers/AlternateHero";
import competitiveEdges from "../../payload/competitve_edges.json";
import { CompanyHistory } from "../../containers/CompanyHistory";
import { CompanyTransparency } from "../../containers/CompanyTransparency";
import { JoinOurTeam } from "../../containers/JoinOurTeam";
import MeetOurTeam from "../../containers/MeetOurTeam";

// const Images = {
//   "home-1": "../../assets/images/image-home-1.jpg",
// };

const people = [
  {
    name: "Kiet Tran",
    role: "Chief Executive Officer",
    image: "kiet",
    linkedin: "https://www.linkedin.com/in/kietttran/",
    bio: "Kiet is the co-founder and CEO of PEER DATA. Previously, he served as the senior partner and Head of APAC Financial Services at IHS Markit, a fintech acquired by S&P Global for $45 billion. Kiet joined IHS Markit when it was a 50-person startup, and over 17 years, he played a pivotal role in various aspects. He contributed to product development, managed global operations, facilitated the creation of new tradeable asset classes, built ecosystem/network businesses, turned around underperforming ventures, acquired billion-dollar companies, led post-acquisition integration efforts, and oversaw a global team of 700-1000 members generating over $150 million in EBITDA. It is worth noting that Kiet’s career commenced at Blackrock, where he started as a fixed income analyst.",
  },
  {
    name: "Cynthia Nadal",
    role: "Chief Operating Officer",
    linkedin: "https://www.linkedin.com/in/cynthia-nadal/",
    bio: "Cynthia is the co-founder and COO of Peer Data. Prior to this role she was a Venture Capitalist Partner in Fintech in Europe; she has worked with many start-ups as an investor, board member and mentor. She is 17+ years tech veteran, who has mostly been based in NY and London, and has also worked in Germany, Netherlands, India and France.  Like some of her co-founders, she is an alumna of the fintech unicorn Markit (now S&P)  where she has spent 11+ years as an operator and where she has learned about the good, the bad and the ugly of product development, operations, growth and corporate innovation from a 12 people office in NY all the way to IPO on the NASDAQ (INFO) in 2014 and then the merger with IHS in 2016. Cynthia holds a Master of Science in Finance, an MBA and is also a Stanford University alumna.",
  },
  {
    name: "Kat Tatochenko",
    role: "President and Chief Revenue Officer",
    linkedin: "https://www.linkedin.com/in/kattatochenko/",
    bio: "20+ years in financial services, trading and technology. Kat has led and developed sales and product organizations at S&P 500 companies and large private firms.  In the recent years, she has shifted focus to ground-up innovation and started working with FinTech start-ups. Kat worked in the US, Europe, Asia, and throughout private ventures in Africa. Kat has consistently focused on emerging technologies, which propelled financial services into electronic and digital markets, where data has been at the center of these transformations. She has become an expert in taking new products to market, building and executing business development strategies.",
  },
  {
    name: "Ben Logan",
    role: "Chief Product Officer",
    linkedin: "https://www.linkedin.com/in/loganben/",
    bio: "Ben Logan has worked in the market data industry for 25 years in a range of product management and product development positions at Reuters-Loan Pricing Corporation, Markit and S&P Global. Ben has launched several new products focused on creating transparency, efficiency and best-practices around operations, valuation, reference data and index management in the fixed income markets. Best known for his work developing and managing synthetic indices in the structured finance space such as ABX.HE and CMBX, he has extensive experience building consortia and interfacing with key stakeholders both inside and outside the industry. Ben graduated from Columbia University with a B.A. in economics.",
  },
  {
    name: "Souvik Das",
    role: "Chief Solutions Architect",
    linkedin: "https://www.linkedin.com/in/souvikdas1978/",
    bio: "Souvik is the co-founder and Chief Architect of PEER DATA. He has over 22 years’ experience in Fixed Income Securities covering Reference Data Management, Service Management, Operations and Customer Service. He contributed to analyzing business processes, determining gaps with desired state of business and suggesting solutions to enhance process efficiency.",
  },
  {
    name: "Marissa Gross",
    role: "Please provide her role",
    bio: "Marissa Gross studied Applied Math and Business at the University of Akron. Her strong quantitative background has provided a unique perspective, enabling effective cross-functional leadership and data-driven decision-making. Recognizing the crucial role of data protection and security in today's digital landscape, Marissa pursued and obtained a professional certification in Cybersecurity from Case Western Reserve University. This solidifies Marissa's commitment to safeguarding organizational assets, understanding the ever-evolving threat landscape, and implementing proactive security measures.",
    linkedin: "https://www.linkedin.com/in/marissangross/",
  },
];
export interface Company {
  className?: string;
}
export function Company({ className }: Company) {
  return (
    <section className={className}>
      <AlternateHero className="px-12" />
      <CompanyHistory
        className="min-h-screen px-12"
        category="History"
        mainContent="In the last decade, systematic analysis has gone from a nice to have and a competitive edge, to a must have and a disadvantage if not employed in running a business. With that, data costs are rising, and consumers have no way to hedge against rising costs.  Companies have no simple way to capitalize on their data, while investors have no direct way to invest in an exponentially growing asset."
      />
      <CompanyTransparency
        className="min-h-screen px-12"
        category="Fostering Transparency"
        mainContent="The data market itself has long standing challenges. The data discovery and procurement processes are still largely manual, licensing rights management is based on honesty statements, and understanding the quality of data is a time-consuming, subjective process."
      />

      <hr className="mb-52 mt-28 h-0.5 bg-brand-dark-blue px-12 lg:mx-12" />
      <ValueProps
        items={competitiveEdges.data as ValueProps["items"]}
        className="px-12"
        buttonLabel="Find out more"
        title="PEER DATA is helping the participants in the data ecosystem by building tools which:"
        onClick={() => console.log("click")}
      />
      <MeetOurTeam className="px-12" />
      <JoinOurTeam
        className="px-12"
        title="Join our team"
        mainContent="Are you someone who loves collobration while having a thirst for knowledge when it comes to data science? Then head over to our job listings today!"
      />
      <SplitImages
        className="mb-60 mt-20 h-3/4 px-12"
        left={Home3}
        right={Home4}
      />
    </section>
  );
}
