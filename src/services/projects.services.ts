import format from "pg-format";
import {
  IProject,
  TProjectCreate,
  TProjectResult,
  TProjectUpdate,
} from "../interfaces";
import { client } from "../database";

const create = async (payload: TProjectCreate): Promise<IProject> => {
  if (!payload.endDate) {
    payload.endDate = null;
  }
  if (!payload.developerId) {
    payload.developerId = null;
  }

  const queryFormat: string = format(
    `INSERT INTO projects (%I) VALUES (%L) RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );
  const query: TProjectResult = await client.query(queryFormat);
  return query.rows[0];
};

const retrieve = async (projectId: string): Promise<IProject> => {
  const queryTemplate: string = `
    SELECT
      p.id AS "projectId",
      p.name AS "projectName",
      p.description AS "projectDescription",
      p.repository AS "projectRepository",
      p."startDate" AS "projectStartDate",
      p."endDate" AS "projectEndDate",
      d.name AS "projectDeveloperName"
    FROM projects AS p
    LEFT JOIN developers AS d ON d.id = p."developerId"
    WHERE p.id = $1;
  `;
  const query: TProjectResult = await client.query(queryTemplate, [projectId]);
  return query.rows[0];
};

const update = async (
  payload: TProjectUpdate,
  projectId: string
): Promise<IProject> => {
  const queryFormat: string = format(
    `UPDATE projects SET (%I) = ROW(%L) WHERE id = $1 RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );
  const query: TProjectResult = await client.query(queryFormat, [projectId]);
  return query.rows[0];
};

export default { create, retrieve, update };
