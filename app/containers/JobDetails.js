import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./Card";

const JobDetails = props => {
  return (
    <View>
      <Card>
        <Text>{props.jobs.title}</Text>
      </Card>
    </View>
  );
};

export default JobDetails;
