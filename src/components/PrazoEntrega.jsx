import { Field, Input, Select, Textarea } from './Field'

export default function PrazoEntrega({ onChange }) {
  return (
    <div className="section-card">
      <div className="section-title">📅 prazo e entrega</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Field label="Data que precisa receber" required>
          <Input name="data_entrega" type="date" onChange={onChange} />
        </Field>
        <Field label="Forma de entrega" required>
          <Select name="forma_entrega" onChange={onChange}>
            <option value="">Selecione...</option>
            <option>Entrega (transportadora / Correios)</option>
            <option>Retirada em Franca, SP</option>
          </Select>
        </Field>
      </div>
      <Field label="Observações adicionais">
        <Textarea name="observacoes" placeholder="Alguma informação extra, restrição ou pedido especial..." onChange={onChange} />
      </Field>
    </div>
  )
}
