export interface User {
    id: 1
    avatar: string
    email: string
    firstName: string
    lastName: string
}

export interface Users {
    [id: number]: User
}
