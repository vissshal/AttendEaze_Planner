import React from "react";
import Card from "./Card";
export default function About() {
  return (
    <div className="about">
      <p className="about-heading">WELCOME TO TIMETABLE MANAGER</p>
      <p className="main-heading">IITG SLOT SYSTEM</p>
      <p className="about-paragraph">
        The idea was originally conceived due to the slot system here at IITG.
        There are slots A, A1, B etc which have their pre-assigned days and
        times set in the common timetable. Instructors simply announce their
        respective slots and the entire timetable for a course gets generated
        therein. Due to this neat arrangement, scheduling assistant allows the
        users to easily create their academic schedule and also maintain
        attendance record.
      </p>
      <p className="main-heading">ABOUT DEVELOPER</p>
      <p className="about-paragraph">
        My name is Vishal Kumar and I'm currently a final year student in the
        department of Mechanical Engineering at IIT Guwahati. This project has
        been created with an intention of using a database management system
        tool along with React to build something that is of actual utility and
        importance to the user (Our fellow students).
      </p>
      <div className="social-follows">
        <div className="cards">
          <Card
            imgadd="VishalKumar.jpg"
            devname="Vishal Kumar"
            linkedin="https://www.linkedin.com/in/vishaliitg/"
            emailid="vishal200104117@iitg.ac.in"
            phone="7322976996"
          />
        </div>
      </div>
    </div>
  );
}
