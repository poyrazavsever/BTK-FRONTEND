import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface Idea {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  tags: string[];
  likes: number;
  participants: number;
}

export const ideasService = {
  async getMyIdeas() {
    const response = await axios.get(`${API_URL}/ideas/my`);
    return response.data;
  },

  async deleteIdea(id: number) {
    await axios.delete(`${API_URL}/ideas/${id}`);
  },

  async updateIdea(id: number, data: Partial<Idea>) {
    const response = await axios.put(`${API_URL}/ideas/${id}`, data);
    return response.data;
  },

  async createIdea(data: Omit<Idea, 'id' | 'user' | 'likes' | 'participants'>) {
    const response = await axios.post(`${API_URL}/ideas`, data);
    return response.data;
  }
};
