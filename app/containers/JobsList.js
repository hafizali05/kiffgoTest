import React, { Component } from "react";
import { Text, View } from "react-native";
import Axios from "axios";
import JobDetails from "./JobDetails";
class JobsList extends Component {
  state = {
    jobs: []
  };
  componentWillMount() {
    console.log("componentWillMount");
    Axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(
      response => console.log(this.setState({ jobs: response.data }))
    );
  }
  renderJobs() {
    return this.state.jobs.map(job => (
      <JobDetails key={job.title} jobs={job} />
    ));
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
