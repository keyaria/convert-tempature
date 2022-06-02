import React, { FC } from "react"
import ConversionForm from "../../../../components/ConversionForm/ConversionForm"
import * as S from "./HomePage.style"

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <S.Container className="HomePage" data-testid="HomePage">
    <S.Header>Tempature Converter</S.Header>
    <ConversionForm />
  </S.Container>
)

export default HomePage
