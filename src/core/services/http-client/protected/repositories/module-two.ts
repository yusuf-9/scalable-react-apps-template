import { type HttpClientAdapter } from "../adapter";
import { type ModuleTwoItem } from "@/core/types/module-two";

export class ModuleTwoRepository {
  private readonly baseUrl = "/api/module-two";

  constructor(private adapter: HttpClientAdapter) {}

  // Get all items with pagination
  async getAll(page: number = 1, limit: number = 10): Promise<{ items: ModuleTwoItem[]; total: number; page: number; limit: number }> {
    const response = await this.adapter.get<{ items: ModuleTwoItem[]; total: number; page: number; limit: number }>(
      `${this.baseUrl}?page=${page}&limit=${limit}`
    );
    return response.data.data;
  }

  // Get item by ID
  async getById(id: string): Promise<ModuleTwoItem> {
    const response = await this.adapter.get<ModuleTwoItem>(`${this.baseUrl}/${id}`);
    return response.data.data;
  }

  // Create new item
  async create(data: { title: string; content: string; category: string; tags?: string[]; isPublished?: boolean }): Promise<ModuleTwoItem> {
    const response = await this.adapter.post<ModuleTwoItem>(this.baseUrl, data);
    return response.data.data;
  }

  // Update item by ID
  async update(id: string, data: { title?: string; content?: string; category?: string; tags?: string[]; isPublished?: boolean }): Promise<ModuleTwoItem> {
    const response = await this.adapter.put<ModuleTwoItem>(`${this.baseUrl}/${id}`, data);
    return response.data.data;
  }

  // Delete item by ID
  async delete(id: string): Promise<void> {
    await this.adapter.delete(`${this.baseUrl}/${id}`);
  }
}

