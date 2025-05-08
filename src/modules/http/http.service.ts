import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpMethod } from './types/http-method.type';

@Injectable()
export class HttpService {
  public async request<T>(url: string, method: HttpMethod): Promise<T> {
    const config: RequestInit = { method };

    const response = await fetch(url, config).catch((err) => {
      throw new HttpException(
        {
          status: HttpStatus.BAD_GATEWAY,
          message: `Network error during fetch: ${err.message || err}`,
        },
        HttpStatus.BAD_GATEWAY,
      );
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new HttpException(
        {
          status: response.status,
          message: `Request to ${url} failed with status ${response.statusText}`,
          error: errorBody,
        },
        response.status as HttpStatus,
      );
    }

    return response.json();
  }
}
