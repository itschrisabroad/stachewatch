import React, { Component } from 'react';
import Head from 'next/head'
import styled from 'styled-components'
import Select from 'react-select'
import moment from 'moment'

import Picture from '../components/Picture'

const PageWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 80px;
  box-sizing: border-box;
  background: #f7f7f7;

  @media all and (max-width: 860px) {
    padding: 0 24px;
    flex-flow: column nowrap;
  }
`;

const Sidebar = styled.article`
  width: calc(100vh - 32px);
  max-width: 600px;
  height: calc(100vh - 32px);
  max-height: 600px;
  display: flex;
  flex-flow: column nowrap;

  @media all and (max-width: 860px) {
    width: calc(100vw - 32px);
    height: calc(100vw - 32px);
  }
`;

const SidebarTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: #0f0f0f;
  margin: 0 0 1rem 0;
`;

const SidebarItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
`;

const SidebarItem = styled.li`
  width: 100%;
  max-width: 300px;
  list-style: none;
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  border-radius: 4px;
  background: #fff;
  padding: 16px 16px 8px 8px;
  box-shadow: 0 2px 16px -2px rgba(15,15,15,0.32);
  margin-bottom: 16px;
`;

const SidebarItemLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #0f0f0f;
  margin: 0 0 4px 8px;
`;

const StyledDropdown = styled(Select)`
  width: 100%;
  height: 40px;
  border: none;
  background: #fff;

  & .dropdown__control {
    border: transparent;
  }
`

const SidebarItemButton = styled.a`
  height: 40px;
  display: inline-flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 1rem;
  color: #9f9f9f;
  text-decoration: none;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const AbsolutePicture = styled.div`
  position: absolute;

  & .pictureWrapper {
    margin-right: 0;
  }

  @media all and (max-width: 860px) {
    & .pictureWrapper {
      margin-bottom: 0;
      margin-top: 0;
    }  
  }
`;

const CloseIcon = styled.i`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #fff;
  background-color: rgba(15,15,15,.064);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const comparisons = [
  {
    label: 'Burt Reynolds',
    value: 'https://img.huffingtonpost.com/asset/56436373290000da004dcbc3.jpeg'
  },
  {
    label: 'Tom Selleck',
    value: 'https://content.artofmanliness.com/uploads/2009/09/tom-selleck.jpg'
  },
  {
    label: 'Nick Offerman',
    value: 'https://www.birchbox.com/images/uploads/how_to_grow_a_mustache_nick_offerman.jpg'
  }
]

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      currentDay: {
        label: moment().format('MMMM Do'),
        value: moment()
      },
      dayDiff: 0,
      isComparing: false,
    }
  }

  componentDidMount() {
    let start = moment('2018-10-31')
    let end = moment()
    var days = [];
    var day = start;

    while (day <= end) {
        days.push({label: day.format('MMMM Do'), value: day.toDate()});
        day = day.clone().add(1, 'd');
    }
    let dayValue = moment.duration(end.diff(moment('2018-10-31')))
    const dayDiff = dayValue._data.days
    console.log(dayValue._data.days);
    console.log(days);
    this.setState({
      days,
      dayDiff
    })

  }

  handleChange(selectedOption) {
    console.log(selectedOption);
    let selectedDay = selectedOption.value
    let selectedMoment = moment(selectedDay)
    let dayValue = moment.duration(selectedMoment.diff(moment('2018-10-31')))
    const dayDiff = dayValue._data.days
    this.setState({
      currentDay: selectedOption,
      dayDiff
    })
  }

  handleCompare(selectedOption) {
    console.log(selectedOption);
    this.setState({
      isComparing: true,
      currentComparison: selectedOption
    })
  }

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>Stachewatch</title>
        </Head>
        <Picture image={`/static/${moment(this.state.currentDay.value).format('YYYYMMDD')}.jpg`}/>
        <Sidebar>
          <SidebarTitle>
            stachewatch
          </SidebarTitle>
          <SidebarItems>
            <SidebarItem>
              <SidebarItemLabel>Day {this.state.dayDiff}</SidebarItemLabel>
              <StyledDropdown
                value={this.state.currentDay}
                onChange={this.handleChange.bind(this)}
                options={this.state.days}
                className="dropdown"
                classNamePrefix="dropdown"/>
            </SidebarItem>
            <SidebarItem>
              <SidebarItemLabel>Donate</SidebarItemLabel>
              <SidebarItemButton href="https://ca.movember.com/donate/details?memberId=13850264" target="blank">
                Movember
              </SidebarItemButton>
            </SidebarItem>
            <SidebarItem>
              <SidebarItemLabel>Compare</SidebarItemLabel>
              <StyledDropdown
                value={this.state.currentComparison}
                onChange={this.handleCompare.bind(this)}
                options={comparisons}
                placeholder="None selected"
                className="dropdown"
                classNamePrefix="dropdown"/>
            </SidebarItem>
          </SidebarItems>
            {this.state.isComparing &&
              <AbsolutePicture style={{position: 'absolute'}}>
                <CloseIcon className="material-icons" onClick={() => this.setState({ isComparing: false, currentComparison: ""})}>
                  close
                </CloseIcon>
                <Picture image={this.state.currentComparison.value}/>
              </AbsolutePicture>
            }
        </Sidebar>
      </PageWrapper>
    );
  }

}

export default Index;
