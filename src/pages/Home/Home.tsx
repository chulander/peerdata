import HeroContainer from "../../containers/HeroContainer";
import PersonasContainer from "../../containers/PersonasContainer";
import { Hero as HeroType } from "../../types/Hero";
import useQuery from "../../hooks/useQuery";
import { heroQuery } from "./queries/heroQuery";
import CategoriesContainer from "../../containers/CategoriesContainer";
import { ImageContainer } from "../../containers/ImageContainer";
import { ImageContainer as ImageContainerType } from "../../types/Image";
import { imageContainerQuery } from "./queries/imageContainerQuery";

export function Home() {
  const heroes = useQuery<HeroType>(heroQuery, "hero");
  const imageContainer = useQuery<ImageContainerType>(
    imageContainerQuery,
    "container"
  );

  return !heroes || !imageContainer ? null : (
    <div>
      <HeroContainer
        title={heroes["title"]}
        description={heroes["description"]}
        image={heroes["image"]}
        links={heroes["links"]}
      />
      <PersonasContainer />
      <ImageContainer
        id={imageContainer.id}
        title={imageContainer.title}
        image={imageContainer.image}
      />
      <CategoriesContainer />
    </div>
  );
}
