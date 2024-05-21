import React from "react";
import { Header } from "../../global/header/Header";
import "./About.css";

export const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        
        <div className="about-text">
          <h1 >ARTISANALE ET ÉCOLOGIQUE</h1>
          <p>
            <span className="bold">N</span>ous sommes une entreprise familiale qui se consacre exclusivement à
            la culture de l'aloe Vera certifiée Bio, fabrication, vente et
            distribution de produits cosmétiques et diététiques dans le secteur
            de produits naturels. Soucieux de progresser constamment, et avec la
            même volonté et le même enthousiasme qui nous ont accompagnés tout
            au long de nos 12 ans d'expériences, nous nous voulons plus
            d’écologie, en renouvelant notre ligne avec produits Bio Notre but
            est d'essayer de vous apporter, à travers nos produits, le bien-
            être et la beauté, aussi bien à l'intérieur qu'à l'extérieur en
            respectant au maximum la nature. Découvrez notre gamme de produits
            100% Naturel à base d’Aloe Vera BIO, conçue pour offrir à votre peau
            et vos cheveux les bienfaits naturels de cette plante
            exceptionnelle. Notre Aloe Vera est cultivé de manière biologique,
            sans pesticides ni produits chimiques, pour préserver ses propriétés
            bienfaisantes.
          </p>
        </div>
        <div className="about-img">
          <img src="images/about.jpg"></img>
        </div>
      </div>
    </>
  );
};
