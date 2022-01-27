import { FullPayloadInterface } from "./full-payload.interface";

export type PayloadWithCategory = Pick<FullPayloadInterface, "id" | "category">;
