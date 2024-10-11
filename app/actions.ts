"use server";
import fs from "fs";
import pdf from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getPdf(dataBuffer: any) {
  try {
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw error;
  }
}

export async function generateGeminiText(pdfText: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("The API key is not defined in the environment variables.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Turn Lengthy PDFs into Concise but detail summaries and the following text content in a structured, organized format, the result should be markdown, if there is a table make it like list

  
  here the text : 
  ${pdfText}
  `;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}
