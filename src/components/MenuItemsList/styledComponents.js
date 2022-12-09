import styled from 'styled-components'

export const MenuList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  width: 100%;
`

export const MenuLink = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  text-decoration: none;
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  padding-left: 20px;
`

export const MenuHeading = styled.p`
  font-weight: 500;
  padding-left: 15px;
  text-decoration: none;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 16px;
`
