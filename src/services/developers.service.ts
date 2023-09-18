import format from "pg-format";
import {
  IDeveloper,
  TDeveloperCreate,
  TDeveloperResult,
  TDeveloperUpdate,
} from "../interfaces";
import { client } from "../database";

const create = async (payload: TDeveloperCreate): Promise<IDeveloper> => {
  const queryFormat: string = format(
    `
    INSERT INTO developers (%I)
    VALUES (%L)
    RETURNING *;
    `,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: TDeveloperResult = await client.query(queryFormat);
  return queryResult.rows[0];
};

const retrieve = async (developerId: string): Promise<any> => {
  const query = await client.query(
    `SELECT developers.id as "developerId",
            developers.name as "developerName",
            developers.email as "developerEmail",
            "developerInfos"."developerSince" as "developerInfoDeveloperSince",
            "developerInfos"."preferredOS" as "developerInfoPreferredOS"
     FROM developers
     LEFT JOIN "developerInfos" ON developers.id = "developerInfos"."developerId"
     WHERE developers.id = $1;`,
    [developerId]
  );

  return query.rows[0];
};

const destroy = async (developerId: string): Promise<void> => {
  await client.query(`DELETE FROM developers WHERE id = $1;`, [developerId]);
};

const update = async (
  payload: TDeveloperUpdate,
  developerId: string
): Promise<IDeveloper> => {
  const queryFormat: string = format(
    `UPDATE developers SET (%I) = ROW (%L) WHERE id = $1 RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );
  const query: TDeveloperResult = await client.query(queryFormat, [
    developerId,
  ]);
  return query.rows[0];
};

export default { create, retrieve, destroy, update };
