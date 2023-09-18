import { QueryResult } from "pg";

interface IDeveloper {
  id: number;
  name: string;
  email: string;
}

type TDeveloperCreate = Omit<IDeveloper, "id">;
type TDeveloperUpdate = Partial<TDeveloperCreate>;
type TDeveloperRead = Array<IDeveloper>;
type TDeveloperResult = QueryResult<IDeveloper>;

export {
  IDeveloper,
  TDeveloperCreate,
  TDeveloperUpdate,
  TDeveloperRead,
  TDeveloperResult,
};
