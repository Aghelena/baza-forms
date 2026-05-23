import { Field, Input, Select } from './Field'

export default function DadosCliente({ onChange }) {
  return (
    <div className="section-card">
      <div className="section-title">👤 dados do cliente</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Nome completo" required>
          <Input name="nome" type="text" placeholder="Nome da cliente" onChange={onChange} />
        </Field>
        <Field label="Nome da loja / marca" required>
          <Input name="loja" type="text" placeholder="Ex: Studio Bela" onChange={onChange} />
        </Field>
        <Field label="WhatsApp" required>
          <Input name="whatsapp" type="tel" placeholder="(16) 9 9999-9999" onChange={onChange} />
        </Field>
        <Field label="Instagram">
          <Input name="instagram" type="text" placeholder="@nomedалоja" onChange={onChange} />
        </Field>
        <Field label="E-mail">
          <Input name="email" type="email" placeholder="email@exemplo.com" onChange={onChange} />
        </Field>
        <Field label="Cidade / Estado" required>
          <Input name="cidade" type="text" placeholder="Ex: Franca, SP" onChange={onChange} />
        </Field>
      </div>
    </div>
  )
}
