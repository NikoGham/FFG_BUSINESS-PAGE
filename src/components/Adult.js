import React
 from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import AdultCarousel from './AdultCarousel'
import data from '../yourdata';


/* Remember Niko, it's just fancy Javascript */ 


const Adult = (props) => {

 

  return (
    <Container className='childrenBG' fluid>
    <Row>
      <Col>
        <div>
          <Fade left>
            <h1 >Adult Athletes  <hr /></h1>
          
          </Fade>
        </div>
      </Col>
    </Row>
    <Row>
					<Col />{' '}
					<Col md={8} >
						<AdultCarousel />
						<Row>
							<Col />{' '}
							<Col className="childrenText" md={10}>
								<Fade slow >
									<p>
										An apple is an edible fruit produced by an apple tree (Malus domestica). Apple
										trees are cultivated worldwide and are the most widely grown species in the
										genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus
										sieversii, is still found today. Apples have been grown for thousands of years
										in Asia and Europe and were brought to North America by European colonists.
										Apples have religious and mythological significance in many cultures, including
										Norse, Greek, and European Christian tradition. Apple trees are large if grown
										from seed. Generally, apple cultivars are propagated by grafting onto
										
									</p>
								</Fade>
								<Fade slow>
								<p>
										An apple is an edible fruit produced by an apple tree (Malus domestica). Apple
										trees are cultivated worldwide and are the most widely grown species in the
										genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus
										sieversii, is still found today. Apples have been grown for thousands of years
										in Asia and Europe and were brought to North America by European colonists.
										Apples have religious and mythological significance in many cultures, including
										Norse, Greek, and European Christian tradition. Apple trees are large if grown
										from seed. Generally, apple cultivars are propagated by grafting onto
										rootstocks, which control the size of the resulting tree. There are more than
										7,500 known cultivars of apples, resulting in a range of desired
										characteristics. Different cultivars are bred for various tastes and use,
										including cooking, eating raw and cider production. Trees and fruit are prone to
										a number of fungal, bacterial and pest problems, which can be controlled by a
										number of organic and non-organic means. In 2010, the fruit's genome was
										sequenced as part of research on disease control and selective breeding in apple
										production. Worldwide production of apples in 2018 was 86 million tonnes, with
										China accounting for nearly half of the total.[3]{' '}
									</p>
									<hr />
								</Fade>
							
							</Col>
							<Col />
						</Row>
					</Col>
					<Col />
				</Row>
				<Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem' }}>
					<Footer />
				</Row>
  </Container>
  );
};



export default Adult;
