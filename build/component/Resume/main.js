var Resume = React.createClass({displayName: "Resume",
    render: function() {
        var header_style = {
            backgroundImage: this.props.resume.background_image ? "url(link)".replace('link', this.props.resume.background_image) : ""
        }

        return (
            React.createElement("div", {className: "resume-container"}, 
                React.createElement("header", {style: header_style}, 
                    React.createElement("img", {className: "avatar", src: this.props.resume.avatar})
                ), 
                React.createElement(BasicInfo, {basicinfo: this.props.resume.basicinfo}), 
                React.createElement(ExperienceList, {type: "学习经历", experiences: this.props.resume.Educations}), 
                React.createElement(ExperienceList, {type: "实习经历", experiences: this.props.resume.InternExperiences}), 
                React.createElement(ExperienceList, {type: "项目经验", experiences: this.props.resume.ProjectExperience})
            )
        )
    }
});

var BasicInfo = React.createClass({displayName: "BasicInfo",
    render: function(){

        return (
            React.createElement("section", {className: "basicinfo"}, 
                React.createElement("div", {className: "text-info name"}, 
                    this.props.basicinfo.name
                ), 
                React.createElement("div", {className: "text-info description"}, 
                    this.props.basicinfo.description
                ), 
                React.createElement("div", {className: "text-info"}, 
                    React.createElement("i", {className: "fa fa-university"}), 
                    this.props.basicinfo.school, "·", this.props.basicinfo.profession
                ), 
                React.createElement("div", {className: "text-info"}, 
                    React.createElement("i", {className: "fa fa-user"}), 
                    this.props.basicinfo.sex, "·", this.props.basicinfo.education, "·", this.props.basicinfo.workage
                ), 
                React.createElement("div", {className: "phone text-info inline-block"}, 
                    !this.props.basicinfo.phone ? "" :
                        React.createElement("div", null, 
                            React.createElement("i", {className: "fa fa-phone"}), 
                            React.createElement("a", {href: "tel:" + this.props.basicinfo.phone}, this.props.basicinfo.phone)
                        )
                    
                ), 
                React.createElement("div", {className: "email text-info inline-block"}, 
                    !this.props.basicinfo.email ? "" :
                        React.createElement("div", null, 
                            React.createElement("i", {className: "fa fa-envelope-o"}), 
                            React.createElement("a", {href: "mailto:" + this.props.basicinfo.email}, this.props.basicinfo.email)
                        )
                    
                )
            )
        )
    }
})

var ExperienceList = React.createClass({displayName: "ExperienceList",
    render: function(){
        return (
            React.createElement("section", {className: "experiencelist"}, 
                React.createElement("div", {className: "experience-type"}, 
                    this.props.type
                ), 
                this.props.experiences.map(function(experience){
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
        return (
            React.createElement("section", {className: "experience"}, 
                React.createElement("div", {className: "item"}, 
                    (function(icon){
                        if(icon && icon != ''){
                            return (
                                React.createElement("div", {className: "icon fl"}, 
                                    React.createElement("img", {src: icon})
                                )
                            )
                        }
                    })(this.props.experience.icon), 

                    React.createElement("div", {className: "fl name-title"}, 
                        React.createElement("div", {className: "name"}, 
                            React.createElement("a", {href: this.props.experience.name_link}, this.props.experience.name), 
                            !this.props.experience.name_link ? "" :
                                React.createElement("i", {className: "fa fa-link"})
                            
                        ), 
                        React.createElement("div", {className: "title"}, 
                            this.props.experience.title
                        )
                    ), 
                    React.createElement("div", {className: "fr time-location"}, 
                        React.createElement("div", {className: "time"}, 
                            this.props.experience.time
                        ), 
                        React.createElement("div", {className: "location"}, 
                            !this.props.experience.location ? "" :
                                React.createElement("div", null, 
                                    React.createElement("i", {className: "fa fa-map-marker"}), 
                                    this.props.experience.location
                                )
                            
                        )
                    )
                ), 
                React.createElement("div", {className: "description"}, 
                    this.props.experience.description
                )

            )
        )
    }
})

fetch('/resume/data/resume.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    React.render( React.createElement(Resume, {resume: json}) , document.getElementById('container'));
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
