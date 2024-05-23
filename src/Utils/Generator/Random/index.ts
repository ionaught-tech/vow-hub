import { randomBytes } from "crypto";

export const generateId = () =>
  Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

export const getRandomInt = (min:number, max:number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomString = (size = 64) => {
  return randomBytes(size).toString("base64url").slice(0, size);
};

export const generateOtp = () => getRandomInt(100000, 999999);

const RandomGenerators = {
  generateId,
  getRandomInt,
  generateOtp,
  randomString,
};

export default RandomGenerators;


