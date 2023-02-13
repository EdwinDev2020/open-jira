interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string,
    status: string,
    createdAt: number
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'pending: Aute quis laboris ad minim minim consequat veniam aliquip do ex in laborum.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'in-progress: Mollit aliqua velit aliqua incididunt.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'finished: Consequat eu incididunt occaecat do incididunt ipsum id anim labore quis.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}