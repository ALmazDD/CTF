import React from 'react';

import star from '../assets/star.png';
import { useHistory } from 'react-router-dom';
import { CHALLENGE_ROUTE } from '../utils/consts';

const ChallengeItem = ({ challenge }) => {
  const history = useHistory();
  return (
    // <Col md={3} className={"mt-3"} onClick={() => history.push(CHALLENGE_ROUTE + '/' + challenge.id)}>
    //     <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
    //         <Image width={150} height={150} src={process.env.REACT_APP_API_URL + challenge.img}/>
    //         <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
    //             <div>Samsung...</div>
    //             <div className="d-flex align-items-center">
    //                 <div>{challenge.rating}</div>
    //                 <Image width={18} height={18} src={star}/>
    //             </div>
    //         </div>
    //         <div>{challenge.name}</div>
    //     </Card>
    // </Col>
    <div></div>
  );
};

export default ChallengeItem;
