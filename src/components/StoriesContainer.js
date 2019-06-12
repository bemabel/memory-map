import React, { Component } from 'react';
import Card, { CardTitle, CardBlock } from 'mineral-ui/Card';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';


// import AvImg from "../static/icons/logo.jpg";
// import AccountCircle from '@material-ui/icons/AccountCircle';


function CardAvatar() {
  return (
    // <img src={AccountCircle} 
    // style={{width: "40px", height: "40px", padding: "5px"}}
    //  />
    <IconButton aria-label="Go to Account">
      <SvgIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /><path d="M0 0h24v24H0z" fill="none" /></svg>      </SvgIcon>
    </IconButton>

  )
}

class StoriesСontainer extends Component {
  render() {
    const text1 = "Pretty much any movie can be 'based on a true story', but there are a select few that take real-life events and turn them into cinematic masterpieces. Whether you're looking for a tale of underdogs overcoming the odds, a peek behind the royal curtain, or a new perspective on some of history's darkest moments, these films take all of the facts and spin them into stories that will inspire, astound, and haunt long after you've finished watching.";
    const text2 = "The morning I spotted Tony Gardener sitting among the tourists, spring was just arriving here in Venice. We’d completed our first full week outside in the piazza – a relief, let me tell you after all those stuffy hours performing form the back of the café, getting in the way of customers wanting to use the staircase. There was quite a breeze that morning, and our brand-new marquee was flapping all around us, but we were all feeling a little bit brighter and fresher, and I guess it showed in our music.";
    const text3 = "“Given the fact that he is one of the only ones left who hasn’t found love, one would hope and assume there is an opportunity for him to have an iota of a chance at finding something,” Leech told Entertainment Weekly.";

    return (
      <>
          <Card
          background-color="#f9f9ff">
            <CardTitle
              subtitle="@bemabylova">
          <h2>Be or not to Be?</h2>
              <CardAvatar />
              Cosmopark
            </CardTitle>
            <CardBlock>{text1}</CardBlock>
          </Card>

          <Card
          background-color="#f9f9ff">
            <CardTitle
              subtitle="@aidai_sultanova">
          <h2>"Stories are not enough"</h2>
              <CardAvatar />
              Dubovyi Park
            </CardTitle>
            <CardBlock>{text2}</CardBlock>
          </Card>

          <Card
          background-color="#f9f9ff">
            <CardTitle
              subtitle="@mairam.nuralieva">
          <h2>Story of ine</h2>
              <CardAvatar />
              Leech Cafe
            </CardTitle>
            <CardBlock>{text3}</CardBlock>
          </Card>
      </>
    );
  }
}
export default StoriesСontainer;