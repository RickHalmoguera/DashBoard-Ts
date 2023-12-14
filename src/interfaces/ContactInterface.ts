export interface ContactInterface{
    photo: string
    name: string
    email: string
    phone: string
    title: string
    text: string
    is_archived: boolean
    date: string
    id: string
}

export interface ContactSliceInitialStateInterface{
    data: ContactInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}