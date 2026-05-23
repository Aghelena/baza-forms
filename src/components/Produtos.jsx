import { Field, Input, Select } from './Field'

function ProdCard({ emoji, title, badgeClass, children }) {
  return (
    <div className="prod-card">
      <div className="prod-header">
        {emoji} {title}
        <span className={`badge ${badgeClass}`}>solicitado</span>
      </div>
      {children}
    </div>
  )
}

export default function Produtos({ onChange }) {
  return (
    <div className="section-card">
      <div className="section-title">📦 produtos solicitados</div>

      {/* CARTÃO DE VISITAS */}
      <ProdCard emoji="🪪" title="Cartão de visitas" badgeClass="bg-[#FBEAF0] text-[#993556]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Field label="Quantidade" required>
            <Select onChange={onChange}>
              <option value="">Selecione...</option>
              <option>100 unidades</option>
              <option>200 unidades</option>
              <option>300 unidades</option>
              <option>500 unidades</option>
              <option>Outro</option>
            </Select>
          </Field>
          <Field label="Formato" required>
            <Select onChange={onChange}>
              <option value="">Selecione...</option>
              <option>9x5cm (padrão)</option>
              <option>9x5cm (horizontal)</option>
              <option>Quadrado 6x6cm</option>
              <option>Outro</option>
            </Select>
          </Field>
          <Field label="Impressão">
            <Select onChange={onChange}>
              <option>Frente e verso</option>
              <option>Só frente</option>
            </Select>
          </Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Nome no cartão" required>
            <Input type="text" placeholder="Nome que aparece no cartão" onChange={onChange} />
          </Field>
          <Field label="Cargo / função">
            <Input type="text" placeholder="Ex: Fundadora, Proprietária" onChange={onChange} />
          </Field>
        </div>
        <div className="mb-4">
          <Field label="Informações de contato" required>
            <Input type="text" placeholder="WhatsApp, e-mail, Instagram, site, endereço..." onChange={onChange} />
          </Field>
        </div>
        <Field label="Acabamento desejado">
          <Select onChange={onChange}>
            <option>Fosco</option>
            <option>Brilhoso</option>
            <option>Laminação soft touch</option>
            <option>Verniz localizado</option>
            <option>Hot stamping dourado</option>
            <option>Sem preferência</option>
          </Select>
        </Field>
      </ProdCard>

      {/* SACOLAS */}
      <ProdCard emoji="🛍" title="Sacolas de papel (presente)" badgeClass="bg-verde-p text-verde-m">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Field label="Quantidade" required>
            <Select onChange={onChange}>
              <option value="">Selecione...</option>
              <option>50 unidades</option>
              <option>100 unidades</option>
              <option>200 unidades</option>
              <option>Outro</option>
            </Select>
          </Field>
          <Field label="Tamanho" required>
            <Select onChange={onChange}>
              <option value="">Selecione...</option>
              <option>Pequena (18x8x22cm)</option>
              <option>Média (24x10x28cm)</option>
              <option>Grande (32x12x36cm)</option>
              <option>Misto de tamanhos</option>
            </Select>
          </Field>
          <Field label="Material">
            <Select onChange={onChange}>
              <option>Kraft natural</option>
              <option>Kraft branco</option>
              <option>Couché brilho</option>
              <option>Couché fosco</option>
            </Select>
          </Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Alça">
            <Select onChange={onChange}>
              <option>Cordão de papel torcido</option>
              <option>Fita de cetim</option>
              <option>Alça de papel liso</option>
            </Select>
          </Field>
          <Field label="Impressão">
            <Select onChange={onChange}>
              <option>1 cor (econômico)</option>
              <option>2 cores</option>
              <option>Full color (CMYK)</option>
            </Select>
          </Field>
        </div>
        <Field label="Elementos da sacola" required>
          <Input type="text" placeholder="Logo, slogan, Instagram, site, frase personalizada..." onChange={onChange} />
        </Field>
      </ProdCard>

      {/* CAIXAS */}
      <ProdCard emoji="📦" title="Caixas para pré-kits" badgeClass="bg-[#E6F1FB] text-[#185FA5]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Field label="Quantidade" required>
            <Select onChange={onChange}>
              <option value="">Selecione...</option>
              <option>50 unidades</option>
              <option>100 unidades</option>
              <option>200 unidades</option>
              <option>Outro</option>
            </Select>
          </Field>
          <Field label="Tamanho LxAxP" required>
            <Input type="text" placeholder="Ex: 20x10x15cm" onChange={onChange} />
          </Field>
          <Field label="Formato">
            <Select onChange={onChange}>
              <option>Tampa e base separados</option>
              <option>Caixa com aba (auto-montável)</option>
              <option>Caixa rígida</option>
              <option>Caixa com visor</option>
            </Select>
          </Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Material">
            <Select onChange={onChange}>
              <option>Papelão duplex branco</option>
              <option>Kraft</option>
              <option>Couché brilho</option>
              <option>Papelão rígido</option>
            </Select>
          </Field>
          <Field label="Impressão">
            <Select onChange={onChange}>
              <option>Full color (CMYK)</option>
              <option>2 cores</option>
              <option>1 cor</option>
              <option>Sem impressão (só estrutura)</option>
            </Select>
          </Field>
        </div>
        <div className="mb-4">
          <Field label="O que vai dentro da caixa?" required>
            <Input type="text" placeholder="Ex: cremes, acessórios, perfume..." onChange={onChange} />
          </Field>
        </div>
        <Field label="Elementos da caixa" required>
          <Input type="text" placeholder="Logo, frase, Instagram, dados de contato..." onChange={onChange} />
        </Field>
      </ProdCard>
    </div>
  )
}
