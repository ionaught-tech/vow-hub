import { scryptSync, createCipheriv, createDecipheriv } from "crypto";
import { AES_IV_KEY, AES_IV_SALT, AES_SECRET_KEY, AES_SECRET_SALT } from "src/Config/env";

const aesEncrypt = (data:string) => {
  const iv = scryptSync(AES_IV_KEY, AES_IV_SALT, 16);
  const key = scryptSync(
    AES_SECRET_KEY,
    AES_SECRET_SALT,
    32
  );
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const aesDecrypt = (data:string) => {
  const iv = scryptSync(AES_IV_KEY, AES_IV_SALT, 16);
  const key = scryptSync(
    AES_SECRET_KEY,
    AES_SECRET_SALT,
    32
  );
  const decipher = createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(data, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export  { aesDecrypt, aesEncrypt };
