import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

//Fordi dette er typescript lager jeg først et interface for å si noe om HVA slags data vi snakker om. Deklarer variablenes datatype.
//Spørsmålstegnet betyr at det er "optional". Det har jeg ikke bestemt meg for her så da har alle det.
//Claude foreslo på et tidspunkt {children} som en React.ReactNode type også. Noe å tenke på senere.
interface DialogusProps {
  trigger?: string;
  title?: string;
  description?: string;
  field1_title?: string;
  field1_content?: string;
  field2_title?: string;
  field2_content?: string;
  content?: React.ReactNode;
  data?: [string, string];
  onSubmit?: (data: [string, string]) => void;
  submitButton?: string;
}

const Dialogus = ({
  trigger,
  title,
  description,
  field1_title,
  field1_content,
  field2_title,
  field2_content,
  content,
  onSubmit,
  submitButton,
}: DialogusProps) => {
  const [Field1Value, setField1value] = useState(field1_content || '');
  const [field2Value, setField2Value] = useState(field2_content || '');

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit([Field1Value, field2Value]);
    }
  };

  //Her trenger jeg ikke initialisere eller fylle på med data, da overskriver det Storybook!
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="field1" className="text-right">
              {field1_title}
            </Label>
            <Input
              id="field1"
              value={Field1Value}
              onChange={(e) => setField1value(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="field2" className="text-right">
              {field2_title}
            </Label>
            <Input
              id="field2"
              value={field2Value}
              onChange={(e) => setField2Value(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            {submitButton}
          </Button>
        </DialogFooter>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default Dialogus;
