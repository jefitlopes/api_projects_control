import format from "pg-format";
import {
  IDeveloperInfos,
  TDeveloperInfosCreate,
  TDeveloperInfosResult,
} from "../interfaces";
import { client } from "../database";

const create = async (
  payload: TDeveloperInfosCreate
): Promise<IDeveloperInfos> => {
  const queryFormat: string = format(
    `INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );

  const query: TDeveloperInfosResult = await client.query(queryFormat);

  return query.rows[0];
};

export default { create };
