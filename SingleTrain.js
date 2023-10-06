// SingleTrain.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from './api';
import {
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';

const SingleTrain = ({ token }) => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch details of the single train when the component mounts
    getSingleTrain(trainNumber, token)
      .then((response) => {
        setTrain(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching single train:', error);
        setLoading(false);
      });
  }, [trainNumber, token]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {train ? (
        <Card style={{ margin: '1rem' }}>
          <CardContent>
            <Typography variant="h5">{train.trainName}</Typography>
            <Typography>Train Number: {train.trainNumber}</Typography>
            <Typography>Departure Time: {train.departureTime}</Typography>
            <Typography>Sleeper Seats Available: {train.seatsAvailable.sleeper}</Typography>
            <Typography>AC Seats Available: {train.seatsAvailable.AC}</Typography>
            <Typography>Price (Sleeper): {train.price.sleeper}</Typography>
            <Typography>Price (AC): {train.price.AC}</Typography>
            <Typography>Delayed By: {train.delayedBy} minutes</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6">Train not found</Typography>
      )}
    </div>
  );
};

export default SingleTrain;
