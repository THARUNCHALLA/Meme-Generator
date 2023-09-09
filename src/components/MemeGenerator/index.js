import {Component} from 'react'

import {
  Form,
  Heading,
  Container,
  Input,
  SELECT,
  Label,
  Button,
  ParaGraph,
  Container1,
  Container2,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    Initial: false,
    topText: '',
    BottomText: '',
    URL: '',
    active: fontSizesOptionsList[0].optionId,
    active1: fontSizesOptionsList[0].optionId,
  }

  onsubmit = event => {
    const {topText, BottomText, URL, active} = this.state
    event.preventDefault()
    if (topText !== '' && BottomText !== '' && URL !== '') {
      this.setState({Initial: true, URL, topText, BottomText, active1: active})
    }
  }

  Image = event => {
    this.setState({URL: event.target.value})
  }

  Top = event => {
    this.setState({topText: event.target.value})
  }

  Bottom = event => {
    this.setState({BottomText: event.target.value})
  }

  select = event => {
    this.setState({active: event.target.value})
  }

  render() {
    const {Initial, topText, BottomText, URL, active1, active} = this.state
    return (
      <Container2>
        <Form onSubmit={this.onsubmit}>
          <Heading>Meme Generator</Heading>
          <Container>
            <Label htmlFor="imageId">Image URL</Label>
            <Input
              type="text"
              id="imageId"
              placeholder="Enter the Image Url"
              onChange={this.Image}
            />
          </Container>
          <Container>
            <Label htmlFor="imageId1">Top Text</Label>
            <Input
              type="text"
              id="imageId1"
              placeholder="Enter the Top Text"
              onChange={this.Top}
            />
          </Container>
          <Container>
            <Label htmlFor="imageId2">Bottom Text</Label>
            <Input
              type="text"
              id="imageId2"
              placeholder="Enter the bottom Text"
              onChange={this.Bottom}
            />
          </Container>
          <Container>
            <Label htmlFor="imageId1">Font Size</Label>
            <SELECT value={active} onChange={this.select}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SELECT>
          </Container>
          <Button type="submit">Generate</Button>
        </Form>
        <styledComponent data-testid="meme">
          {Initial && (
            <Container1 background={URL}>
              <ParaGraph size={active1}>{topText}</ParaGraph>
              <ParaGraph size={active1}>{BottomText}</ParaGraph>
            </Container1>
          )}
        </styledComponent>
      </Container2>
    )
  }
}
export default MemeGenerator
