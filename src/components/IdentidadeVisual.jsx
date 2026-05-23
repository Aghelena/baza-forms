import { Field, Input, Select, Textarea } from './Field'

export default function IdentidadeVisual({ onChange }) {
  return (
    <div className="section-card">
      <div className="section-title">🎨 identidade visual da loja</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Field label="Cores principais da marca" required>
          <Input name="cores" type="text" placeholder="Ex: rosa, dourado, branco" onChange={onChange} />
        </Field>
        <Field label="Estilo visual" required>
          <Select name="estilo" onChange={onChange}>
            <option value="">Selecione...</option>
            <option>Delicado e feminino</option>
            <option>Minimalista e clean</option>
            <option>Elegante e sofisticado</option>
            <option>Colorido e divertido</option>
            <option>Rústico e artesanal</option>
            <option>Moderno e profissional</option>
          </Select>
        </Field>
        <Field label="Possui logo?" required>
          <Select name="logo" onChange={onChange}>
            <option value="">Selecione...</option>
            <option>Sim — vou enviar o arquivo</option>
            <option>Sim — mas precisa de ajuste</option>
            <option>Não — criar junto com o pedido</option>
          </Select>
        </Field>
        <Field label="Fontes preferidas">
          <Input name="fontes" type="text" placeholder="Ex: serifada, cursiva, sem serifa" onChange={onChange} />
        </Field>
      </div>
      <Field label="Referências visuais (links, Pinterest, perfis)">
        <Textarea name="referencias" placeholder="Cole links ou descreva referências que você gosta..." onChange={onChange} />
      </Field>
    </div>
  )
}
