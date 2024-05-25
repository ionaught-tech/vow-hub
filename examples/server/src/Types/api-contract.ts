
type APIResponse<T> = {
    status: boolean;
    message: string;
    data: T
}

type User = {
    name: string;
}

export type Users = User[];
//api/v1
export type UsersResponse = APIResponse<Users>;