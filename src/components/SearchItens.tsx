import React from 'react';
import { Command, CommandInput } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Item.${a.length - i}`
);

const SearchItens = () => {
  return (
    <div className="flex flex-col items-start w-full gap-2.5">
      <Command className='h-15'>
        <CommandInput placeholder="Procurar item..."></CommandInput>
      </Command>
      
      <div className="flex gap-2.5 items-center w-full mb-2">
        <Select>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Personagens" />
          </SelectTrigger>
          <SelectContent className="overflow-auto max-h-60">
            <SelectItem value="nuri">Nuri</SelectItem>
            <SelectItem value="hana">Hana</SelectItem>
            <SelectItem value="azer">Azer</SelectItem>
            <SelectItem value="cecilia">Cecilia</SelectItem>
            <SelectItem value="max">Max</SelectItem>
            <SelectItem value="kooh">Kooh</SelectItem>
            <SelectItem value="arin">Arin</SelectItem>
            <SelectItem value="kaz">Kaz</SelectItem>
            <SelectItem value="lucia">Lucia</SelectItem>
            <SelectItem value="nell">Nell</SelectItem>
            <SelectItem value="spika">spika</SelectItem>
            <SelectItem value="nurir">Nuri R</SelectItem>
            <SelectItem value="hannar">Hanna R</SelectItem>
            <SelectItem value="ceciliar">Cecilia R</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder="Tipos" />
          </SelectTrigger>
          <SelectContent className="overflow-auto max-h-60">
            <SelectItem value="top">Top</SelectItem>
            <SelectItem value="bottom">Bottom</SelectItem>
            <SelectItem value="hairhat">Hair/Hat</SelectItem>
            <SelectItem value="gloves">Gloves</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="accessory">Acessory</SelectItem>
            <SelectItem value="selfdesign">SelfDesign</SelectItem>
            <SelectItem value="selfdesigncopy">SelfDesign Copy</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2 ml-auto">
          <Checkbox id="shopActive" />
          <label htmlFor="shopActive" className="text-sm">Ativo no shop</label>
        </div>
      </div>
      

      <ScrollArea className="h-[327px] w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Lista de itens</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
    </div>
  );
};

export default SearchItens;
