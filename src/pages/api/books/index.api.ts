import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Books(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    const books = await prisma.book.findMany();

    if(!books) return res.status(405).end();

    return res.status(200).json(books);
}