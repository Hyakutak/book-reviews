import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Ratings(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    const idBook = req.query;

    const ratings = await prisma.rating.findMany({
        where: {
            book_id: idBook
        }
    });

    if(!ratings) return res.status(405).end();

    return res.status(200).json(ratings);
}