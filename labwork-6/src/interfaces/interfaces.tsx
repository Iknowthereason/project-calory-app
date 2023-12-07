/* App */
export interface IUserState {
  username?: string
  age: string
  height: string
  weight: string
  activityLevel?: "low" | "medium" | "high" | ""
  medicalProblems: boolean
}

export interface ICaloriesState {
  calories: string
}

/* UserInfoPage, Login */
export interface IUserInfoState {
  age: string
  height: string
  weight: string
  activityLevel: "low" | "medium" | "high" | ""
  medicalProblems: boolean
}

export interface IUserProps {
  user: IUserState
  setUser: React.Dispatch<React.SetStateAction<IUserState>>
}

/* ExcercisePage */
export interface IExerciseProps {
  user: IUserState
  setCalories: React.Dispatch<React.SetStateAction<number>>
}

export interface IWorkoutState {
  workout: {
    id: number
    intensity: IIntensityState["intensity"]
    duration: IWorkoutDurationState["duration"]
    calories: number
  }[]

  setWorkouts: React.Dispatch<React.SetStateAction<IWorkoutState["workout"]>>
}


export interface IIntensityState {
  intensity: "low" | "medium" | "hard" | "extreme" | "",
  setIntensity: React.Dispatch<React.SetStateAction<IIntensityState>>
}

export interface IWorkoutDurationState {
  duration: {
    hours: number | undefined
    minutes: number | undefined
  }
  setDuration: React.Dispatch<React.SetStateAction<IWorkoutDurationState["duration"]>>
}

// Calculator page
export interface ICalculatorProps {
  activityLevel: string
  calories: number
  caloryIntake: number
}

//Intake page

export interface IIntakeProps {
  setCaloryIntake: React.Dispatch<React.SetStateAction<number>>
}