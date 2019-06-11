import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import {
  Divider,
  Container,
  Form,
  Header,
  Segment
} from "semantic-ui-react";

class AddStory extends React.Component {
  state = { value: "" };

  render() {
    return (
      <Container>
        <Divider hidden />
       

        <Segment>
          <Header as="h3">
            Add one more story <span role="img" aria-label="pointer">📌</span>
          </Header>

          <Form>
            <Form.Field
              control={TextareaAutosize}
              placeholder="Tell us more about your adventure..."
              onChange={e => this.setState({ value: e.target.value })}
              useCacheForDOMMeasurements
              value={this.state.value}
            />

            <Form.Button
              content="Publish"
              onClick={() => this.setState({ value: "" })}
            />
          </Form>
        </Segment>

       
      </Container>
    );
  }
}

export default AddStory

