import React from 'react';
import { Card } from "@/components/ui/card";
import CardHead from "./card-header";
import CardLeft from './card-left';
import CardCenter from './card-center';
import CardRight from './card-right';

export default function CardPrincipal() {
  return (
    <div className="mx-auto max-w-[calc(100vw-100px)]">
      <Card className="pl-7 w-[1230px] h-[600px] ">
        <CardHead />
        <div className="flex mx-0">
          <CardLeft />
          <CardCenter />
          <CardRight />
        </div>
      </Card>
    </div>
  );
}
