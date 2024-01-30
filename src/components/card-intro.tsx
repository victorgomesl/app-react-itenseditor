'use client'
import React, { useState, useRef } from 'react';
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from './ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CardIntro() {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.name === "pangya_jp.iff") {
        setFile(selectedFile);
      } else {
        toast.error("O nome do arquivo deve ser pangya_jp.iff");
        setFile(null);
      }
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSend = () => {
    if (!file) {
      toast.error("Você precisa carregar o arquivo pangya_jp.iff antes de enviar.");
      return;
    }
    // Processar o arquivo aqui e, em seguida, redirecionar
    // ...
    window.location.href = '/editor';
  };

  return (
    <div className="mx-auto max-w-[calc(100vw-100px)]">
      <Card className="w-[400px] h-[300px] flex flex-col justify-center items-center">
        <CardTitle>Editor de itens</CardTitle>
        <CardDescription className="mt-2 mb-4">Faça upload do seu arquivo pangya_jp.iff</CardDescription>
        <div className="flex justify-center items-center">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
          />
          <Button variant={'outline'} onClick={handleBrowseClick}>Procurar</Button>
          <Button className="ml-2" onClick={handleSend} disabled={!file}>
            Enviar
          </Button>
        </div>
      </Card>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    
    </div>
  );
}

