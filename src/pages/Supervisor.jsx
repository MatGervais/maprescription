import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import TableRow from "../components/TableRow";
import axios from "axios";
import AddItem from "../components/addItem";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Supervisor = () => {
  let navigate = useNavigate();
  if (!window.localStorage.getItem("YPToken")) {
    navigate("/");
  }
  const token = window.localStorage.getItem("YPToken");
  const user = jwtDecode(token);

  const [view, setView] = useState({
    type: "gallery",
    icon: "table-list",
    label: "Tableau",
  });
  const [medocs, setMedocs] = useState([]);
  const [requestMsg, setRequestMsg] = useState({
    delete: "",
    modify: "",
  });

  useEffect(() => {
    async function getMeds() {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const datas = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/medication/user/${user?.id}`
      );
      console.log(datas.data.medications);
      setMedocs(datas.data.medications);
    }
    getMeds();
  }, [token]);

  function changeView() {
    if (view.type === "gallery") {
      setView({ type: "table", icon: "grip", label: "Galerie" });
    } else setView({ type: "gallery", icon: "table-list", label: "Tableau" });
  }

  async function removeItem(event) {
    const deleteMedication = medocs.filter((x) => x.id != event.target.id);
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios
        .delete(
          `${process.env.REACT_APP_API_URL}/api/medication/${event.target.id}`
        )
        .then((res) => {
          console.log(res);
          setMedocs(deleteMedication);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container d-flex flex-wrap justify-content-center mt-3">
      <div className="row mt-5">
        {/* <button className="col-md-3 btn btn-primary">
          Je suis un superviseur
        </button> */}
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Les responsables</h1>
            <p className="col-md-12 fs-4">
              Vous connaissez peut-être quelqu'un de votre famille, ou des
              patients qui aurez besoin d'aide pour gérer son stock de
              médicaments. Vous pouvez dans ce cas vous déclarer en tant que
              "responsable" de quelqu'un afin d'avoir accès à ses médicaments.
            </p>
            <p className="col-md-12 fs-4">Vous pourrez : </p>
            <ul>
              <li className="fs-4">Ajouter un médicament</li>
              <li className="fs-4">Consulter les stocks de médicaments</li>
              <li className="fs-4">Modifier un médicament et sa posologie</li>
              <li className="fs-4">Supprimer un médicament</li>
            </ul>

            <button className="btn btn-primary btn-lg" type="button">
              Je suis un·e responsable
            </button>
          </div>
        </div>
      </div>
      <div className="divider wow animate__ animate__fadeInUp  animated"></div>

        <div className="row col-md-12">
            <stripe-pricing-table
        pricing-table-id="prctbl_1MToabGEquqZ6iX9Qz1KlWX9"
        publishable-key="pk_live_WpmXDY5Fpw5aGnkO4ytMYPzt00phA7OKZB"
        >
        </stripe-pricing-table>
        </div>
      {/* <div className="row mb-5">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Prix</h1>
            <p class="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
        </div>
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Gratuit</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">0€<small class="text-muted fw-light">/mois</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                <li>Jusqu'à 3 patients</li>
                <li>Jusqu'à 20 médicaments</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary disabled">Sign up for free</button>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Pro</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">15€<small class="text-muted fw-light">/mois</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                <li>Jusqu'à 50 patients</li>
                <li>Ajout illimité de médicaments</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary">Je suis un·e professionnel·le</button>
            </div>
            </div>
        </div>
        <button className="btn btn-primary">
          Ajouter un·e responsable
        </button>
      </div> */}
    </div>
  );
};

export default Supervisor;
