import { calixteLao } from "@/app/utils/data";
import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(calixteLao);
}
