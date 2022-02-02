import React from "react";

const TeamCard = () => {
    return <div class="card">
    <div class="img-box">
      <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
    </div>
    <div class="content">
      <div class="details">
        <h2>Alina Smith<br/>
          <span>Senior Designer</span>
        </h2>
        <ul class="sci">
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>;
}
export default TeamCard;