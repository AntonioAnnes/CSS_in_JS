import { FormEvent, useState } from 'react'

import { Formie } from './styles'
import { Campos } from './styles'
import { BtnPesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formie onSubmit={aoEnviarForm}>
      <Campos
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisa type="submit">Pesquisar</BtnPesquisa>
    </Formie>
  )
}
export default FormVagas
