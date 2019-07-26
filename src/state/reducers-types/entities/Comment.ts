export interface Comment {
    id: number
    name: string
    year: number
    color: string
    pantoneValue: string
}

export interface Comments {
    [id: number]: Comment
}
