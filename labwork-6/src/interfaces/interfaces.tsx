/* App */
export interface IUserState {
  age: string
  height: string
  weight: string
  activityLevel: "low" | "medium" | "high" | ""
  medicalProblems: boolean
}

export interface ICaloriesState {
  calories: string
}

/* UserInfoPage */
export interface IUserInfoState {
  age: string
  height: string
  weight: string
  activityLevel: "low" | "medium" | "high" | ""
  medicalProblems: boolean
}

export interface IUserProps {
  user: IUserInfoState
  setUser: React.Dispatch<React.SetStateAction<IUserInfoState>>
}

/* ExcercisePage */
export interface IExerciseProps {
  user: IUserState
  setCalories: React.Dispatch<React.SetStateAction<number>>
}

export interface IWorkoutState {
  workout: {
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
