import React from 'react';
import { CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import ItemIconPath from '../../public/assets/images/Item_Icon/ff_pv_12_01.png'

const CardRight = () => {


  return (
    <div className="flex flex-col w-full lg:w-1/2 p-4 space-y-4">
      <div className="flex -mx-2.5">
        {/* Coluna da Esquerda */}
        <div className="w-1/2"> {/* Ajuste para ocupar metade da largura */}
          <CardTitle className="text-sm font-semibold">Personagem</CardTitle>
          <CardDescription className="text-sm">Nuri</CardDescription>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox id="negociavel" />
            <label htmlFor="negociavel" className="text-sm">Negociável</label>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox id="flagnew" />
            <label htmlFor="flagnew" className="text-sm">Flag New</label>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold">Força/Slot</h3>
            <div className="flex gap-2 mb-2">
              <Input className="w-1/4" />
              <Input className="w-1/4" />
            </div>
            <h3 className="text-sm font-semibold">Precisão/Slot</h3>
            <div className="flex gap-2 mb-2">
              <Input className="w-1/4" />
              <Input className="w-1/4" />
            </div>
            <h3 className="text-sm font-semibold">Curva/Slot</h3>
            <div className="flex gap-2">
              <Input className="w-1/4" />
              <Input className="w-1/4" />
            </div>
          </div>
          <div className="flex-1 w-full">
                <div className="flex flex-col w-full gap-2 mr-4 mt-4">
                    <h3 className="text-sm font-semibold">Icone do item</h3>
                    <img src={ItemIconPath} alt="Icone do Item" className="w-full h-24 p-2 border rounded" />
                </div>
                </div>
        </div>

        {/* Coluna da Direita */}
        <div className="w-1/2">
          <div className="flex-1">
            <CardTitle className="text-sm font-semibold">TypeID</CardTitle>
            <CardDescription className="text-sm">134537254</CardDescription>
            <div className="flex items-center gap-2 mt-4">
              <Checkbox id="presenteavel" />
              <label htmlFor="presenteavel" className="text-sm">Presenteável</label>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Checkbox id="flaghot" />
              <label htmlFor="flaghot" className="text-sm">Flag Hot</label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Controle/Slot</h3>
            <div className="flex gap-2 mb-2">
              <Input className="w-1/4" />
              <Input className="w-1/4" />
            </div>
            <h3 className="text-sm font-semibold">Spin/Slot</h3>
            <div className="flex gap-2">
              <Input className="w-1/4" />
              <Input className="w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRight;
