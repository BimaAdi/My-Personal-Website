export interface Ok<T> {
    status: 200
    json: T
    response: Response
}

export interface UnprocessableEntity<T> {
    status: 422
    json: T
    response: Response
}

export interface InternalServerError<T> {
    status: 500
    json: T
    response: Response
}
