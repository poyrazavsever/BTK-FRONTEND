import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface NotificationProps {
  type: "application" | "task" | "auth" | "friend";
  title: string;
  message: string;
  time: string;
  read?: boolean;
  actionUrl?: string;
}

const mockNotifications: NotificationProps[] = [
  {
    type: "application",
    title: "Yeni Başvuru",
    message: "Zeynep Kara, 'E-ticaret Platformu' projenize başvurdu",
    time: "5 dakika önce",
    read: false,
    actionUrl: "/panel/projects/0",
  },
  {
    type: "task",
    title: "Yeni Görev",
    message: "Backend API entegrasyonu görevi size atandı",
    time: "1 saat önce",
    read: false,
    actionUrl: "/panel/projects/123",
  },
  {
    type: "auth",
    title: "E-posta Doğrulandı",
    message: "E-posta adresiniz başarıyla doğrulandı",
    time: "2 saat önce",
    read: true,
  },
  {
    type: "friend",
    title: "Arkadaşlık İsteği",
    message: "Ali Yılmaz size arkadaşlık isteği gönderdi",
    time: "3 saat önce",
    read: false,
    actionUrl: "/profile/ali-yilmaz",
  },
];

const NotificationCard: React.FC<NotificationProps> = ({
  type,
  title,
  message,
  time,
  read,
  actionUrl,
}) => {
  const getNotificationStyle = () => {
    switch (type) {
      case "application":
        return {
          icon: "mdi:briefcase-outline",
          color: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-200",
        };
      case "task":
        return {
          icon: "mdi:clipboard-text-outline",
          color: "text-purple-600",
          bg: "bg-purple-50",
          border: "border-purple-200",
        };
      case "auth":
        return {
          icon: "mdi:shield-check-outline",
          color: "text-green-600",
          bg: "bg-green-50",
          border: "border-green-200",
        };
      case "friend":
        return {
          icon: "mdi:account-outline",
          color: "text-amber-600",
          bg: "bg-amber-50",
          border: "border-amber-200",
        };
    }
  };

  const style = getNotificationStyle();

  return (
    <motion.div
      className={`flex items-start gap-4 p-4 rounded-lg border ${
        style.bg
      } ${style.border} ${!read && "ring-2 ring-primary/20"}`}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`${style.color} bg-white p-2 rounded-full border ${style.border}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Icon icon={style.icon} width={24} height={24} />
      </motion.div>
      <motion.div 
        className="flex-1 min-w-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}>
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className={`font-semibold ${style.color}`}>{title}</h3>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {time}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{message}</p>
        {actionUrl && (
          <a
            href={actionUrl}
            className={`inline-flex items-center text-sm font-medium ${style.color} hover:opacity-80`}
          >
            Detayları Görüntüle
            <Icon icon="mdi:arrow-right" className="ml-1" />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Notifications: React.FC = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="text-2xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Bildirimler
        </motion.h1>
        <motion.button 
          className="text-sm text-primary font-medium hover:opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Tümünü Okundu İşaretle
        </motion.button>
      </motion.div>
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {mockNotifications.map((notification, index) => (
          <NotificationCard 
            key={index} 
            {...notification}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Notifications;