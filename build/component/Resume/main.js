var Resume = React.createClass({displayName: "Resume",
    render: function() {


        return (
            React.createElement("div", {className: "resume-container"}, 
                React.createElement("header", null, 
                    React.createElement("img", {className: "avatar", src: this.props.resume.avatar})
                ), 
                React.createElement(BasicInfo, {basicinfo: this.props.resume.basicinfo}), 
                React.createElement(ExperienceList, {type: "学习经历", experiences: this.props.resume.Educations}), 
                React.createElement(ExperienceList, {type: "实习经历", experiences: this.props.resume.InternExperiences})
            )
        )
    }
});

var BasicInfo = React.createClass({displayName: "BasicInfo",
    render: function(){

        return (
            React.createElement("section", {className: "basicinfo"}, 
                React.createElement("div", {className: "name"}, 
                    this.props.basicinfo.name
                ), 
                React.createElement("div", {className: "description"}, 
                    this.props.basicinfo.description
                ), 
                React.createElement("div", {className: "school"}, 
                    this.props.basicinfo.school
                ), 
                React.createElement("div", {className: "profession"}, 
                    this.props.basicinfo.profession
                ), 
                React.createElement("div", {className: "sex"}, 
                    this.props.basicinfo.sex
                ), 
                React.createElement("div", {className: "education"}, 
                    this.props.basicinfo.education
                ), 
                React.createElement("div", {className: "workage"}, 
                    this.props.basicinfo.workage
                ), 
                React.createElement("div", {className: "phone"}, 
                    this.props.basicinfo.phone
                ), 
                React.createElement("div", {className: "email"}, 
                    this.props.basicinfo.email
                )
            )
        )
    }
})

var ExperienceList = React.createClass({displayName: "ExperienceList",
    render: function(){
        console.log('ExperienceList-->')
        console.log(this.props.experiences)
        // this.props.experiences.forEach(function(experience){
        //     console.log (experience)
        // })
        return (
            React.createElement("section", null, 
                React.createElement("div", {className: "experience-type"}, 
                    this.props.type
                ), 
                this.props.experiences.map(function(experience){
                    console.log('map')
                    console.log (experience)
                    return (
                        React.createElement(Experience, {experience: experience})
                    )
                })
            )
        )
    }
})

var Experience  = React.createClass({displayName: "Experience",
    render: function(){
        console.log ('Experience')
        console.log(this.props.experience)
        return (
            React.createElement("section", {className: "experience"}, 
                React.createElement("div", {className: "icon"}, 
                    React.createElement("img", {src: this.props.experience.icon})
                ), 
                React.createElement("div", {className: "title"}, 
                    React.createElement("a", {href: this.props.experience.title_link}, this.props.experience.title)
                ), 
                React.createElement("div", {className: "description"}, 
                    this.props.experience.description
                ), 
                React.createElement("div", {className: "time"}, 
                    this.props.experience.time
                ), 
                React.createElement("div", {className: "location"}, 
                    this.props.experience.location
                )
            )
        )
    }
})

fetch('/resume.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
    React.render( React.createElement(Resume, {resume: json}) , document.getElementById('container'));
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
