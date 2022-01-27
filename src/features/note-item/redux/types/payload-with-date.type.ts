import { FullPayloadInterface } from "./full-payload.interface";

export type PayloadWithDate = Pick<FullPayloadInterface, "id" | "date">;
