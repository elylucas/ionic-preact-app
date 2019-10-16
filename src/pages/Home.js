import { h } from 'preact';
import { IonPage, IonContent, IonButton, IonDatetime, IonHeader, IonToolbar, IonTitle, IonApp } from '@ionic/react';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
        <IonButton routerLink="/about" fill="clear">Start</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
