import { useEffect, useState } from "react";
import { IonButton, IonCard, IonCardContent, IonContent, IonGrid, IonHeader, IonCol, IonPage, IonRow, IonTitle, IonToolbar, IonText, IonRadio, IonRadioGroup, IonLabel, IonSegment, IonSegmentButton, IonButtons, IonMenuButton, IonAlert, useIonToast, IonList, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonIcon } from "@ionic/react";
import { IExerciseProps, IIntensityState, IUserProps, IWorkoutDurationState, IWorkoutState } from "../interfaces/interfaces";
import { trashOutline } from "ionicons/icons";

const ExercisePage: React.FC<IExerciseProps> = ({ user, setCalories }) => {
  const [toast] = useIonToast()
  const [intensity, setIntensity] = useState<IIntensityState["intensity"]>("")
  const [duration, setDuration] = useState<IWorkoutDurationState["duration"]>()
  const [workouts, setWorkouts] = useState<IWorkoutState["workout"]>([])

  const caloryConsumptionFactor = {
    low: 0.044,
    medium: 0.087,
    hard: 0.126,
    extreme: 0.157
   }

  useEffect(() => {
    let sumOfCalories = 0
    workouts.map((workout) => sumOfCalories += workout.calories)
    console.log("sumOfCalories:", sumOfCalories)
    setCalories(sumOfCalories)
  }, [workouts])

  const handleSubmit = () => {
    if (!intensity) {
      toast("Please enter exercise intensity level!", 5000)
      return
    }
    if (!duration) {
      toast("Please enter both, exercise hours and minutes!", 5000)
      return
    }
    if (!user.weight) {
      toast("Users weight missing! Please enter your weight in the User Information.", 5000)
      return
    }
    
    let workoutCalories = parseInt(((duration.hours! * 60 + duration.minutes!) * caloryConsumptionFactor[intensity] * parseFloat(user.weight)).toFixed(0))
    console.log('workoutCalories:', workoutCalories)
      
    setWorkouts([ ...workouts, { id: Date.now(), intensity: intensity, duration: { hours: duration.hours, minutes: duration.minutes }, calories: workoutCalories }])
    toast({
      message: `You have submitted ${duration.hours} hours of workout at ${intensity} 
      intensity level. You have burned ${workoutCalories} calories on this workout! `,
      duration: 3000,
      position: "bottom"
    })
    setIntensity('')
    setDuration(undefined)
  }

  const handleDeleteWorkout = (workoutId: number) => {
    setWorkouts(workouts.filter((workout) => workout.id !== workoutId));
  }

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Excercise page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>
            <h4>Enter a workout by choosign the workout intensity and the workout duration.</h4>
          </IonText>
          <IonCard>
            <IonCardContent className="bodyContainer">
              <IonGrid>
                <IonRow>
                  <IonCol size="12" color="background-color">
                    <IonButton id="workoutIntensity" color="light-green" expand="block">Workout intensity</IonButton>
                    <IonAlert
                      trigger="workoutIntensity"
                      header="Select the intensity level of the workout"
                      buttons={[
                        {
                          text: 'CANCEL',
                          role: 'cancel',                        
                        },
                        {
                          text: 'OK',
                          role: 'confirm',
                          handler: (data) => setIntensity(data)
                        }]}
                      
                      inputs={[
                        {
                          label: 'Low',
                          type: 'radio',
                          value: 'low',
                        },
                        {
                          label: 'Medium',
                          type: 'radio',
                          value: 'medium',
                        },
                        {
                          label: 'Hard',
                          type: 'radio',
                          value: 'hard',
                        },
                        {
                          label: 'Extreme',
                          type: 'radio',
                          value: 'extreme',
                        },
                      ]}
                    ></IonAlert>
                  </IonCol>
                  <IonCol size="12"  color="background-color">
                    <IonButton id="workoutHours" color="light-green" expand="block">Workout hours</IonButton>
                    <IonAlert
                      trigger="workoutHours"
                      header="Enter workout duration in hours and minutes at the selected workout intensity."
                      buttons={[
                        {
                          text: 'CANCEL',
                          role: 'cancel',                        
                        },
                        {
                          text: 'OK',
                          role: 'confirm',   
                          handler: (data) => {
                            if (!data.durationHours) {
                              data.durationHours = 0
                            }
                            if (!data.durationMinutes) {
                              data.durationMinutes = 0
                            }
                            setDuration({ hours: parseInt(data.durationHours), minutes: parseInt(data.durationMinutes) })
                          }
                        }
                      ]}
                  
                      inputs={[
                        {
                          label: "Hours",
                          name: 'durationHours',
                          type: 'number',
                          value: duration?.hours,
                          placeholder: 'Hours',
                          min: 0,
                          max: 100,
                        },
                        {
                          label: "Minutes",
                          name: 'durationMinutes',
                          type: 'number',
                          value: duration?.minutes,
                          placeholder: 'Minutes',
                          min: 0,
                          max: 100,
                        }
                      ]}
                    ></IonAlert>
                  </IonCol>
                  <IonCol size="12"  color="background-color">
                    <IonButton expand="block" onClick={handleSubmit}>Submit workout</IonButton>
                  </IonCol>
                  <IonCol size="12"  color="background-color">
                    <IonButton id="recommendedExercise" color="light-green" expand="block">Recommended exercise</IonButton>
                    <IonAlert
                      trigger="recommendedExercise"
                      header="Recommended exersise"
                      message="Today's recommended exercise is 2km jog and free weighs."
                      buttons={[
                        {
                          text: "OK",
                          role:"cancel"
                        }
                      ]}
                    ></IonAlert>
                  </IonCol>
                  <IonCol size="12"  color="background-color">
                    <IonButton id="recommendedFoodType" color="light-green" expand="block">Recommended food type</IonButton>
                    <IonAlert
                      trigger="recommendedFoodType"
                      header="Recommended food type"
                      message="Today's recommended food type is chicken breast."
                      buttons={[
                        {
                          text: "OK",
                          role:"cancel"
                        }
                      ]}
                    ></IonAlert>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                  {workouts.length
                    ?<IonList>
                         {workouts.map((workout) => (
                          <IonItemSliding key={workout.id}>
                            <IonItem>
                              <IonLabel>{workout.intensity} workout</IonLabel>
                              <IonLabel slot="end">{workout.calories} calories</IonLabel>
                              <IonButton slot="end" onClick={() => handleDeleteWorkout(workout.id)}>
                                <IonIcon icon={trashOutline}></IonIcon>
                              </IonButton>
                            </IonItem>
                            <IonItemOptions side="end">
                              <IonItemOption onClick={() => handleDeleteWorkout(workout.id)}>Delete</IonItemOption>
                            </IonItemOptions>
                          </IonItemSliding>
                        ))}
                    
                    </IonList>
                    : <br/>
                  }

                    
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default ExercisePage;