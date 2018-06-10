import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const JobDetails = props => {
  return (
    <Card>
      <CardSection>
        <Text>{props.jobs.name}</Text>
      </CardSection>
    </Card>
  );
};

export default JobDetails;
