import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const TabsContainer = styled.div`
  display: flex;
`;
const StyledTabs = styled(Link)`
  background: ${(props) => (props.active ? "green" : "white")};
  border: 2px solid silver;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: black;
  text-decoration: none;
  justify-content: flex-start;
  min-width: ${(props) => (props.w ? props.w * 8 + "vw" : "8vw")};
  margin-left: 5px;
  margin-top: 10px;
  padding: 0 5px 0 5px;
  text-align: center;
`;

const tabArray = [];
// TODO
const addTab = ({ tabArray }) => {
  const tabName = "tab" + tabArray.length;
  const newTab = (
    <StyledTabs to={tabName} w={0.5}>
      TAB#{tabName}
    </StyledTabs>
  );
  tabArray.splice(0, 0, newTab);
};
tabArray.push(
  <StyledTabs to="#" w={0.5} onClick={addTab(tabArray)}>
    {" "}
    +{" "}
  </StyledTabs>
);

const deleteTab = () => null;
// user.tasks = [];
// user.addTask = function(task){
//     this.tasks.push(task);
// }
// user.listTasks = function(){
//     this.tasks.forEach(element => { console.log(element.title);

//     });
// }
// return user;

export default class Tabs extends React.Component {
  render() {
    return (
      <TabsContainer>
        {tabArray}
        {/* <StyledTabs to="tab1" tabid={1} active>
          Tab#1
        </StyledTabs>
        <StyledTabs to="tab2" tabid={2}>
          Tab#2
        </StyledTabs>
        <StyledTabs to="tab3" tabid={3}>
          Tab#3
        </StyledTabs>
        <StyledTabs to="tab4" tabid={4}>
          Tab#4
        </StyledTabs> */}
      </TabsContainer>
    );
  }
}
