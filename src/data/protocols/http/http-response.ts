export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  forbidden = 403,
  notFound = 404,
  unauthorized = 401,
  serverError = 500
}

export type HttpResponse = {
  statusCode: number
}
