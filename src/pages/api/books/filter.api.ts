import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function filter(res: NextApiResponse, req: NextApiRequest) {
    if(req.method !== 'GET') {
        res.status(405).end();
    }

    const { filter } = req.query;

    const allFilters = String(filter);

    const filters = prisma.category
    
}