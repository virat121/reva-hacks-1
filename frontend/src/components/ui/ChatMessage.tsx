import { motion } from "framer-motion";
import React from "react";
import Markdown from "react-markdown";

interface ChatMessageProps {
  name: string;
  time: string;
  content: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  name,
  time,
  content,
}) => {
  const isFromChatbot = name === "Chatbot";
  const bgColor = isFromChatbot ? "bg-teal-100" : "bg-blue-100"; // Updated background colors

  return (
    <motion.div
      className={`flex items-start gap-2.5 p-4 mb-2 rounded-lg ${bgColor} shadow-md`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <img
        className="w-8 h-8 rounded-full border-gray-500"
        src={isFromChatbot ? "/logo.png" : "/user.png"}
        alt={isFromChatbot ? "Chatbot Logo" : "User Avatar"}
      />
      <div className="flex flex-col w-full max-w leading-1.5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
          <span className="text-sm font-semibold text-gray-900">
            {name}
          </span>
          <span className="text-xs font-normal text-gray-500">
            {time}
          </span>
        </div>
        <Markdown className="markdown text-gray-700">{content}</Markdown>
      </div>
    </motion.div>
  );
};
