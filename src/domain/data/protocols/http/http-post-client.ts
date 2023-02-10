export type HttpPostParams = {
  url: string
  body: string
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>
}
