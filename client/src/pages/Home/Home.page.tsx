import React from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonMenuButton, IonButtons, IonText, IonCard, IonCardContent, IonSplitPane, IonMenu, IonList, IonItem, IonMenuToggle, IonAccordionGroup, IonAccordion, IonLabel } from '@ionic/react';


const Home: React.FC = () => {
  const username = "Joaquín";

  return (
    <IonSplitPane contentId="main-content">
      {/* menulateral */}
      <IonMenu contentId="main-content" type="overlay" style={{ width: '200px', maxWidth: '200px' }}>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menú</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            
          <IonList>
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/home">Inicio</IonItem>
            </IonMenuToggle>
            {/* menu desplegable con sub menus  */}
            <IonAccordionGroup>
              <IonAccordion value="opciones">
                <IonItem slot="header">
                  <IonLabel>Opciones</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink="/admUsuarios">Administrador de Usuarios</IonItem>
                  </IonMenuToggle>
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink="/Rubros">Crear Rubros</IonItem>
                  </IonMenuToggle>
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink="/Formularios">Formularios</IonItem>
                  </IonMenuToggle>
                </div>
              </IonAccordion>
              <IonAccordion value="resultados">
                <IonItem slot="header">
                  <IonLabel>Resultados</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  <IonMenuToggle autoHide={false}>
                    <IonItem routerLink="/resultados">Ver resultados</IonItem>
                  </IonMenuToggle>
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </IonList>
        </IonContent>
         <div className="menu-footer">
            <img src="./images/simotec.webp" alt="Logo de la Aplicación" />
          </div>
      </IonMenu>

      {/* Header */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonText color="primary">
            <h2>¡Bienvenido, {username}!</h2>
          </IonText>

       
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default Home;