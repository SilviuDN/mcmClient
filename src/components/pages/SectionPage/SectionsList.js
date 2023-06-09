// import { useState } from 'react'
import SectionCard from "./SectionCard";
import { Component } from "react";

class SectionsList extends Component{

    constructor(){
        super()
        this.state={
            currentSection: '1',
            currentLecture: '1',
            refreshSectionsList: true,
        }
    }

    refreshSectionsList = () => {
        this.setState({
            refreshSectionsList: !this.refreshSectionsList
        })
    }

    setCurrentLecture = (sectionNumber, lectureNumber) => {
        this?.setState({currentSection: sectionNumber, currentLecture: lectureNumber})
    }

    setCurrentSection = (sectionNumber) => {
        this?.setState({currentSection: sectionNumber})
    }

    // to be refactored so after scrolling down, the lecture would be aligned on click - the current problem is generated by the this.state.currentLecture not changing
    scrollIntoViewCurrentLecture = () => {        
        const currentLectureID = `lecture${this.state.currentLecture}`
        const element = currentLectureID ? document.getElementById(currentLectureID) : null;
        if (element){
            element?.scrollIntoView({ behavior: "smooth", block: "center" }); 
        }
    }

    // TO BE ADDED WHEN THE SECTION'S ARE REVEALED
    scrollIntoViewCurrentSection = () => {
        const currentSectionID = `section${this.state.currentSection}`
        const element = currentSectionID ? document.getElementById(currentSectionID) : null;
        if (element){
            element?.scrollIntoView({ behavior: "smooth", block: "center" }); 
        }
    }

    componentDidUpdate(prevProps, prevState){
        if( prevState.currentLecture !== this.state.currentLecture){
            this.scrollIntoViewCurrentLecture()
        }
        if( prevState.currentSection !== this.state.currentSection && prevState.currentLecture === this.state.currentLecture){
            this.scrollIntoViewCurrentSection()
        }
    }


    render(){
        const {courseId, freeCourse, lecturesCount, sections, loggedUser, renderList, currentLecture, currentSection, setCurrentLecture, 
                currentVideo, setCurrentVideo} = this.props
        // const sectionsListOverflowStyle = loggedUser? {height:'80vh', overflowY:'scroll'} : {}
        return(
            // <div style={sectionsListOverflowStyle}>
            <div style={{height:'80vh', overflowY:'scroll'}}>
            {sections.map(sectionId => <SectionCard key={sectionId} 
                courseId={courseId} freeCourse={freeCourse} lecturesCount={lecturesCount}
                sectionId = {sectionId}  loggedUser={loggedUser} 
                renderList={renderList} 
                currentLecture={this.currentLecture} currentSection={this.currentSection}
                setCurrentLecture={this.setCurrentLecture} setCurrentSection={this.setCurrentSection}
                currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}
                refreshSectionsList={this.refreshSectionsList}/>)}
            {/* {sections.map(sectionId => <SectionCard key={sectionId} courseId={courseId} sectionId = {sectionId}  loggedUser={loggedUser} renderList={renderList}/>)} */}
            </div>
        )
    }
}



// const SectionsList = ({courseId, sections, loggedUser, renderList, currentLecture, currentSection, setCurrentLecture, currentVideo, setCurrentVideo}) => {

//     // const [changedList, setChangedList] = useState(false)


//     // const renderList = () =>{
//     //     // setChangedList( !changedList  )
//     //     setChangedList((prevStatus) => {
//     //         return !prevStatus
//     //     } )
//     // }

//     // SCROLL INTO VIEW THE CURRENT SECTION
//     // const currentSectionID = `section${currentSection}`
//     // const currentSectionID = `section${1}`
//     // const currentSectionID = `section${2}`
//     const currentSectionID = `section${3}`
//     console.log(currentSectionID)

//     const element = currentSectionID ? document.getElementById(currentSectionID) : null;
//     if (element){
//         console.log('heyheyhey')
//         element?.scrollIntoView(); 
//     }

//     return(
//         // <h1>LecturesList</h1>
//         <div style={{height:'40vh', overflowY:'scroll'}}>
//         {sections.map(sectionId => <SectionCard key={sectionId} courseId={courseId} sectionId = {sectionId}  loggedUser={loggedUser} 
//             renderList={renderList} 
//             currentLecture={currentLecture} currentSection={currentSection} setCurrentLecture={setCurrentLecture}
//             currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}/>)}
//         {/* {sections.map(sectionId => <SectionCard key={sectionId} courseId={courseId} sectionId = {sectionId}  loggedUser={loggedUser} renderList={renderList}/>)} */}
        
//         </div>
//     )
// }

export default SectionsList


