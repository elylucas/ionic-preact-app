import { IonPage, IonContent, IonButton, IonDatetime, IonHeader, IonToolbar, IonTitle, IonApp } from '@ionic/react';

const About = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
        <IonButton routerLink="/" routerDirection="back" fill="clear">Start</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default About;
