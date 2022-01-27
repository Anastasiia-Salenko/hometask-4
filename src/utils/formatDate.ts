import { format } from "date-fns";
import { DATE_FORMAT } from "../common/constants";

export const formatDate = (date: Date) => format(date, DATE_FORMAT);
