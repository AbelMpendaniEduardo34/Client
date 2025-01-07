import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";

function ExampleDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Abrir Diálogo</button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Título do Diálogo</DialogTitle>
        <p>Conteúdo do diálogo aqui.</p>
      </DialogContent>
    </Dialog>
  );
}

export default ExampleDialog;
