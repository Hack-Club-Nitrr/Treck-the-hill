import TeamCard from "../Components/teamsCard";


const teams = () => {
  return <div className="team">
    <h1 className="teamInt">Meet Our Team</h1>
    <div className="A">
     <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
    <br/>
    <div className="B">
     <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
    </div>
  </div>;
};

export default teams;