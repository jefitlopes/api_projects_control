import handleError from "./handleError.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import uniqueName from "./uniqueName.middleware";
import verifyDevIdParams from "./verifyDevIdParams";
import verifyDevInfosExists from "./verifyDevInfosExists.middlewares";
import verifyPreferredOs from "./verifyPreferredOs.middleware";
import verifyDevIdBody from "./verifyDevIdBody.middleware";
import verifyProjectIdParams from "./verifyProjectIdParams";

export default {
  handleError,
  uniqueEmail,
  uniqueName,
  verifyDevIdParams,
  verifyDevInfosExists,
  verifyPreferredOs,
  verifyDevIdBody,
  verifyProjectIdParams,
};
