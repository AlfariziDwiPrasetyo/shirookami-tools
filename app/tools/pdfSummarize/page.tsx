"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Skeleton } from "@/components/ui/skeleton";
import { generateGeminiText, getPdf } from "@/app/actions";

function page() {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [text, setText] = useState<string>("Result");
  const submitHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      const arrayBuffer = await file.arrayBuffer();
      const dataBuffer = Buffer.from(arrayBuffer);
      const pdfText = await getPdf(JSON.parse(JSON.stringify(dataBuffer)));
      const result = await generateGeminiText(pdfText);
      setText(result);
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Copied to clipboard!");
      toast.success("Copied to cliboard!");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-4 px-5">
      <h1 className="text-3xl text-center font-bold">Summarize PDF 📚</h1>
      <p className="text-sm text-center font-semibold">
        Turn Lengthy PDFs into Concise Summaries Instantly with AI-Powered
        Precision
      </p>
      <Input
        type="file"
        accept="application/pdf"
        name="pdfFile"
        className="max-w-lg"
        onChange={submitHandler}
        disabled={loading == null ? false : loading}
      />

      {loading === null ? (
        <p className="text-xs text-muted-foreground">
          Select a PDF file to start generating...
        </p>
      ) : loading ? (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[500px] w-[500px] max-w-xl rounded-md" />
        </div>
      ) : (
        <Card className="relative flex max-w-xl flex-col bg-white py-2 px-5 mt-5 rounded shadow-md">
          <div className="flex justify-end p-3">
            <button onClick={handleCopy} title="Copy to clipboard">
              <Copy size={15} />
            </button>
          </div>
          <CardContent className="flex justify-center">
            <MarkdownRenderer content={text} />
          </CardContent>
        </Card>
      )}
      <ToastContainer />
    </div>
  );
}

export default page;
