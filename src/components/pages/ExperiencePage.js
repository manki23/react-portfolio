import React, { useState } from "react";
import styled from "styled-components";

const StyledExperiencePage = styled.div`
  padding: 100px 0px;
  margin-left: 87px;
  .content {
    display: grid;
    grid-template-columns: 1fr 3fr;
    .job-tabs {
      button {
        max-width: 90px;
        height: 42px;
        min-width: 100%;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-left: 2px solid ${(props) => props.theme.colors.appLightestNavyColor};
        background-color: transparent;
        color: ${(props) => props.theme.colors.appSlateColor};
        font-family: monospace;
        font-size: 15px;
        text-align: left;
        padding: 10px;

        cursor: pointer;
        border: 0px;
        border-radius: 0px;
        border-left: 2px solid ${(props) => props.theme.colors.appLightestNavyColor};
      }

      button:hover, .selected {
        color: ${(props) => props.theme.colors.appGreenColor};
        border-left: 2px solid ${(props) => props.theme.colors.appGreenColor};
      }
      
      button:hover {
        background-color: ${(props) => props.theme.colors.appLightestNavyColor};
      }
    }

    .job-description {
        padding: 10px 5px;
      h3 {
        margin: 0px;
        margin-bottom: 2px;
      }
      p {
        font-family: monospace;
        font-size: 0.6em;
        margin-top: 0px;
        margin-bottom: 25px;
      }
      ul {
        margin: 0px;
        padding: 0px;
        li {
          list-style-type: none;
          font-size: 18px;
          position: relative;
          padding-left: 30px;
          margin-bottom: 10px;
        }
        li::before {
          content: "▹";
          position: absolute;
          left: 0px;
          color: ${(props) => props.theme.colors.appGreenColor};
        }
      }
      a {
          color: ${(props) => props.theme.colors.appGreenColor};
      }
    }
  }
`

const JobContent = ({
  content = [],
  title = "",
  companyName = "",
  companyLink = "",
  timeframe = "",
  hidden = true,
}) => {
  return (
    <div hidden={hidden}>
      <h3>
        {title}{" "}
        <a href={companyLink} target="_blank">
          @ {companyName}
        </a>
      </h3>
      <p>{timeframe}</p>
      <div>
        <ul>
          {content.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const [tab, setTab] = useState(0);

  return (
    <StyledExperiencePage id="experience-page">
      <h2>Where I've Worked</h2>
      <div className="content slate-color">
        <div className="job-tabs">
          <button className={tab == 0 ? "selected" : ""} onClick={() => setTab(0)}>
            Pongo
          </button>
          <button className={tab == 1 ? "selected" : ""} onClick={() => setTab(1)}>
            Dauphine Junior Consulting
          </button>
          <button className={tab == 2 ? "selected" : ""} onClick={() => setTab(2)}>
            Pongo Internship
          </button>
        </div>
        <div className="job-description">
        <JobContent
            content={["test", "one", "two", "three"]}
            title="Mission fullstack Laravel"
            companyName="Dauphine Junior Consulting"
            companyLink="https://dauphine-junior-consulting.com/paris/"
            timeframe="April 2021"
            hidden={tab != 1}
          />
          <JobContent
            content={["test", "one", "two", "three"]}
            title="Laravel Angular Ionic fullstack developper"
            companyName="Pongo"
            companyLink="https://www.heypongo.com/"
            timeframe="November 2020 -  August 2021"
            hidden={tab != 0}
          />
          <JobContent
            content={["test", "one", "two", "three"]}
            title="Laravel backend internship"
            companyName="Pongo"
            companyLink="https://www.heypongo.com/"
            timeframe="May - October 2020"
            hidden={tab != 2}
          />
        </div>
      </div>
    </StyledExperiencePage>
  );
};

export default ExperiencePage;
