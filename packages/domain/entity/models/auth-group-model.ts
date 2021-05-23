import { Activity, AuthGroup, uuid } from "../protocols";

type OptionsType = Omit<Partial<AuthGroup>, "id"> & { id?: string };
export class AuthGroupModel implements AuthGroup {
  id: uuid;
  title: string;
  activities: Activity[];

  constructor(authGroup: OptionsType = {}) {
    this.id = <uuid>authGroup.id;
    this.title = authGroup.title;
    this.activities = authGroup.activities;
  }

  addActivity(activity: Activity): Activity {
    const found = this.getActivityByName(activity.name);
    if (found) {
      return found;
    }
    this.activities.push(activity);
    return activity;
  }

  removeActivity(activity: Activity): Activity {
    const found = this.getActivityByName(activity.name);
    if (found) {
      return found;
    }
    this.activities = this.activities.filter(
      ({ name }) => activity.name !== name
    );
  }

  getActivityByName(name: string): Activity {
    return this.activities.find((activity): boolean => activity.name === name);
  }
}
