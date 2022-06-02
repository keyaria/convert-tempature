import React, { FC } from "react"
import { Container } from "./HomePage.style"
import "./HomePage.style.ts"

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <Container className="HomePage" data-testid="HomePage">
    HomePage Component
  </Container>
)

export default HomePage
