// AllTrains.js
import React, { useEffect, useState } from 'react';
import { getAllTrains } from './api';
import { Typography, Card, CardContent } from '@mui/material';

const AllTrains = ({ token }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch all trains when the component mounts
    getAllTrains(token)
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error fetching trains:', error);
      });
  }, [token]);

  return (
    <div>
      <Typography variant="h4">All Trains</Typography>
      {trains.map((train) => (
        <Card key={train.trainNumber} style={{ margin: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{train.trainName}</Typography>
            <Typography>Train Number: {train.trainNumber}</Typography>
            <Typography>Departure Time: {train.departureTime}</Typography>
            <Typography>Sleeper Seats Available: {train.seatsAvailable.sleeper}</Typography>
            <Typography>AC Seats Available: {train.seatsAvailable.AC}</Typography>
            <Typography>Price (Sleeper): {train.price.sleeper}</Typography>
            <Typography>Price (AC): {train.price.AC}</Typography>
            <Typography>Delayed By: {train.delayedBy} minutes</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AllTrains;
