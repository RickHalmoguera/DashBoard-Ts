export interface CommentsInterface{
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

export interface CommentsSliceInitialStateInterface{
    data: CommentsInterface[],
    modalId:string| undefined, 
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}