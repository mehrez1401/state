import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Carte from './Carte'
import apis from '../data/Api'


const ContainerSyst = () => {
  return (
    <div>
        <Container>
        <Row>
            {apis.map(({link,destination,desc})=>
        <Col>
        <Carte
        link={link}
        destination={destination}
        desc={desc}
        />
        </Col>)}
        </Row>
        </Container>


      
    </div>
  )
}

export default ContainerSyst
