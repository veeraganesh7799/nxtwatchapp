import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 220px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
`

export const LogoIcons = styled.img`
  width: 40px;
  margin: 0px 8px 0px 0px;
`
export const ContactUsContainer = styled.div`
  padding: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Text = styled.p`
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#212121')};
`
export const TextDesc = styled.p`
  font-weight: 400;
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#212121')};
`
