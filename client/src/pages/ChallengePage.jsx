import React, { useEffect, useState } from 'react';
import bigStar from '../assets/bigStar.png';
import { useParams } from 'react-router-dom';
import { fetchOneChallenge } from '../http/challengeAPI';

const ChallengePage = () => {
  const [challenge, setChallenge] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneChallenge(id).then((data) => setChallenge(data));
  }, []);

  return (
    // <Container className="mt-3">
    //   <Row>
    //     <Col md={4}>
    //       <Image width={300} height={300} src={process.env.REACT_APP_API_URL + challenge.img} />
    //     </Col>
    //     <Col md={4}>
    //       <Row className="d-flex flex-column align-items-center">
    //         <h2>{challenge.name}</h2>
    //         <div
    //           className="d-flex align-items-center justify-content-center"
    //           style={{
    //             background: `url(${bigStar}) no-repeat center center`,
    //             width: 240,
    //             height: 240,
    //             backgroundSize: 'cover',
    //             fontSize: 64,
    //           }}
    //         >
    //           {challenge.rating}
    //         </div>
    //       </Row>
    //     </Col>
    //     <Col md={4}>
    //       <Card
    //         className="d-flex flex-column align-items-center justify-content-around"
    //         style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
    //       > 
    //         <h3>От: {challenge.price} руб.</h3>
    //         <Button variant={'outline-dark'}>Добавить в корзину</Button>
    //       </Card>
    //     </Col>
    //   </Row>
    //   <Row className="d-flex flex-column m-3">
    //     <h1>Характеристики</h1>
    //     {challenge.info.map((info, index) => (
    //       <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
    //         {info.title}: {info.description}
    //       </Row>
    //     ))}
    //   </Row>
    // </Container>
    <div>
      
    </div>
  );
};

export default ChallengePage;
