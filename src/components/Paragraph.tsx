export type Paragraph = {
  text: string;
};
export default function Paragraph({
  text = `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid
      sint distinctio iure ipsum cupiditate? Quis, odit assumenda? Deleniti
      quasi inventore, libero reiciendis minima aliquid tempora. Obcaecati,
      autem.

`,
}: Paragraph) {
  return <p className="mt-4 text-gray-600">{text}</p>;
}
