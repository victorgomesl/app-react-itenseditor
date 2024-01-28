import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import { Textarea } from "@/components/ui/textarea"


const InfoItensCenter = () => {
    return (

    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex flex-col w-full gap-2 mr-4">
          <h3 className="text-sm font-semibold">Nome</h3>
          <Input className="w-full"></Input>

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
                <div className="flex flex-col w-full gap-2 mr-4">
                    <h3 className="text-sm font-semibold">Preço</h3>
                    <Input className="w-full"></Input>
                </div>
                <div className="flex w-[calc(100% / 3)] gap-4 ">
                    <Select>
                        <SelectTrigger className="w-[100px] mt-7">
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
            <div className="flex flex-col w-full gap-2">
                    <h3 className="text-sm font-semibold">Preço (Desconto)</h3>
                    <Input className="w-full"></Input>
                </div>
            </div>

            <div className="flex w-full">
            <div className="flex flex-col w-full gap-2 mr-4">
                    <h3 className="text-sm font-semibold">Level</h3>
                    <Select>
                        <SelectTrigger className="w-[220px]">
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
                        <SelectTrigger className="w-[100px] mt-7">
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
                <div className="flex flex-col w-full gap-2 mr-4 mt-2">
                    <h3 className="text-sm font-semibold">Descrição</h3>
                    <Textarea className="w-full h-24 p-2 border rounded"></Textarea>
                </div>
                </div>
        </div>

      </div>
    </div>

    

  );
};

export default InfoItensCenter;
