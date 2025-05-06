import { Container } from 'react-bootstrap'
import FormAdmin from '../components/registerUsers/FormAdmin'
import NavbarC from '../components/navbar/NavbarC'


const RegisterAdminPage = () => {
  return (
    <>
     <NavbarC/>
    
    <Container className='d-flex justify-content-center my-3'>
        <FormAdmin/>
    </Container>
    </>
  )
}

export default RegisterAdminPage