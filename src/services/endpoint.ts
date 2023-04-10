export type endpoint = string;
// api
// https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clg6lt2pz0w8r01tfcx8z0tja/master
// readonly
// https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg6lt2pz0w8r01tfcx8z0tja/master
export const readOnlyContentApi: endpoint = `https://${
  import.meta.env.VITE_REGION
}.hygraph.com/v2/${import.meta.env.VITE_PROJECT}`;
