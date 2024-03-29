import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../images/practiwiz-logo.png";
import { ModelFixedHeight } from "../utils/Model";
import moment from "moment";
import "./Model.css";
const FormDiv = styled.div`
  padding: 40px 20px;
  width: 90%;
  margin: 0 auto;
`;
const Terms = styled.div`
  cursor: pointer;
`;
const ModifyBtn = styled.button`
  outline: none;
  cursor: pointer;
  padding: 12px 33px;
  background-color: blue;
  color: white;
  transition: all 0.4s ease-in-out;
  border: none;
  border-radius: 7px;
  margin: 20px 10px 20px 0;
`;
const FormData = styled.div``;
const TraineeModifyBooking = ({
  mentor,
  modifyMentorAppointMent,
  bookingStatus,
}) => {
  const user = useSelector((state) => state.user.currentUser);
  const [date, setDate] = useState();
  const [mentorBookingDate, setMentorBookingDate] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const getAllMentorDetailsAvailability = async () => {
        const res = await axios.post(
          `https://practiwiz-backend.azurewebsites.net/api/trainee/profile/booking/get/bookings/onlymentor`,
          {
            mentorEmail: mentor.mentorEmail,
          }
        );
        setMentorBookingDate(res.data);
      };
      getAllMentorDetailsAvailability();
    } catch (error) {
      return;
    }
  }, [mentor.mentorEmail]);

  useEffect(() => {
    try {
      const getAllMentorDetailsAvailability = async () => {
        const res = await axios.post(
          `https://practiwiz-backend.azurewebsites.net/api/trainee/profile/booking/get/bookings/availability`,
          {
            mentorEmail: mentor.mentorEmail,
          }
        );
        setAvailability(res.data);
      };
      getAllMentorDetailsAvailability();
    } catch (error) {
      return;
    }
  }, [mentor.mentorEmail]);

  // disable the list of custom dates
  function isWorkDay(date) {
    for (let i = 0; i < availability.length; i++) {
      const weekDay = new Date(date).getDay();
      const available = availability[i].availability;
      if (available === "weekends") {
        return (
          weekDay !== 1 &&
          weekDay !== 2 &&
          weekDay !== 3 &&
          weekDay !== 4 &&
          weekDay !== 5
        );
      } else if (available === "weekdays") {
        return weekDay !== 0 && weekDay !== 6;
      } else if (available === "saturday") {
        return weekDay === 6;
      } else if (available === "sunday") {
        return weekDay === 0;
      }
    }
  }
  for (let i = 0; i < availability.length; i++) {
    var newEndDate = availability[i].endDate;
  }
  const getDate = (date) => {
    for (let i = 0; i < mentorBookingDate.length; i++) {
      if (
        new Date(date).toLocaleDateString() === mentorBookingDate[i].bookedDate
      ) {
        return "disabled-date";
      }
    }
  };
  const modifyBookingAppointMent = async (event) => {
    event.preventDefault();
    if (
      new Date().toDateString() === new Date(mentor.bookingDate).toDateString()
    ) {
      return (
        setError("Sorry you can not modify on the booking date"),
        toast.error("Sorry you can not cancel on the booking date", {
          position: "top-center",
        })
      );
    }
    if (!date) {
      return (
        toast.error("Please select the date", { position: "top-center" }),
        setError("Please select the date")
      );
    }
    if (
      new Date().toLocaleDateString() === new Date(date).toLocaleDateString()
    ) {
      return toast.error("Today's date can not be selected", {
        position: "top-center",
      });
    }
    setLoading(true);
    const res = await axios.put(
      !bookingStatus
        ? `https://practiwiz-backend.azurewebsites.net/api/trainee/profile/booking/update/bookings/${mentor.bookingId}`
        : `https://practiwiz-backend.azurewebsites.net/api/trainee/profile/booking/reschedule/bookings/${mentor.bookingId}`,
      {
        date: date.toLocaleDateString(),
        bookingId: mentor.bookingId,
        userEmail: user?.email,
      }
    );
    if (res.data.success) {
      toast.success(res.data.success, { position: "top-center" });
      setSuccess(res.data.success);
      setLoading(false);
    }
    if (res.data.error) {
      toast.error(res.data.error, { position: "top-center" });
      setError(res.data.error);
      setLoading(false);
    }
  };

  const payAndModifyBooking = async (event) => {
    let id = mentor.bookingId;
    event.preventDefault();
    if (
      new Date().toDateString() === new Date(mentor.bookingDate).toDateString()
    ) {
      return (
        setError("Sorry you can not modify on the booking date"),
        toast.error("Sorry you can not cancel on the booking date", {
          position: "top-center",
        })
      );
    }
    if (!date) {
      return (
        toast.error("Please select the date", { position: "top-center" }),
        setError("Please select the date")
      );
    }
    if (
      new Date().toLocaleDateString() === new Date(date).toLocaleDateString()
    ) {
      return toast.error("Today's date can not be selected", {
        position: "top-center",
      });
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };

    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post(
          "https://practiwiz-backend.azurewebsites.net/api/trainee/profile/booking/update/bookings/modify-order",
          {
            bookingId: mentor.bookingId,
            date: date.toLocaleDateString(),
          }
        );
        if (result.data.error) {
          return (
            toast.error(result.data.error, {
              position: "top-center",
            }),
            setLoading(false)
          );
        }
        const { amount, id: order_id, currency } = result?.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get(
          "https://practiwiz-backend.azurewebsites.net/api/get-razorpay-key"
        );

        const options = {
          key: razorpayKey,
          amount: amount?.toString(),
          currency: currency,
          name: "Navrik Software Solutions",
          description: "Paying for the mentor",
          image: logo,
          order_id: order_id,
          handler: async function (response) {
            const res = await axios.put(
              "https://practiwiz-backend.azurewebsites.net/api/trainee/profile/booking/update/bookings/modify-booking/pay",
              {
                amount: amount,
                razorpayPaymentId: response.razorpay_payment_id,
                bookingId: id,
                date: date.toLocaleDateString(),
                userEmail: user?.email,
              }
            );
            if (res.data.success) {
              return (
                (setSuccess(res.data.success),
                toast.success(res.data.success, {
                  position: "top-center",
                })),
                setLoading(false)
              );
            }
            if (res.data.error) {
              setError(res.data.error);
              toast.error(res.data.error, {
                position: "top-center",
              });
              setLoading(false);
            }
          },
          prefill: {
            name: user?.firstname + " " + user?.lastname,
            email: user?.email,
            contact: "",
          },
          theme: {
            color: "#80c0f0",
          },
        };
        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  };
  setTimeout(() => {
    setError("");
    setSuccess("");
  }, 10000);
  return (
    <>
      <ModelFixedHeight closeModelHandler={modifyMentorAppointMent}>
        {loading && <p>Loading please wait...</p>}
        <FormDiv>
          {error && <p style={{ color: "red", fontSize: "20px" }}>{error}</p>}
          {success && (
            <p style={{ color: "green", fontSize: "20px" }}>{success}</p>
          )}
          <FormData>
            <form
              onSubmit={
                bookingStatus === "reschedule"
                  ? modifyBookingAppointMent
                  : mentor.changes === 0
                  ? modifyBookingAppointMent
                  : payAndModifyBooking
              }
            >
              Choose the next Date :
              <DatePicker
                className="form-control-1"
                closeOnScroll={true}
                selected={date}
                value={moment(date).format("DD-MMMM-YYYY")}
                onChange={(date) => setDate(date)}
                minDate={new Date()}
                maxDate={new Date(newEndDate)}
                dayClassName={(date) => getDate(date)}
                filterDate={(date) => isWorkDay(date)}
              />
              <ModifyBtn type="submit">
                {bookingStatus === "reschedule"
                  ? "Reschedule Appointment"
                  : mentor.changes === 0
                  ? "Change appointment Date"
                  : "Pay and Modify Date"}
              </ModifyBtn>
            </form>
          </FormData>
          <Terms>
            <p>
              * Modify amount can not be refunded see our
              <Link to="/terms-conditions"> policies and conditions.</Link>
            </p>
            <p>
              * You can not change the appointment date more than two time see
              our <Link to="/terms-conditions">policies and conditions.</Link>
            </p>
          </Terms>
        </FormDiv>
      </ModelFixedHeight>
    </>
  );
};

export default TraineeModifyBooking;
