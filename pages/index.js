import styled from 'styled-components'

const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;
  
`;

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;

  @media(min-width: 860px){
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default function Home() {
  return (
    <MainGrid>
      <div style={{ gridArea:'profileArea' }}>
        <Box>
          Home
          <img src="https://github.com/pedrohss95.png" />
        </Box>
      </div>
      <div style={{ gridArea:'welcomeArea' }}>
        <Box>
          Welcome
        </Box>
      </div>
      <div style={{ gridArea:'profileRelationsArea' }}>
        <Box>
          Good evening
        </Box>
        <Box>
          Good night
        </Box>
      </div>
    </MainGrid>
  )
}
