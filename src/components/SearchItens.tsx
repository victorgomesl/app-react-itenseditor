import React from 'react';
import { Command, CommandInput } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const listadeitens = [
  {
    iddoitem: "134219836",
    nomedoitem: "Fruit Cake Hat (N)",
  },
  {
    iddoitem: "134258727",
    nomedoitem: "Baseball Pants",
  },
  {
    iddoitem: "134218752",
    nomedoitem: "Basic Head",
  },
  {
    iddoitem: "134318085",
    nomedoitem: "Blooming Crown (N)",
  },
  {
    iddoitem: "134242338",
    nomedoitem: "Cadet Jacket",
  },
  {
    iddoitem: "134283296",
    nomedoitem: "Christmas Shoes (N)",
  },
  {
    iddoitem: "134283270",
    nomedoitem: "Danger Lows",
  },
]

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
      <div className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">TypeID</TableHead>
                  <TableHead>Nome</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {listadeitens.map((item) => (
                <TableRow key={item.iddoitem}>
                  <TableCell className="font-medium">{item.iddoitem}</TableCell>
                  <TableCell>{item.nomedoitem}</TableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table>
      </div>
    </ScrollArea>
    </div>
  );
};

export default SearchItens;
