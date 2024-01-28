import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function CardHead() {
  return (
        <CardHeader>
          <CardTitle>Editor de itens</CardTitle>
          <CardDescription>Selecione para editar</CardDescription>
          <div className="flex flex-wrap gap-2">
          <Button>Part</Button>
          <Button>Item</Button>
          <Button>Clubset</Button>
          <Button>Ball</Button>
          <Button>Mascot</Button>
          <Button>Caddie</Button>
          <Button>Skin</Button>
          <Button>AuxPart</Button>
          <Button>Character</Button>
          <Button>Hair Style</Button>
          <Button>Caddie Item</Button>
          <Button>Set Item</Button>
          <Button>Card</Button>
          </div>
        </CardHeader>
  );
}
