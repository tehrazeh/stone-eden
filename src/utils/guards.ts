import { Info } from "../Redux/info/types";

export function isInfo(infoObj: {} | Info): infoObj is Info {
  return (infoObj as Info).classes !== undefined || "classes" in infoObj;
}
