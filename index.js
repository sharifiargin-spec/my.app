const { GoogleGenerativeAI } = require("@google/generative-ai");

// کلید گوگل خودت رو اینجا بذار
const genAI = new GoogleGenerativeAI("AQ.Ab8RN6L-zm-MJ_vmyNXx-gGjoXt6o6-2TXVPrtOXBhxMRWzjyA");

async function askGemini() {
  try {
    console.log("در حال ارسال پیام به گوگل (Gemini)...");
    
    const model = genAI.getGenerativeModel({ model: "gemini-3.8-flash" });
    const prompt = "سلام! یک جمله انگیزشی برای برنامه‌نویسی بگو.";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("پاسخ گوگل:");
    console.log(text);
    
  } catch (error) {
    console.error("خطا در اتصال به گوگل:", error.message);
  }
}

askGemini();