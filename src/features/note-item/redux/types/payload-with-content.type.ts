import { FullPayloadInterface } from "./full-payload.interface";

export type PayloadWithContent = Pick<FullPayloadInterface, "id" | "content">;
