var Resume = React.createClass({
    render: function() {
        var header_style = {
            backgroundImage: this.props.resume.background_image ? "url(link)".replace('link', this.props.resume.background_image) : ""
        }

        return (
            <div className="resume-container">
                <header style={header_style}>
                    <img className="avatar" src={this.props.resume.avatar} />
                </header>
                <BasicInfo basicinfo={this.props.resume.basicinfo}/>
                <ExperienceList type="学习经历" experiences={this.props.resume.Educations}/>
                <ExperienceList type="实习经历" experiences={this.props.resume.InternExperiences}/>
                <ExperienceList type="项目经验" experiences={this.props.resume.ProjectExperience}/>
            </div>
        )
    }
});

var BasicInfo = React.createClass({
    render: function(){

        return (
            <section className="basicinfo" >
                <div className="text-info name">
                    {this.props.basicinfo.name}
                </div>
                <div className="text-info description">
                    {this.props.basicinfo.description}
                </div>
                <div className="text-info">
                    <i className="fa fa-university"></i>
                    {this.props.basicinfo.school}·{this.props.basicinfo.profession}
                </div>
                <div className="text-info">
                    <i className="fa fa-user"></i>
                    {this.props.basicinfo.sex}·{this.props.basicinfo.education}·{this.props.basicinfo.workage}
                </div>
                <div className="phone text-info inline-block">
                    {!this.props.basicinfo.phone ? "" :
                        <div>
                            <i className="fa fa-phone"></i>
                            <a href={"tel:" + this.props.basicinfo.phone}>{this.props.basicinfo.phone}</a>
                        </div>
                    }
                </div>
                <div className="email text-info inline-block">
                    {!this.props.basicinfo.email ? "" :
                        <div>
                            <i className="fa fa-envelope-o"></i>
                            <a href={"mailto:" + this.props.basicinfo.email}>{this.props.basicinfo.email}</a>
                        </div>
                    }
                </div>
            </section>
        )
    }
})

var ExperienceList = React.createClass({
    render: function(){
        console.log('ExperienceList-->')
        console.log(this.props.experiences)
        // this.props.experiences.forEach(function(experience){
        //     console.log (experience)
        // })
        return (
            <section className="experiencelist">
                <div className="experience-type">
                    {this.props.type}
                </div>
                {this.props.experiences.map(function(experience){
                    console.log('map')
                    console.log (experience)
                    return (
                        <Experience experience={experience}/>
                    )
                })}
            </section>
        )
    }
})

var Experience  = React.createClass({
    render: function(){
        console.log ('Experience')
        console.log(this.props.experience)
        return (
            <section className="experience">
                <div className="item">
                    {(function(icon){
                        if(icon && icon != ''){
                            return (
                                <div className="icon fl">
                                    <img src={icon}/>
                                </div>
                            )
                        }
                    })(this.props.experience.icon)}

                    <div className="fl name-title">
                        <div className="name">
                            <a href={this.props.experience.name_link}>{this.props.experience.name}</a>
                            {this.props.experience.name_link && this.props.experience.name_link != "" ?
                                <i className="fa fa-link"></i> : ""}
                        </div>
                        <div className="title">
                            {this.props.experience.title}
                        </div>
                    </div>
                    <div className="fr time-location">
                        <div className="time">
                            {this.props.experience.time}
                        </div>
                        <div className="location">
                            {(function renderLocation(location){
                                if(location && location != ''){
                                        return (
                                            <div>
                                                <i className="fa fa-map-marker"></i>
                                                {location}
                                            </div>
                                        )
                                    }
                            })(this.props.experience.location)}
                        </div>
                    </div>
                </div>
                <div className="description">
                    {this.props.experience.description}
                </div>

            </section>
        )
    }
})

fetch('/resume/data/resume.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
    React.render( <Resume resume={json} /> , document.getElementById('container'));
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
