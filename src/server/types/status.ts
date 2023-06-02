export interface Ok<T> {
    status: 200
    json: T
}

export interface NotFound<T> {
    status: 404
    json: T
}

export interface UnprocessableEntity<T> {
    status: 422
    json: T
}

export interface InternalServerError<T> {
    status: 500
    json: T
}
