import React from "react";
import { Text, View } from "react-native";
import { Card } from "./common/Card";
import { CardSection } from "./common/CardSection";

const JobDetails = props => {
  const { headerContentStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Text>{props.jobs.cost}</Text>
        </View>
        <View style={headerContentStyle}>
          <Text>{props.jobs.name}</Text>
          <Text>{props.jobs.pickupDate}</Text>
          <Text>{props.jobs.startPostCode}</Text>
          <Text>{props.jobs.endPostCode}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  }
};

export default JobDetails;
