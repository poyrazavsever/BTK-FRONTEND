import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  category: "user" | "developer" | "investor";
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

export const authApi = {
  register: async (data: RegisterRequest) => {
    try {
      // Eğer developer ve dosyalar varsa, FormData kullan
      if (data.category === "developer" && data.devExtra) {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        if (data.phone) formData.append('phone', data.phone);
        formData.append('category', data.category);
        
        if (data.devExtra.cv) formData.append('cv', data.devExtra.cv);
        if (data.devExtra.idFront) formData.append('idFront', data.devExtra.idFront);

        const response = await axios.post(`${BASE_URL}/auth/register`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data;
      }

      // Normal JSON request
      const response = await axios.post(`${BASE_URL}/auth/register`, data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Kayıt işlemi başarısız oldu');
      }
      throw new Error('Sunucuya bağlanılamadı');
    }
  },

  verifyEmail: async (email: string, code: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/verify-email`, {
        email,
        code
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Doğrulama başarısız oldu');
      }
      throw new Error('Sunucuya bağlanılamadı');
    }
  },

  sendVerificationCode: async (email: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/send-verification`, {
        email
      });
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Kod gönderimi başarısız oldu');
      }
      throw new Error('Sunucuya bağlanılamadı');
    }
  }
};
