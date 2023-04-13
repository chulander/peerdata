export type endpoint = string;
export const readOnlyContentApi: endpoint = `https://${
  import.meta.env.VITE_REGION
}.hygraph.com/v2/${import.meta.env.VITE_PROJECT}`;
