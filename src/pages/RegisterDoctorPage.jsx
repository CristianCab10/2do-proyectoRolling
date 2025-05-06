import { Container } from 'react-bootstrap'
import FormDoctor from '../components/registerUsers/FormDoctor'
import NavbarC from '../components/navbar/NavbarC'


const RegisterDoctorPage = () => {
  return (
    <>
     <NavbarC/>
    <Container className='d-flex justify-content-center my-3'>
        <FormDoctor/>
    </Container>
    </>
  )
}

export default RegisterDoctorPage