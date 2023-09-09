import styled from 'styled-components'

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const Form = styled.form`
  padding: 20px;
`
export const Heading = styled.h1`
  font-family: 'bree serif';
  font-size: 26px;
  color: #35469c;
  margin: 20px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  background-image: url(${props => props.background});
  height: 240px;
  width: 90vw;
  background-size: cover;
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    background-image: url(${props => props.background});
    height: 400px;
    width: 50vw;
    background-size: cover;
  }
`
export const Input = styled.input`
  width: 300px;
  height: 32px;
  outline: none;
`
export const SELECT = styled.select`
  width: 300px;
  height: 32px;
  outline: none;
  cursor: pointer;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 10px;
`
export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  color: white;
  background-color: #0b69ff;
  margin-bottom: 10px;
  outline: none;
  border: none;
  height: 28px;
  width: 100px;
  margin-left: 20px;
  border-radius: 04px;
  cursor: pointer;
`
export const styledComponent = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const ParaGraph = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  font-weight: 800;
  color: white;
  margin-bottom: 10px;
  margin: 30px;
`
