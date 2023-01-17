import { CarDTO } from "../../dtos/CarDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Confirmation: undefined;
      SchedulingDetails: undefined;
      CarDetails: undefined;
      Scheduling: undefined;
      CarDetails: { car: CarDTO };
    }
  }
}
