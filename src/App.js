import './App.css';
import { useState, useEffect } from 'react';
import { PROJECTS, CALENDAR } from './data/data';

import { Header } from './components/Header/Header';
import { SideNav } from './components/SideNav/SideNav';
import { BoardContainer } from './components/BoardContainer/BoardContainer';

const arrCountries = ['All', ...new Set(PROJECTS.map(element => element._country))];
const arrSectors = ['All', ...new Set(PROJECTS.map(element => element._team))];
let todayString = new Date().toISOString().slice(0, 10);
let targetDate = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 28)
let targetString = targetDate.toISOString().slice(0, 10);

function App() {

  const [board, setBoard] = useState('Team Overview');
  const [allowedProjects, setAllowedProjects] = useState(['All', ...new Set(PROJECTS.map(element => element._name))]);
  const [country, setCountry] = useState('All');
  const [sector, setSector] = useState('All');
  const [selectedProject, setSelectedProject] = useState(allowedProjects[0]);
  const [startDate, setStartDate] = useState(todayString);
  const [endDate, setEndDate] = useState(targetString);

  useEffect(() => {
    board === "Project Viewer"
      ? setAllowedProjects([...new Set(PROJECTS.map(element => element._name))])
      : setAllowedProjects(['All', ...new Set(PROJECTS.map(element => element._name))]);
    setCountry('All');
    setSector('All');

  }, [board])

  useEffect(() => {
    setSelectedProject(allowedProjects[0]);
    if(document.getElementById('selectProject') !== null){
      document.getElementById('selectProject').value = allowedProjects[0];
    }
  }, [allowedProjects])

  useEffect(() => {

    let updatedProjects =[];
    if((country === 'All') && (sector === 'All')){
      updatedProjects = [...new Set(PROJECTS.map(element => element._name))];
    } else if((country === 'All') && (sector !== 'All')){
      updatedProjects = [...new Set(PROJECTS.filter(element => element._team === sector).map(element => element._name))];
    } else if((country !== 'All') && (sector === 'All')){
      updatedProjects = [...new Set(PROJECTS.filter(element => element._country === country).map(element => element._name))];
    } else if((country !== 'All') && (sector !== 'All')){
      updatedProjects = [...new Set(PROJECTS.filter(element => (element._country === country) && (element._team === sector)).map(element => element._name))];
    }

    if(board !== "Project Viewer"){
      updatedProjects.unshift('All');
  }

  setAllowedProjects(updatedProjects)
  }, [country, sector/*, board*/])

  useEffect(() => {

    let tableBody = document.getElementById('cal-tablebody');

    if(tableBody){

      while(tableBody.hasChildNodes())
      {
      tableBody.removeChild(tableBody.firstChild);
      }

      let arrAllowedEvents = CALENDAR.filter(element => (Date.parse(element._date) >= Date.parse(startDate)) && (Date.parse(element._date) <= Date.parse(endDate)));
      let arrCurrentProjectListCalendar = allowedProjects.filter(element => arrAllowedEvents.map(element => element._name).includes(element));

      if(selectedProject !== 'All'){
        arrCurrentProjectListCalendar = selectedProject;
      }

      arrAllowedEvents = arrAllowedEvents.filter(element => arrCurrentProjectListCalendar.includes(element._name));

      arrAllowedEvents.forEach(element => {
        let newTableRow = tableBody.insertRow(-1);
        let newProjectEntry = newTableRow.insertCell(0);
        let newEventEntry = newTableRow.insertCell(1);
        let newDateEntry = newTableRow.insertCell(2);
        let newLinkEntry = newTableRow.insertCell(3);

        newProjectEntry.classList.add("td-project");
        newEventEntry.classList.add("td-event");
        newDateEntry.classList.add("td-date");
        newLinkEntry.classList.add("td-link");

        newProjectEntry.classList.add("td-cal");
        newEventEntry.classList.add("td-cal");
        newDateEntry.classList.add("td-cal");
        newLinkEntry.classList.add("td-cal");

        newProjectEntry.innerHTML= element._name;
        newEventEntry.innerHTML = element._event;
        newDateEntry.innerHTML = element._date;
        newLinkEntry.innerHTML = 'DMS';
      })

      //console.log(arrCurrentProjectListCalendar)
      //console.log(selectedProject)


    }

  }, [startDate, endDate, allowedProjects, selectedProject])

  useEffect(() => {

    let tableBody = document.getElementById('pf-tablebody');

    if(tableBody){

      while(tableBody.hasChildNodes())
      {
      tableBody.removeChild(tableBody.firstChild);
      }

      let projectObject = PROJECTS.filter(element => element._name === selectedProject);

      projectObject.forEach(element => {

        let newTableRow = tableBody.insertRow(-1);
        let newBMZ = newTableRow.insertCell(0);
        let newMeasure = newTableRow.insertCell(1);
        let newGrants = newTableRow.insertCell(2);
        let newSBF = newTableRow.insertCell(3);

        newBMZ.innerHTML = element._bmz;
        newMeasure.innerHTML = element._measure.toLocaleString('de', {style: 'currency', currency: 'EUR'});
        newGrants.innerHTML = element._ve.toLocaleString('de', {style: 'currency', currency: 'EUR'});
        newSBF.innerHTML = element._sbf.toLocaleString('de', {style: 'currency', currency: 'EUR'});

        newBMZ.classList.add("td-finminor")
        newMeasure.classList.add("td-finminor")
        newGrants.classList.add("td-finminor")
        newSBF.classList.add("td-finminor")
        newMeasure.classList.add('td-financials');
        newGrants.classList.add('td-financials');
        newSBF.classList.add('td-financials');
      })

      let totalTableRow = tableBody.insertRow();
      let total = totalTableRow.insertCell(0);
      let totalMeasure = totalTableRow.insertCell(1);
      let totalGrants = totalTableRow.insertCell(2);
      let totalSBF = totalTableRow.insertCell(3);

      total.innerHTML = "";
      totalMeasure.innerHTML = projectObject.map(element => element._measure).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
      totalGrants.innerHTML = projectObject.map(element => element._ve).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
      totalSBF.innerHTML = projectObject.map(element => element._sbf).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});

      totalMeasure.classList.add("table-total");
      totalGrants.classList.add("table-total");
      totalSBF.classList.add("table-total")
      totalMeasure.classList.add("td-financials");
      totalGrants.classList.add("td-financials");
      totalSBF.classList.add("td-financials")
    }
  }, [selectedProject])

  const handleChangeBoard = (event) => {
    setBoard(event.target.title);
    setStartDate(todayString);
    setEndDate(targetString);
    
  }

  const handleChangeFilters = (event) => {

    if(event.target.id === "selectCountry"){
      setCountry(event.target.value);
    }
    if(event.target.id === "selectSector"){
      setSector(event.target.value);
    } 
  }

  const handleChangeProject = (event) => {
    setSelectedProject(event.target.value);
  }

  const handleChangeCalendar = (event) => {

    if(event.target.id === "Start"){
      setStartDate(event.target.value)
    } else if(event.target.id === "End"){
      setEndDate(event.target.value)
    }
  }


  return (
    <div className="App">
      <SideNav boardHandler={handleChangeBoard}/>
      <Header 
        board={board}
        countries={arrCountries} 
        sectors={arrSectors}
        countryState={country}
        sectorState={sector}
        projects={allowedProjects}
        selectedProject={selectedProject}
        filterHandler={handleChangeFilters}
        projectHandler={handleChangeProject}
        calendarHandler={handleChangeCalendar}
        iniStartDate={todayString}
        iniEndDate={targetString}/>
      <BoardContainer
        board={board} 
        selectedProject={selectedProject}/>
    </div>
  );
}

export default App;


/*

import { FilterSelect } from './components/FilterSelect/FilterSelect'
import { ProjectFilter } from './components/ProjectFilter/ProjectFilter'

const[secondOptions, setSecondOptions] = useState([]);

  const projectChange = event => {
    if (event.target.value === "Germany"){
      setSecondOptions(['eins', 'zwei'])
    } else if(event.target.value === "India"){
      setSecondOptions(['ek', 'do'])
    } else {
      setSecondOptions([])
    }
  }

<h1>Working with Filters</h1>
<FilterSelect options={['All', 'Germany', 'India']} onChange={projectChange}/>
<ProjectFilter options={secondOptions} />

*/


/*
  useEffect(() => {
    board === "Project Viewer"
      ? setAllowedProjects([...new Set(PROJECTS.map(element => element._name))])
      : setAllowedProjects(['All', ...new Set(PROJECTS.map(element => element._name))]);
    setCountry('All');
    setSector('All');
    //document.getElementById('selectCountry').value = 'All';
    //document.getElementById('selectSector').value = 'All';
  }, [board])*/


  /*try{
      document.getElementById('selectProject').value = allowedProjects[0];
    } catch(e){
      console.log(e)
    }*/


