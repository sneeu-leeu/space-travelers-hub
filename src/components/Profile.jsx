import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { missions, toggleMissionState } from '../redux/missions/missions';

const Profile = () => {
  const allMissions = useSelector(missions);

  const leaveMission = (e) => {
    dispatchEvent(toggleMissionState({ mission_id: e.target.id }));
  };

  const reservedMissions = allMissions
    .filter((mission) => mission.reserved)
    .map((mission) => (
      <ListGroupItem
        key={mission.mission_id}
        className="d-flex align-items-center justify-content-between"
      >
        <span>
          {mission.mission_name}
          <br />
          <a href={mission.wikipedia} target="blank">Read More</a>
        </span>
        <button type="button" variant="outline-danger" id={mission.mission_id} onClick={leaveMission}>Leave Mission</button>
      </ListGroupItem>
    ));
  const rocketState = useSelector((state) => state.rocketsReducer);
  return (
    <Container fluid className="border-top w-100 pt-2">
      <Row>
        <Col xs={12} md={6}>
          <h2>My Missions</h2>
          <Card>
            <ListGroup>
              {reservedMissions.length > 0 ? (
                reservedMissions
              ) : (
                <ListGroupItem>No Missions Joined</ListGroupItem>
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <h2>My Rockets</h2>
          <card>
            <ListGroup>
              {rocketState.filter((rocket) => rocket.reserved).length === 0 ? (
                <ListGroup.Item>No rockets reserved </ListGroup.Item>
              ) : (
                rocketState
                  .filter((rocket) => rocket.reserved)
                  .map((rocket) => (
                    <ListGroup.Item
                      key={rocket.id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      {rocket.rocket_name}
                      {' '}
                    </ListGroup.Item>
                  ))
              )}
            </ListGroup>
          </card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
