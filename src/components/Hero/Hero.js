import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio.
      </SectionTitle>
      <SectionText>
        I am a solution-oriented engineer who is always striving for the
        optimization of the task at hand.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://linkedin.com/in/paolourciullo')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
