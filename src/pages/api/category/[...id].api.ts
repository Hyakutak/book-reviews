import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function filter(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    const { filter } = req.query;

    const idCategory = String(filter);

    const category = await prisma.category.findUnique({
        where: {
            id: idCategory
        }
    });
    
    if(!category) return res.status(405).end();

    return res.status(200).json(category);

}