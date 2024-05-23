//@ts-ignore
import unirest from "unirest";

import { SMS_SERVICE_KEY } from "src/Config/env";

const sentPhoneOtp = async (otp:number|string, phone:number) => {
  const sentMessage = new Promise((resolve, reject) => {
    const req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

    req.headers({
      authorization: SMS_SERVICE_KEY
    });

    req.form({
      variables_values: otp,
      route: "otp",
      numbers: phone,
    });

    req.end(function (res:any) {
      if (res.error) {
        return reject(res.error);
      }
      return resolve(res.body);
    });
  });

  try {
    await sentMessage;
    return true;
  } catch (error) {
    return false;
  }
};

export { sentPhoneOtp };
