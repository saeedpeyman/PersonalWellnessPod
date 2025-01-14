import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Finance extends Component {
  render() {
    return (
      <div>
        <h2>Financial Welness</h2>
        <p>Manage personal budgets, and credits.</p>
        <section className="cardRow">
          <NavLink to="/budgeting">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0C2E4C" }}>
                <h3>Budget</h3>
              </div>
              <div className="cardContainer">
                <p>Create a new budget or manage other saved budgets.</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/goals">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0F4769" }}>
                <h3>Goals</h3>
              </div>
              <div className="cardContainer">
                <p>Set savings goals.</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/debt-repayment">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#075F69" }}>
                <h3>Debt Repayment Calculator</h3>
              </div>
              <div className="cardContainer">
                <p>Determine strategies for paying off debts</p>
              </div>
            </div>
          </NavLink>
          
          <NavLink to="/fin-chatbot">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#007D7C" }}>
                <h3>Financial Chatbot</h3>
              </div>
              <div className="cardContainer">
                <p>Consult our financial chatbot for information on budgeting, saving, investing, and more finance related queries.</p>
              </div>
            </div>
          </NavLink>

        </section>
      </div>
    );
  }
}
export default Finance;
