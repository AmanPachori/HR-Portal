import React from 'react'
import './dashboard.css'
import MaterialTable from "material-table";
function dashboard() { 
      
    return (
        
        <div className="dashboard">
            <div className="task-bar">
                <h1> HR Portal</h1>
                <h2>Dashboard</h2>
                <div className="user">
                <img className="avatar" src='https://img.icons8.com/clouds/100/000000/user.png' alt='user'/>
                <h3 className="username">username</h3>
            </div>

            </div>
            <div className="container">
            <div className="nav-bar">
            <div className="Icons">
                <button href="#" className="icon home"><img src="https://img.icons8.com/material-sharp/36/000000/home.png"/></button>
                <button href="#" className="icon dashboard" > <img  src="https://img.icons8.com/material/36/000000/dashboard-layout.png"/></button>
                <button href="#" className="icon profile"><img src="https://img.icons8.com/material-rounded/36/000000/user.png"/></button>
            </div>
            </div>
            <div className="main-area">
               <MaterialTable
               title= "Candidate List"
               options={{
                search: true,
                selection: false,
                 paging: false,
              }}
               columns={[
                { title: 'Name', field: 'name' },
                { title: 'Job profile', field: 'jobprofile' },
                { title: 'Resume', field: 'resume' },
                { title: 'College', field: 'college' },
                { title: 'Branch',field: 'branch' },
                { title: 'Experience', field: 'experience' },
              ]}
              data={[
                { name: 'John doe', jobprofile: 'Software developer', resume: 'available', college: 'Abc', branch:'It',experience:2 },
                { name: 'Bran', jobprofile: 'Frontend developer', resume: 'not-available', college: 'Abc', branch:'cs',experience:0 },
                { name: 'Rick', jobprofile: 'Backend developer', resume: 'available', college: 'Xyz', branch:'Mechanical',experience:5 },
                { name: 'Tony', jobprofile: 'tester', resume: 'not-available', college: 'Xyz', branch:'It',experience:2 },
                { name: 'Bran', jobprofile: 'Frontend developer', resume: 'not-available', college: 'Abc', branch:'cs',experience:0 },
                { name: 'Tony', jobprofile: 'tester', resume: 'not-available', college: 'Xyz', branch:'It',experience:2 },
              ] }
               />
            </div>
            </div>
        </div>
    )
}

export default dashboard
