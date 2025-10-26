import { type HttpClientAdapter } from "../adapter";

export class AuthRepository {
  private readonly baseUrl: string = "/api/auth";

  constructor(private adapter: HttpClientAdapter) {
  }

  // User login
  async login(
    credentials: { email: string; password: string }
  ): Promise<{
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
    };
  }> {
    const response = await this.adapter.post<{
      token: string;
      user: {
        id: string;
        email: string;
        name: string;
      };
    }>(`${this.baseUrl}/login`, credentials);
    return response.data.data;
  }

  // User registration
  async register(
    data: { email: string; password: string; name: string }
  ): Promise<{
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
    };
  }> {
    const response = await this.adapter.post<{
      token: string;
      user: {
        id: string;
        email: string;
        name: string;
      };
    }>(`${this.baseUrl}/register`, data);
    return response.data.data;
  }

  // Request password reset
  async requestPasswordReset(
    data: { email: string }
  ): Promise<{ message: string }> {
    const response = await this.adapter.post<{ message: string }>(
      `${this.baseUrl}/forgot-password`,
      data
    );
    return response.data.data;
  }

  // Reset password with token
  async resetPassword(
    token: string,
    newPassword: string
  ): Promise<{ message: string }> {
    const response = await this.adapter.post<{ message: string }>(
      `${this.baseUrl}/reset-password`,
      {
        token,
        newPassword,
      }
    );
    return response.data.data;
  }

  // Verify email with token
  async verifyEmail(
    data: { token: string }
  ): Promise<{ message: string }> {
    const response = await this.adapter.post<{ message: string }>(
      `${this.baseUrl}/verify-email`,
      data
    );
    return response.data.data;
  }

  // Refresh auth token
  async refreshToken(
    refreshToken: string
  ): Promise<{ token: string }> {
    const response = await this.adapter.post<{ token: string }>(
      `${this.baseUrl}/refresh-token`,
      {
        refreshToken,
      }
    );
    return response.data.data;
  }

  async validateToken(
    token: string
  ): Promise<{ message: string }> {
    const response = await this.adapter.post<{ message: string }>(
      `${this.baseUrl}/validate-token`,
      {
        token,
      }
    );
    return response.data.data;
  }
}
