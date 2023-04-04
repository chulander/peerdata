export type Subtitle = {
  text: string;
};
export default function Subtitle({ text }: Subtitle) {
  return <h2 className="text-3xl font-bold sm:text-4xl">{text}</h2>;
}
