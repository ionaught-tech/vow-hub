# VOW HUB

Share APIs contracts, TypeScript types, and much more across projects.

## Examples

### Server

```typescript
interface CustomResponse<T, E = unknown> extends Response {
  success: (message: string, data: T) => void;
}

type Handler<T> = (req: Request, res: CustomResponse<T>) => void;

const handler: Handler<Users> = (_req, res) => {
  const users = [{ name: "Kevin" }];
  res.success("Ok", users);
};

router.get("/api", handler);
```

### Client

```typescript
const getUser = async () => {
  const res: UsersResponse = await fetch("/api").then((res) => res.json());
  console.log(res.data);
};
```

### API Contract

```typescript
type APIResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

type User = {
  name: string;
};

export type Users = User[];

export type UsersResponse = APIResponse<Users>;
```

## Contributing

Contributions are welcome!
If you have any suggestions or find any issues, please create an issue or a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ionaught-tech/vow-hub/blob/main/LICENSE) file for details.
