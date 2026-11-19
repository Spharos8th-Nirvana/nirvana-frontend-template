import "server-only";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function getBackendBaseUrl(): string {
  const baseUrl = process.env.BACKEND_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("BACKEND_API_BASE_URL is not configured.");
  }

  return baseUrl;
}

export async function serverApiRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const url = new URL(path, getBackendBaseUrl());

  const headers = new Headers(init.headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  const response = await fetch(url, {
    ...init,
    cache: init.cache ?? "no-store",
    headers,
  });

  if (!response.ok) {
    throw new ApiError("Backend API request failed.", response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
