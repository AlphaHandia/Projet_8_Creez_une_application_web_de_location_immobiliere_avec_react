import styled from'styled-components'
const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: green;
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: green;
`


function Error() {
    return (
      <ErrorWrapper>
        <ErrorTitle>Oups...</ErrorTitle>
        
        <ErrorSubtitle>
          Il semblerait que la page que vous cherchez n’existe pas
        </ErrorSubtitle>
      </ErrorWrapper>
    )
  }
  
  export default Error
