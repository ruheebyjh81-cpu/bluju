import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, RefreshCw, CornerDownLeft } from "lucide-react";
import { ChatMessage } from "../types";

export const AIWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "안녕하세요! 김주희 메이커의 AI 페르소나입니다. 🐰\n\n주희 님의 강점, AI 활용 역량, 3D 오목게임을 비롯한 여러 프로젝트, 또는 평소 커피 취향이나 가치관에 대해 편안하게 질문해 주세요!"
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const suggestions = [
    "어떤 프로젝트들을 했나요? 💡",
    "김주희 님의 가치관은? 🌱",
    "실행력이 강한 이유가 있나요? 🔥",
    "자주 쓰는 AI는 무엇인가요? 🤖"
  ];

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", text: textToSend };
    setChatHistory((prev) => [...prev, userMsg]);
    setMessage("");
    setIsLoading(true);

    try {
      // Format history (exclude the latest message since we send it separately or in array)
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory
        }),
      });

      if (!res.ok) {
        throw new Error("서버와의 통신에 실패했습니다.");
      }

      const data = await res.json();
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: data.text || "죄송해요, 답변을 생성하지 못했어요." }
      ]);
    } catch (err) {
      console.error(err);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "model",
          text: "죄송해요! 주희 님의 AI 연결 도중에 잠시 통신 에러가 발생했습니다. 아래 이메일로 직접 궁금한 점을 공유해 주시면 주희 님이 친절히 답변드릴 거예요! 💌 (ruheebyjh81@gmail.com)"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setChatHistory([
      {
        role: "model",
        text: "역사를 다시 지우고 깨끗하게 이야기를 시작해요. 어떤 정보든 물어보세요! 😊"
      }
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        id="ai-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 px-5 py-3.5 bg-editorial-bg dark:bg-zinc-900 text-editorial-ink dark:text-zinc-100 font-mono text-xs font-bold uppercase tracking-widest border border-editorial-ink dark:border-zinc-300 hover:bg-editorial-ink hover:text-editorial-bg dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-all duration-200 cursor-pointer shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] dark:shadow-[4px_4px_0px_0px_rgba(229,229,224,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] dark:active:shadow-[2px_2px_0px_0px_rgba(229,229,224,1)]"
      >
        <Bot size={14} />
        <span>김주희 AI _ 대화하기</span>
      </button>

      {/* Drawer / Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-24 sm:left-auto sm:right-8 w-auto sm:w-[420px] h-[550px] bg-editorial-bg/95 dark:bg-zinc-950/95 backdrop-blur-md rounded-none border-2 border-editorial-ink dark:border-zinc-300 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] dark:shadow-[8px_8px_0px_0px_rgba(229,229,224,1)] z-50 flex flex-col overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="px-5 py-4 bg-editorial-bg dark:bg-zinc-900 border-b-2 border-editorial-ink dark:border-zinc-300 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-editorial-ink text-editorial-bg dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-mono text-xs font-bold">
                AI
              </div>
              <div>
                <h3 className="font-serif font-bold text-editorial-ink dark:text-zinc-100 text-base flex items-center gap-1.5 italic">
                  김주희 AI 페르소나
                  <span className="text-[9px] bg-editorial-accent/20 text-editorial-accent dark:text-editorial-accent border border-editorial-accent/30 px-1.5 py-0.2 font-mono uppercase font-bold tracking-wider">온라인</span>
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">제작 에디션: 2026 / 01</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleReset}
                title="대화 초기화"
                className="p-1.5 border border-transparent hover:border-editorial-ink dark:hover:border-zinc-300 text-zinc-500 dark:text-zinc-400 hover:text-editorial-ink dark:hover:text-zinc-100 transition duration-150"
              >
                <RefreshCw size={12} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 border border-transparent hover:border-editorial-ink dark:hover:border-zinc-300 text-zinc-500 dark:text-zinc-400 hover:text-editorial-ink dark:hover:text-zinc-100 transition duration-150"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Chat Bubble Area */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-editorial-bg/30 dark:bg-zinc-950/30">
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                {msg.role === "model" && (
                  <div className="w-6 h-6 rounded-none bg-editorial-ink text-editorial-bg dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center shrink-0 self-start text-xs font-semibold">
                    🐰
                  </div>
                )}
                <div
                  className={`px-4 py-2.5 text-sm whitespace-pre-wrap leading-relaxed border ${
                    msg.role === "user"
                      ? "bg-editorial-ink dark:bg-zinc-100 text-editorial-bg dark:text-zinc-950 border-editorial-ink dark:border-zinc-300 font-sans"
                      : "bg-white dark:bg-zinc-900 text-editorial-ink dark:text-zinc-100 border-zinc-200 dark:border-zinc-800 font-sans"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Loading bubble */}
            {isLoading && (
              <div className="flex gap-2.5 max-w-[80%] mr-auto">
                <div className="w-6 h-6 rounded-none bg-editorial-ink text-editorial-bg dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center shrink-0 self-start text-xs font-semibold">
                  🐰
                </div>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2.5 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-editorial-ink dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-1.5 w-1.5 bg-editorial-ink dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-1.5 w-1.5 bg-editorial-ink dark:bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick suggestions & Input */}
          <div className="p-4 bg-editorial-bg dark:bg-zinc-900 border-t-2 border-editorial-ink dark:border-zinc-300 space-y-3">
            {/* suggestions */}
            {chatHistory.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s)}
                    className="text-[10px] font-mono uppercase bg-white dark:bg-zinc-850 hover:bg-editorial-ink dark:hover:bg-zinc-100 hover:text-editorial-bg dark:hover:text-zinc-900 text-editorial-ink dark:text-zinc-300 px-2.5 py-1.5 border border-zinc-300 dark:border-zinc-700 transition duration-150 shadow-sm text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(message);
              }}
              className="relative flex items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="주희 님에 대해 물어보세요..."
                disabled={isLoading}
                className="w-full pr-12 pl-4 py-2.5 bg-white dark:bg-zinc-950 border border-editorial-ink dark:border-zinc-700 rounded-none text-sm focus:outline-none focus:ring-1 focus:ring-editorial-accent text-editorial-ink dark:text-zinc-100 placeholder-zinc-400 font-sans"
              />
              <button
                type="submit"
                disabled={!message.trim() || isLoading}
                className="absolute right-2 p-1.5 bg-editorial-ink dark:bg-zinc-100 text-editorial-bg dark:text-zinc-900 border border-transparent disabled:opacity-40 transition duration-150"
              >
                <Send size={12} />
              </button>
            </form>
            <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 px-1 uppercase tracking-wider">
              <span>Gemini 3.5 Flash 기반</span>
              <span className="flex items-center gap-1">
                전송 <CornerDownLeft size={8} />
              </span>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
