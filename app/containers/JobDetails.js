import React, { Component } from "react";
import { Text, View } from "react-native";

const JobDetails = props => {
  return (
    <View>
      <Text>{props.jobs.title}</Text>
    </View>
  );
};

export default JobDetails;