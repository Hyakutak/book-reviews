import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Ratings(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    const { id_book } = req.query;

    if(!id_book) {
        return res.status(400).json({ message: 'Id book not provided.' })
    }

    const referenceBook = String(id_book);

    const ratings = await prisma.rating.findMany({
        where: {
            book_id: referenceBook
        }
    });

    if(!ratings) return res.status(405).end();

    return res.status(200).json(ratings);
}