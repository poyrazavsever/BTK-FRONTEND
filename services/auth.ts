import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    type: 'normal' | 'developer' | 'investor';
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  category: 'user' | 'developer' | 'investor';
  code?: string;
  devExtra?: {
    cv?: File;
    idFront?: File;
  };
  investorExtra?: {
    cardNumber: string;
    cardName: string;
    cardExpiry: string;
    cardCvc: string;
  };
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  },

  async register(data: RegisterData): Promise<LoginResponse> {
    // Eğer developer veya investor ise ve dosyalar varsa
    if ((data.category === 'developer' && data.devExtra) || 
        (data.category === 'investor' && data.investorExtra)) {
      
      const formData = new FormData();
      
      // Normal verileri ekle
      Object.keys(data).forEach(key => {
        if (key !== 'devExtra' && key !== 'investorExtra') {
          formData.append(key, data[key as keyof RegisterData] as string);
        }
      });

      // Developer dosyalarını ekle
      if (data.category === 'developer' && data.devExtra) {
        if (data.devExtra.cv) {
          formData.append('cv', data.devExtra.cv);
        }
        if (data.devExtra.idFront) {
          formData.append('idFront', data.devExtra.idFront);
        }
      }

      // Investor kart bilgilerini ekle
      if (data.category === 'investor' && data.investorExtra) {
        Object.keys(data.investorExtra).forEach(key => {
          formData.append(key, data.investorExtra![key as keyof typeof data.investorExtra]);
        });
      }

      const response = await axios.post(`${API_URL}/auth/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    }

    // Normal kullanıcı kaydı
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  },

  async sendVerificationCode(email: string): Promise<void> {
    await axios.post(`${API_URL}/auth/send-code`, { email });
  },

  async verifyEmail(email: string, code: string): Promise<void> {
    await axios.post(`${API_URL}/auth/verify-email`, { email, code });
  },
  
  setToken(token: string): void {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },
  
  removeToken(): void {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  },
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
};
