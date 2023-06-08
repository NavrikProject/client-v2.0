import React from "react";
import styled from "styled-components";
import "./Learn.css";
const Section = styled.section`
  width: 76% !important;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin: 20px;
  width: 300px;
  height: 130px;
  display: table;
  border: 5px solid #111;
  margin: 50px auto;
  padding: 20px;
  position: relative;
  border-radius: 30px;
  &:after,
  &:before {
    content: "";
    position: absolute;
    font-family: fontAwesome;
    font-size: 50px;
    color: #111;
    background: #fff;
  }

  &:after {
    content: "\f10d";
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    box-shadow: 10px 10px 0 #fff;
  }
  &:before {
    content: "\f10e";
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
    box-shadow: -10px -10px 0 #fff;
  }
`;
const Items = styled.div`
  margin: 20px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const DescriptionRight = styled.p`
  font-size: 14px;
  text-align: right;
`;
const ContentDiv = styled.div``;
const Testimonial = styled.div``;
const Blockquote = styled.blockquote`
  margin: 10px 10px 0;
  background: #efefef;
  padding: 20px 60px;
  position: relative;
  border: none;
  border-radius: 8px;
  font-style: italic;
  &:after, &:before{
   content: "\201C";
  position: absolute;
  font-size: 80px;
  line-height: 1;
  color: #757f9a;
  font-style: normal;} &:before{content: '\f10e';
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
      box-shadow: -10px -10px 0 #fff;}
`;
const MentorRe = () => {
  return (
    <Section>
      <div id="contentDiv">
        <div class="testimonialDiv">
          <blockquote>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </blockquote>
          <div></div>
        </div>
        <div class="testimonialDiv">
          <blockquote>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          </blockquote>
          <div></div>
        </div>
        <div class="testimonialDiv">
          <blockquote>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Vivamus sagittis lacus vel
          </blockquote>
          <div></div>
        </div>
      </div>
      {/* <Items>
        <Wrapper>
          <div>
            <div>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus odio adipisci ducimus? Impedit est dolore maxime
                unde repudiandae blanditiis veritatis accusamus, in fugit
                excepturi s
              </Description>
              <DescriptionRight>--Mahesh</DescriptionRight>
            </div>
          </div>
        </Wrapper>
      </Items>
      <Items>
        <Wrapper>
          <div>
            <div>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus odio adipisci ducimus? Impedit est dolore maxime
                unde repudiandae blanditiis veritatis accusamus, in fugit
                excepturi s
              </Description>
              <DescriptionRight>--Mahesh</DescriptionRight>
            </div>
          </div>
        </Wrapper>
      </Items>
      <Items>
        <Wrapper>
          <div>
            <div>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus odio adipisci ducimus? Impedit est dolore maxime
                unde repudiandae blanditiis veritatis accusamus, in fugit
                excepturi s
              </Description>
              <DescriptionRight>--Mahesh</DescriptionRight>
            </div>
          </div>
        </Wrapper>
      </Items> */}
    </Section>
  );
};

export default MentorRe;
