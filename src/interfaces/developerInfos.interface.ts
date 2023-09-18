import { QueryResult } from "pg";

type ValidOs = "Windows" | "Linux" | "MacOS";

interface IDeveloperInfos {
  id: number;
  developerSince: Date;
  preferredOS: ValidOs;
  developerId: number;
}

type TDeveloperInfosCreate = Omit<IDeveloperInfos, "id">;
type TDeveloperInfosResult = QueryResult<IDeveloperInfos>;

export {
  ValidOs,
  IDeveloperInfos,
  TDeveloperInfosCreate,
  TDeveloperInfosResult,
};
