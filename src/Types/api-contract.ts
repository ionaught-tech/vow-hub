
type APIResponse<T> = {
    status: boolean;
    message: string;
    data: T
}

type User = {
    name: string;
    age: number
}

export type Users = User[];

export type UsersResponse = APIResponse<Users>;