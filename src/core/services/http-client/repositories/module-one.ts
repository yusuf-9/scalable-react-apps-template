import { type HttpClientAdapter } from "../adapter";
import { type ModuleOneItem } from "../../types/module-one";

export class ModuleOneRepository {
  private readonly baseUrl = "/api/module-one";

  constructor(private adapter: HttpClientAdapter) {}

  // Get all items with pagination
  async getAll(page: number = 1, limit: number = 10): Promise<{ items: ModuleOneItem[]; total: number; page: number; limit: number }> {
    const response = await this.adapter.get<{ items: ModuleOneItem[]; total: number; page: number; limit: number }>(
      `${this.baseUrl}?page=${page}&limit=${limit}`
    );
    return response.data;
  }

  // Get item by ID
  async getById(id: string): Promise<ModuleOneItem> {
    const response = await this.adapter.get<ModuleOneItem>(`${this.baseUrl}/${id}`);
    return response.data;
  }

  // Create new item
  async create(data: { name: string; description: string }): Promise<ModuleOneItem> {
    const response = await this.adapter.post<ModuleOneItem>(this.baseUrl, data);
    return response.data;
  }

  // Update item by ID
  async update(id: string, data: { name?: string; description?: string }): Promise<ModuleOneItem> {
    const response = await this.adapter.put<ModuleOneItem>(`${this.baseUrl}/${id}`, data);
    return response.data;
  }

  // Delete item by ID
  async delete(id: string): Promise<void> {
    await this.adapter.delete(`${this.baseUrl}/${id}`);
  }
}
