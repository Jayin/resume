var Resume = React.createClass({
    render: function() {


        return (
            <div className="resume-container">
                <header >
                    <img className="avatar" src={this.props.resume.avatar} />
                </header>
                <BasicInfo basicinfo={this.props.resume.basicinfo}/>
                <ExperienceList type="学习经历" experiences={this.props.resume.Educations}/>
                <ExperienceList type="实习经历" experiences={this.props.resume.InternExperiences}/>
            </div>
        )
    }
});

var BasicInfo = React.createClass({
    render: function(){

        return (
            <section className="basicinfo" >
                <div className="name">
                    {this.props.basicinfo.name}
                </div>
                <div className="description">
                    {this.props.basicinfo.description}
                </div>
                <div className="school">
                    {this.props.basicinfo.school}
                </div>
                <div className="profession">
                    {this.props.basicinfo.profession}
                </div>
                <div className="sex">
                    {this.props.basicinfo.sex}
                </div>
                <div className="education">
                    {this.props.basicinfo.education}
                </div>
                <div className="workage">
                    {this.props.basicinfo.workage}
                </div>
                <div className="phone">
                    {this.props.basicinfo.phone}
                </div>
                <div className="email">
                    {this.props.basicinfo.email}
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
            <section>
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
                <div className="icon">
                    <img src={this.props.experience.icon}/>
                </div>
                <div className="title">
                    <a href={this.props.experience.title_link}>{this.props.experience.title}</a>
                </div>
                <div className="description">
                    {this.props.experience.description}
                </div>
                <div className="time">
                    {this.props.experience.time}
                </div>
                <div className="location">
                    {this.props.experience.location}
                </div>
            </section>
        )
    }
})

fetch('/resume.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
    React.render( <Resume resume={json} /> , document.getElementById('container'));
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
