import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function category(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).end();
    }

    const category = await prisma.category.findMany();
    
    if(!category) return res.status(405).end();

    return res.status(200).json(category);
}