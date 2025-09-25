import React, { useState } from "react";
import "../styles/Page3Avatars.css";
import Header from "./Header";
import EmployeeProfile from "./EmployeeProfile";
import { IoAddCircleOutline } from "react-icons/io5";
import DocumentIcon from "../svg_comps/DocumentIcon";
import FileIcon from "../svg_comps/FileIcon";
import CalendarIcon from "../svg_comps/CalendarIcon";
import InfoIcon from "../svg_comps/InfoIcon";
import UploadIcon from "../svg_comps/UploadIcon";
import SideArrow from "../svg_comps/SideArrow";
import RadioChecked from "../svg_comps/RadioChecked";
import RadioUnchecked from "../svg_comps/RadioUnchecked";
import DropdownIcon from "../svg_comps/DropdownIcon";
import CalendarDropIcon from "../svg_comps/CalendarDropIcon";
import CheckboxIcon from "../svg_comps/CheckboxIcon";
import CancelButtonIcon from "../svg_comps/CancelButtonIcon";
import SubmitButtonIcon from "../svg_comps/SubmitButtonIcon";
import NoteIcon from "../svg_comps/NoteIcon";
import NoteText from "../svg_comps/NoteText";

const Page3Avatars = () => {
  // Event handlers for all clickable components
  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const handleClockClick = () => {
    console.log("Clock icon clicked");
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked");
  };

  const handleNameClick = () => {
    console.log("Name clicked");
  };

  const handleEmailClick = () => {
    console.log("Email clicked");
  };

  const handleDesignationClick = () => {
    console.log("Designation clicked");
  };

  const handleDivisionClick = () => {
    console.log("Division clicked");
  };

  const handleLocationClick = () => {
    console.log("Location clicked");
  };

  const handleManagerClick = () => {
    console.log("Manager clicked");
  };

  const handleSubmitClick = () => {
    console.log("Submit button clicked - routing will be added after installing dependencies");
    alert("Submit clicked! Please install react-router-dom first: npm install");
  };

  // Employee data object
  const employeeData = {
    initials: "MK",
    name: "Manoj Kandan M ",
    genId: "255048778",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division:
      "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    location: "Bangalore",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  const [showNoteText, setShowNoteText] = useState(false);

  return (
    <div className="avatars-container page3">
      <Header
        breadcrumb="My Workspace > Day Care Support Reimbursement"
        title="Leave Request or Cancel - Employee Submit "
        onBackClick={handleBackClick}
        onClockClick={handleClockClick}
      />

      <EmployeeProfile
        employee={employeeData}
        onAvatarClick={handleAvatarClick}
        onNameClick={handleNameClick}
        onEmailClick={handleEmailClick}
        onDesignationClick={handleDesignationClick}
        onDivisionClick={handleDivisionClick}
        onLocationClick={handleLocationClick}
        onManagerClick={handleManagerClick}
      />

      <div className="leave-request-section">
        <div className="leave-balance-overview">
          <div className="leave-balance-header">
            <div className="leave-balance-title">
              <CalendarIcon className="leave-icon" />
              <h3>Leave Balance Overview</h3>
              <InfoIcon className="info-icon" />
            </div>
            <div className="financial-year">
              <span>Financial year</span>
              <div className="year-selector">
                <div className="radio-option">
                  <input type="radio" name="financialYear" id="year2025" defaultChecked />
                  <span className="radio-icon">
                    <RadioChecked className="icon-checked" />
                    <RadioUnchecked className="icon-unchecked" />
                  </span>
                  <label htmlFor="year2025">2025</label>
                </div>
                <div className="radio-option">
                  <input type="radio" name="financialYear" id="year2024" />
                  <span className="radio-icon">
                    <RadioChecked className="icon-checked" />
                    <RadioUnchecked className="icon-unchecked" />
                  </span>
                  <label htmlFor="year2024">2024</label>
                </div>
              </div>
            </div>
          </div>

          <div className="leave-types-container">
            <div className="leave-type casual">
              <h4>Casual Leave (CL)</h4>
              <p className="days">5 days</p>
            </div>
            <div className="leave-type service">
              <h4>Service Leave (SL)</h4>
              <p className="days">5 days</p>
            </div>
            <div className="leave-type privilege">
              <h4>Privilege Leave (PL)</h4>
              <p className="days">0 days</p>
            </div>
            <div className="leave-type additional">
              <h4>Additional (RTL)</h4>
              <p className="days">12 days</p>
            </div>
            <div className="leave-type loss">
              <h4>Loss Service Leave</h4>
              <p className="days">5 days</p>
            </div>
            <div className="leave-type service-2">
              <h4>Service Leave (SL)</h4>
              <p className="days">12 days</p>
            </div>
            <div className="leave-type maternity">
              <SideArrow className="maternity-arrow" />
              <h4>Maternity Leave</h4>
              <p className="days">182 days</p>
            </div>
          </div>
        </div>

        <div className="apply-cancel-leave">
          <div className="apply-cancel-header">
            <div className="apply-cancel-title">
              <div className="document-icon">
                <DocumentIcon />
              </div>
              <h3>Apply/Cancel Leave</h3>
            </div>
            <div className="leave-info-row">
              <div className="leave-info-text">
                <p>You have <span className="days-highlight">84 Days Leaves</span> for Maternity Leave 2</p>
              </div>
              <div className="info-button">
                <NoteIcon onClick={() => setShowNoteText(true)} />
                <span className="info-text">Note</span>
              </div>
            </div>
          </div>

          <div className="leave-form">
            <div className="form-row-pair">
              <div className="form-row request-type">
                <label>Request Type</label>
                <div className="radio-options">
                  <div className="radio-option selected">
                    <input type="radio" name="requestType" id="applyLeave" defaultChecked />
                    <span className="radio-icon">
                      <RadioChecked className="icon-checked" />
                      <RadioUnchecked className="icon-unchecked" />
                    </span>
                    <label htmlFor="applyLeave">Apply Leave</label>
                  </div>
                  <div className="radio-option">
                    <input type="radio" name="requestType" id="cancelLeave" />
                    <span className="radio-icon">
                      <RadioChecked className="icon-checked" />
                      <RadioUnchecked className="icon-unchecked" />
                    </span>
                    <label htmlFor="cancelLeave">Cancel Leave</label>
                  </div>
                </div>
              </div>

              <div className="form-row day-type">
                <label>Day Type</label>
                <div className="radio-options">
                  <div className="radio-option selected">
                    <input type="radio" name="dayType" id="fullDay" defaultChecked />
                    <span className="radio-icon">
                      <RadioChecked className="icon-checked" />
                      <RadioUnchecked className="icon-unchecked" />
                    </span>
                    <label htmlFor="fullDay">Full day (s)</label>
                  </div>
                  <div className="radio-option">
                    <input type="radio" name="dayType" id="firstHalf" />
                    <span className="radio-icon">
                      <RadioChecked className="icon-checked" />
                      <RadioUnchecked className="icon-unchecked" />
                    </span>
                    <label htmlFor="firstHalf">First Half</label>
                  </div>
                  <div className="radio-option">
                    <input type="radio" name="dayType" id="secondHalf" />
                    <span className="radio-icon">
                      <RadioChecked className="icon-checked" />
                      <RadioUnchecked className="icon-unchecked" />
                    </span>
                    <label htmlFor="secondHalf">Second Half</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row three-column">
              <div>
                <label>Leave Type</label>
                <div className="select-wrapper">
                  <select>
                    <option>Maternity Leave</option>
                  </select>
                  <DropdownIcon className="select-caret" />
                </div>
              </div>
              <div>
                <label>Sub Categories</label>
                <div className="select-wrapper">
                  <select>
                    <option>Select Sub Category</option>
                  </select>
                  <DropdownIcon className="select-caret" />
                </div>
              </div>
            </div>

            <div className="form-row date-range">
              <div className="date-field from-date">
                <label>From Date</label>
                <div className="date-input">
                  <input type="text" value="08-Aug-2025" readOnly />
                  <CalendarDropIcon className="calendar-icon" />
                </div>
              </div>
              <div className="date-field to-date">
                <label>To Date</label>
                <div className="to-date-input">
                  <input type="text" value="08-Aug-2025" readOnly />
                  <CalendarDropIcon className="calendar-icon" />
                </div>
              </div>
              <div className="add-to-leave-list">
                <IoAddCircleOutline className="add-icon" />
                <span>Add to Leave list</span>
              </div>
            </div>

            <div className="form-row acknowledgment">
              <span className="checkbox-wrapper">
                <input type="checkbox" id="acknowledgment" defaultChecked />
                <CheckboxIcon className="checkbox-svg" />
              </span>
              <label htmlFor="acknowledgment">I acknowledge that this OOO request is for official purpose only</label>
            </div>

            <div className="form-row reason">
              <label>Reason for Leave</label>
              <input type="text" value="Due to Emergency Taking Parental Maternity Leave" readOnly />
            </div>

            <div className="form-row comment">
              <label>Comment</label>
              <textarea placeholder="I have an important personal matter to attend at my home town."></textarea>
            </div>

            <div className="form-actions">
              <CancelButtonIcon className="cancel-btn" />
              <SubmitButtonIcon className="submit-btn" onClick={handleSubmitClick} />
            </div>

            <div className="view-policies">
              <FileIcon className="policy-icon" />
              <span>View Policies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Note Text Popup */}
      {showNoteText && (
        <div className="note-text-popup">
          <div className="note-text-content">
            <NoteText />
            <button
              className="close-note-button"
              onClick={() => setShowNoteText(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page3Avatars;
