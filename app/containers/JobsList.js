import React, { Component } from "react";
import { View } from "react-native";
import Axios from "axios";
import JobDetails from "./JobDetails";
const apiBaseUrl =
  "https://kiffgo-staging.herokuapp.com/interview-test/jobs?userId=1";
var payload = {
  email: "",
  password: ""
};
class JobsList extends Component {
  state = {
    jobs: []
  };
  componentWillMount() {
    console.log("componentWillMount");
    // Axios.post(apiBaseUrl, payload).then(
    //   response => console.log(response)
    //   //   console.log(this.setState({ jobs: response.data }))
    // );

    Axios.post(apiBaseUrl, payload)
      .then(response => {
        console.log(response);
        this.setState({ jobs: response.data.jobs });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  renderJobs() {
    // console.log("this.state.jobs", this.state.jobs);
    return this.state.jobs.map(job => <JobDetails key={job.name} jobs={job} />);
  }
  render() {
    return (
      <View>
        {/* <Text>Hello Jobs List helo</Text> */}
        {this.renderJobs()}
      </View>
    );
  }
}

export default JobsList;
