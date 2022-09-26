import React from "react";
import { useNavigate } from "react-router-dom";

import Volume from "../../components/Volume";

import ArrowsIcon from "../../components/Icons/ArrowsIcon";

import {
  IntroContainer,
  IntroSection,
  IntroContent,
  SkipIntro,
  IntroButton,
  IntroWrapper,
  StyledLogo,
  IntroSubtitle,
  ContentWrapper,
} from "./Introduction.styled";

function Introduction() {
  const navigate = useNavigate();

  return (
    <IntroWrapper>
      <IntroContainer>
        <IntroSection>
          <StyledLogo />
          <ContentWrapper>
            <IntroContent>
              <h2>A long time ago in a galaxy far, far away...</h2>
              <p>
                Turmoil has engulfed the galactic republic. The taxation of
                trade routes to outlying star systems is in dispute.
              </p>
              <p>
                battleships, the greedy trade federation has stopped all
                shipping to the small planet of Naboo.
              </p>
              <p>
                While the congress of the republic endlessly debates this
                alarming chain of events, the supreme chancellor has secretly
                dispatched two jedi knights, the guardians of peace and justice
                in the galaxy,to settle the conflict....
              </p>
              <IntroSubtitle>May the force be with you! ...</IntroSubtitle>
            </IntroContent>
          </ContentWrapper>
        </IntroSection>
        <IntroButton
          onClick={() => {
            navigate("/");
          }}
        >
          ENTER THE UNIVERSE
          <ArrowsIcon />
        </IntroButton>
        <Volume />
      </IntroContainer>
    </IntroWrapper>
  );
}

export default Introduction;
