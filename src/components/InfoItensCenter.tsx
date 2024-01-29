"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from "@/components/ui/textarea";

export function InfoItensCenter() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [precoDesconto, setPrecoDesconto] = useState('');
    const [descricao, setDescricao] = useState('');

    const [isNomeToastShown, setIsNomeToastShown] = useState(false);
    const [isPrecoToastShown, setIsPrecoToastShown] = useState(false);
    const [isPrecoDescontoToastShown, setIsPrecoDescontoToastShown] = useState(false);
    const [isDescricaoToastShown, setIsDescricaoToastShown] = useState(false);

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoNome = event.target.value;
        setNome(novoNome);

        if (novoNome.length > 64 && !isNomeToastShown) {
            toast.error("O campo 'Nome' permite no máximo 64 caracteres. Por favor, reduza o tamanho do seu texto.");
            setIsNomeToastShown(true);
        } else if (novoNome.length <= 64 && isNomeToastShown) {
            setIsNomeToastShown(false);
        }
    };

    const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoPreco = event.target.value;
        setPreco(novoPreco);

        if (novoPreco.length > 10 && !isPrecoToastShown) {
            toast.error("O campo 'Preço' permite no máximo 10 caracteres. Por favor, reduza o tamanho do seu texto.");
            setIsPrecoToastShown(true);
        } else if (novoPreco.length <= 10 && isPrecoToastShown) {
            setIsPrecoToastShown(false);
        }
    };

    const handlePrecoDescontoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const novoPrecoDesconto = event.target.value;
        setPrecoDesconto(novoPrecoDesconto);

        if (novoPrecoDesconto.length > 10 && !isPrecoDescontoToastShown) {
            toast.error("O campo 'Preço (Desconto)' permite no máximo 10 caracteres. Por favor, reduza o tamanho do seu texto.");
            setIsPrecoDescontoToastShown(true);
        } else if (novoPrecoDesconto.length <= 10 && isPrecoDescontoToastShown) {
            setIsPrecoDescontoToastShown(false);
        }
    };

    const handleDescricaoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const novaDescricao = event.target.value;
        setDescricao(novaDescricao);

        if (novaDescricao.length > 512 && !isDescricaoToastShown) {
            toast.error("O campo 'Descrição' permite no máximo 512 caracteres. Por favor, reduza o tamanho do seu texto.");
            setIsDescricaoToastShown(true);
        } else if (novaDescricao.length <= 512 && isDescricaoToastShown) {
            setIsDescricaoToastShown(false);
        }
    }

    return (

        <div className="flex flex-col w-full">
            <div className="flex w-full">
                <div className="flex flex-col w-full gap-2 mr-4">
                    <h3 className="text-sm font-semibold">Nome</h3>
                    <Input className="w-full" value={nome} onChange={handleNomeChange}></Input>





            <div className="flex justify-start gap-4">
                <div className="flex items-center gap-2">
                    <Checkbox id="dispnoshop" />
                    <label htmlFor="dispnoshop" className="text-sm">Disponível no shop</label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="somenteexpo" /> 
                <label htmlFor="somenteexpo" className="text-sm">Somente exposição</label>
                </div>
            </div>


            <div className="flex w-full">
                <div className="flex flex-col w-full gap-1 mr-4">
                    <h3 className="text-sm font-semibold">Preço</h3>
                    <Input className="w-full" value={preco} onChange={handlePrecoChange}></Input>
                </div>
                <div className="flex w-[calc(100% / 3)] gap-4 ">
                    <Select>
                        <SelectTrigger className="w-[100px] mt-6">
                            <SelectValue placeholder="Pangs" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectItem value="pangs">Pangs</SelectItem>
                            <SelectItem value="cookies">Cookies</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex w-full">
            <div className="flex flex-col w-full gap-1">
                    <h3 className="text-sm font-semibold">Preço (Desconto)</h3>
                    <Input className="w-full" value={precoDesconto} onChange={handlePrecoDescontoChange}></Input>
                </div>
            </div>

            <div className="flex w-full">
            <div className="flex flex-col w-full gap-1 mr-4">
                    <h3 className="text-sm font-semibold">Level</h3>
                    <Select>
                        <SelectTrigger className="w-[255px]">
                            <SelectValue placeholder="Rookie F" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectItem value="rookief">Rookie F</SelectItem>
                            <SelectItem value="rookiee">Rookie E</SelectItem>
                            <SelectItem value="rookied">Rookie D</SelectItem>
                            <SelectItem value="rookiec">Rookie C</SelectItem>
                            <SelectItem value="rookieb">Rookie B</SelectItem>
                            <SelectItem value="rookiea">Rookie A</SelectItem>
                            <SelectItem value="begginerF">Begginer F</SelectItem>
                            <SelectItem value="begginere">Begginer E</SelectItem>
                            <SelectItem value="begginerd">Begginer D</SelectItem>
                            <SelectItem value="begginerc">Begginer C</SelectItem>
                            <SelectItem value="begginerb">Begginer B</SelectItem>
                            <SelectItem value="begginera">Begginer A</SelectItem>
                            <SelectItem value="juniorf">Junior F</SelectItem>
                            <SelectItem value="juniore">Junior E</SelectItem>
                            <SelectItem value="juniord">Junior D</SelectItem>
                            <SelectItem value="juniorc">Junior C</SelectItem>
                            <SelectItem value="juniorb">Junior B</SelectItem>
                            <SelectItem value="juniora">Junior A</SelectItem>
                            <SelectItem value="seniore">Senior E</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                    
                </div>
                <div className="flex w-[calc(100% / 3)] gap-4 ">
                    <Select>
                        <SelectTrigger className="w-[100px] mt-6">
                            <SelectValue placeholder="Mínimo" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectItem value="levelminimo">Mínimo</SelectItem>
                            <SelectItem value="levelmaximo">Máximo</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex-1 w-full">
                <div className="flex flex-col w-full gap-1 mr-4 mt-0">
                    <h3 className="text-sm font-semibold">Descrição</h3>
                    <Textarea className="w-full h-24 p-2 border rounded" value={descricao} onChange={handleDescricaoChange}></Textarea>
                </div>
                </div>
        </div>

      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>

  );
};

export default InfoItensCenter;