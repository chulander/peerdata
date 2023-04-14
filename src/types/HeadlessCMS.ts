// this file containts Hygraph default system files created for each model
// https://hygraph.com/docs/api-reference/schema/system-fields

export interface System {
  id: string;
  createdAt: string;
  createdBy?: User;
  updatedAt: string;
  updateBy?: User;
  publishedAt: string;
  publishedBy: User;
  __typename: string;
}

export interface User
  extends Omit<System, "createdBy" | "updatedBy" | "publishedBy"> {
  name: string;
  picture?: string;
  kind: "MEMBER" | "PAT" | "PUBLIC";
}

export interface Asset extends System {
  url: string;
  handle: string;
  fileName: string;
  height?: number;
  width?: number;
  size?: number;
  mimeType: string;
}
