import { NextApiRequest, NextApiResponse } from "next"
import { ITeaItem } from "../../../types/ITeaItem"
import { teaData } from "../data/teaData"

export default function handler(req: NextApiRequest, res: NextApiResponse<ITeaItem>) {
    const { id } = req.query

    const data = teaData.find(item => item.id === id)
    data ? res.status(200).json(data) : res.status(400).json(teaData[0])
}