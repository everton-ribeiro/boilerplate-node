export type UseCase<P, R> = {
	execute: (param: P) => Promise<R>;
};

export type Controller<Req, Res> = {
	handle: (request: Req, response: Res) => void;
};

export type Pagination = {
	page: string;
	limit: string;
};

export type Order = {
	order?: string | undefined;
	orderby?: string | undefined;
};