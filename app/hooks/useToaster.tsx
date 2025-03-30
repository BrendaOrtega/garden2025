import { useRef, type ReactNode } from "react";

const sleep = (s: number) => new Promise((r) => setTimeout(r, s * 1000));

export const useToast = () => {
  const concurrencyControl = useRef({ error: 0, success: 0 });

  const setInitial = (toast) => {
    toast.style.transition = "all .3s ease";
    toast.style.position = "fixed";
    toast.style.top = "80px";
    toast.style.right = "40px";
    toast.style.transform = "translateY(20px)";
    toast.style.opacity = 0;
  };

  const setAnimate = (toast: HTMLElement) => {
    toast.style.transform = "translateY(0px)";
    toast.style.opacity = "1";
  };

  const setExit = (toast: HTMLElement) => {
    toast.style.transform = "translateY(-20px)";
    toast.style.opacity = "0";
  };

  type ToasterType = {
    color?: "green" | "red";
    text: ReactNode;
    icon?: ReactNode;
  };
  const success = async ({
    text,
    icon = "✅",
    color = "green",
  }: ToasterType) => {
    const textColor = color === "red" ? "text-red-100" : "text-brand-900";
    const bgColor = color === "red" ? "bg-red-800" : "bg-white";
    const toast = document.createElement("section");
    setInitial(toast);
    toast.innerHTML = `
    <div class="px-4 py-4 h-12 md:h-16 ${bgColor} ${textColor} rounded-full flex items-center justify-center " >
    <div class="flex items-center gap-1"><span class="w-fit text-2xl flex items-center justify-center rounded-full">${icon}</span>
    <p class="text-lg ${textColor} "> ${text}</p></div>
    </div>
    `;
    document.body.appendChild(toast);
    await sleep(0.01);
    setAnimate(toast);
    updateConcurrencyControls(color === "green" ? "sucess" : "error", 1);
    setTimeout(async () => {
      setExit(toast);
      await sleep(0.3);
      toast.remove();
      updateConcurrencyControls(color === "green" ? "sucess" : "error", -1);
    }, 3000);
  };

  const updateConcurrencyControls = (
    type: string = "success",
    number: number = 1
  ) => {
    concurrencyControl.current = {
      ...concurrencyControl.current,
      error: concurrencyControl.current.error + number,
    };
  };

  const error = ({ text }: ToasterType) => {
    if (concurrencyControl.current.error > 0) return;
    success({ text, icon: "❌", color: "red" });
  };

  //@todo: warning e info
  const warning = ({ text }: ToasterType) => {
    if (concurrencyControl.current.error > 0) return;
    success({ text, icon: "❌", color: "red" });
  };

  return {
    success,
    error,
  };
};
