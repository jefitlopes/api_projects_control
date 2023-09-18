import { QueryResult } from "pg";

interface IProject {
  id: number;
  name: string;
  description?: string | null | undefined;
  repository: string;
  startDate: Date;
  endDate?: Date | null | undefined;
  developerId?: number | null | undefined;
}

type TProjectCreate = Omit<IProject, "id">;
type TProjectUpdate = Partial<TProjectCreate>;
type TProjectResult = QueryResult<IProject>;

export { IProject, TProjectCreate, TProjectUpdate, TProjectResult };
