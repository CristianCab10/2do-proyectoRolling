import { Container } from 'react-bootstrap'
import FormPacient from '../components/registerUsers/FormPacient'
import NavbarC from '../components/navbar/NavbarC'


const RegisterPacient = () => {
  return (
    <>
    <NavbarC/>
    <Container className='d-flex justify-content-center my-3'>
      <FormPacient/>
    </Container>
    </>
  )
}

export default RegisterPacient