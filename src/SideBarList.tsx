import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import {
  EngineeringContext,
  EngineeringContextType,
} from "./EngineeringContext";
import { Collapse, List, ListItem } from "@material-ui/core";
import styled from "styled-components/macro";
import { SmallTag } from "./Tag";
import { sideBarData, levels } from "./data/data";
import { toUrl, getCompetencies } from "./helpers";

const StyledList = styled(List)`
  && {
    min-width: 300px;
    color: grey;
    a {
      text-decoration: none;
    }
    .active {
      color: white;
    }
    .nested {
      margin-left: 15px;
    }
    .list-item {
      height: 32px;
      margin-bottom: 8px;
    }
    .level.list-item {
      font-size: 20px;
      font-weight: bold;
    }
    .category.list-item {
      font-size: 16px;
      font-weight: bold;
      a {
        color: grey;
      }
    }
    .category.list-item.active {
      border-left: 3px solid #e72871;
      a {
        color: white;
      }
    }
    a {
      color: grey;
    }
    .competency.list-item {
      font-size: 16px;
    }
    .competency.list-item.active {
      a {
        color: white;
      }
    }
  }
`;

const SideBarList = () => {
  const {
    level,
    category,
    competency,
    specialism,
    setLevel,
    setCategory,
    setCompetency,
  } = useContext<EngineeringContextType>(EngineeringContext);
  const history = useHistory();

  const handleClickLevel = (levelName: string) => {
    setLevel(levelName);
    if (levelName === "Managing Principal" && category === "Overview") {
      setCategory("Delivery");
      setCompetency(getCompetencies("Delivery")[1]);
      history.push(
        toUrl(`${levelName}#${"Delivery"}-${getCompetencies("Delivery")[1]}`)
      );
    } else if (
      levelName === "Managing Principal" &&
      competency === "Narrative"
    ) {
      setCategory(category);
      setCompetency(getCompetencies(category)[1]);
      history.push(
        toUrl(`${levelName}#${category}-${getCompetencies(category)[1]}`)
      );
    } else history.push(toUrl(`${levelName}#${category}-${competency}`));
  };

  const handleClickCategory = (categoryName: string) => {
    setCategory(categoryName);

    if (level == "Managing Principal") {
      setCompetency(getCompetencies(categoryName)[1]);
    } else {
      setCompetency(getCompetencies(categoryName)[0]);
    }
  };

  const handleClickCompetency = (competencyName: string) => {
    setCompetency(competencyName);
  };

  return (
    <div>
      {levels.map((levelName: string) => (
        <StyledList className="list" key={levelName}>
          <ListItem
            button
            className={`level list-item ${levelName === level ? "active" : ""}`}
            onClick={() => handleClickLevel(levelName)}
          >
            {levelName}
          </ListItem>
          <Collapse in={level === levelName} timeout="auto" unmountOnExit>
            <List component="nav" className={"nested"}>
              {sideBarData.map((data: any) => (
                <span key={data.category}>
                  {
                    // Don't have Overview at MP level
                    (level !== "Managing Principal" ||
                      data.category !== "Overview") && (
                      <>
                        <Link
                          smooth
                          to={toUrl(
                            `#${data.category}-${
                              level == "Managing Principal"
                                ? getCompetencies(data.category)[1]
                                : getCompetencies(data.category)[0]
                            }`
                          )}
                        >
                          <ListItem
                            button
                            data-testid={`${levelName}-${data.category}`.toLowerCase()}
                            className={`category list-item ${
                              category === data.category ? "active" : ""
                            }`}
                            onClick={() => handleClickCategory(data.category)}
                          >
                            {data.category}
                          </ListItem>
                        </Link>
                        <Collapse
                          in={category === data.category}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {data.competencies.map(
                              (competencyName: string) =>
                                // Don't have Narrative at MP level
                                (level !== "Managing Principal" ||
                                  competencyName !== "Narrative") && (
                                  <Link
                                    smooth
                                    to={toUrl(
                                      `#${data.category}-${competencyName}`
                                    )}
                                    key={competencyName}
                                    onClick={() =>
                                      handleClickCompetency(competencyName)
                                    }
                                  >
                                    <ListItem
                                      key={competencyName}
                                      button
                                      className={`nested competency list-item ${
                                        competency === competencyName
                                          ? "active"
                                          : ""
                                      } `}
                                    >
                                      {competencyName}
                                      <SmallTag
                                        level={level}
                                        competency={competencyName}
                                        specialism={specialism}
                                      />
                                    </ListItem>
                                  </Link>
                                )
                            )}
                          </List>
                        </Collapse>
                      </>
                    )
                  }
                </span>
              ))}
            </List>
          </Collapse>
        </StyledList>
      ))}
    </div>
  );
};

export default SideBarList;
